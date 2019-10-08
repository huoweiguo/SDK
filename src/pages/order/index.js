import React, { Component } from 'react';
import BottomBar from '../../components/bottomBar';
import { Head, Nodata, Orderlist, OrderMain, OrderBack, ShowMask } from './style';
import Toast from 'react-simple-toast';
import Tloader from 'react-touch-loader';
import "./tloader.css";
// require('./tloader.css');
class Order extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token"),
            userId: localStorage.getItem("userId"),
            merchantId: localStorage.getItem("merchantId"),
            curAll: 1,
            canRefreshResolve: 1,//刷新
            listLen: [],
            hasMore: 2,
            initializing: 0,
            autoLoadMore: true,
            isShow: false
        }
    }

    refresh = (resolve, reject) => {
        const { canRefreshResolve } = this.state;
        if (!canRefreshResolve) {
            reject();
        } else {
            this.setState({
                curAll: 1
            });
            this.init(resolve);
        }
    }

    loadMore = (resolve) => {
        const { curAll } = this.state;
        this.setState({
            curAll: curAll+1
        });
        this.init(resolve);
    }
    
    init(resolve) {
        var _this = this;
        fetch('/api/postloan/loan/queryBillOrderList', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                token: _this.state.token,
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                size: 10,
                merchantId: _this.state.merchantId,
                current: _this.state.curAll
            })
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    listLen: _this.state.curAll == 1 ? res.data.records : _this.state.listLen.concat(res.data.records),
                    hasMore: _this.state.curAll < res.data.pages
                });
                if (resolve) {
                    setTimeout(function () {
                        resolve();
                    },500)
                }
                  
            } else {
                Toast({
                    type: "msg",
                    msg: res.respMsg, 
                    duration: 1500
                });
            }
        })
        .catch ( err => {
            console.error(err);
        });
    }

    goLoan() {
        this.props.history.push('/home');
    }

    cancel() {
        this.setState({
            isShow: false
        })
    }

    goLink(item) {
        if (item.status == 'P') {
            this.setState({
                isShow: true
            })
        } else if (item.status == 'S') {
            localStorage.setItem('billOrderId', item.sysSeqId);
            this.props.history.push('/orderPlanRepayment');
        } else {
            localStorage.setItem('billOrderId', item.sysSeqId);
            localStorage.setItem('orderProduct', item.productId);
            localStorage.setItem('allAmt', item.pendingRepayAmt);
            this.props.history.push('/orderPlan');
        }
    }

    componentDidMount() {
        this.init();
    }

    render() {
        const {
            listLen, hasMore, initializing, autoLoadMore
        } = this.state;
        
        return (
            <OrderBack>
                <Head>还款</Head>
                {
                    this.state.listLen.length > 0 ?
                    <OrderMain>
                        <Tloader
                            onRefresh={this.refresh}
                            onLoadMore={this.loadMore}
                            hasMore={hasMore}
                            autoLoadMore={autoLoadMore}
                            initializing={initializing}
                        >
                            {
                                listLen.map( item => {
                                    return (
                                        <Orderlist key={item.sysSeqId} onClick={this.goLink.bind(this,item)}>
                                            <div className='li_nav'>
                                                <div className="order_user">
                                                    {item.productName}
                                                </div>
                    
                                                <div className="order_status">
                                                    {item.status === 'S' ? '已结清' : item.status === 'P' ? '处理中' : '使用中'}
                                                    <img src={require('../../assets/right-arrow.png')}/>
                                                </div>
                                            </div>
                                            <div className="li_desc">
                                                <div className="order_money">
                                                    <p>{item.status === 'S' ? '已还总额(元)' : '未还金额(元)'}</p>
                                                    <span>{item.status === 'S' ? item.repayAmt : item.pendingRepayAmt}元</span>
                                                </div>
                                                <div className="order_date">
                                                    <p>借款期限：{item.loanPeriods}</p>
                                                    <p>借款时间：{item.loanDate}</p>
                                                </div>
                                            </div>
                                        </Orderlist>
                                    )
                                })
                            }
                        </Tloader>
                    </OrderMain>
                    :
                    <Nodata>
                        <img src={require('../../assets/icon_zwhk@3x.png')} />
                        <p>暂无还款</p>
                        <span onClick={this.goLoan.bind(this)}>去借款</span>
                    </Nodata>
                }
                {
                    this.state.isShow
                        ? (<ShowMask>
                            <div className="mask"></div>
                            <div className="popup">
                                <img src={require('../../assets/pic1@3x.png')} />
                                <span onClick={this.cancel.bind(this)}>知道了</span>
                            </div>
                        </ShowMask>)
                        : ''
                }
                <BottomBar name="repay" history={this.props.history} />
            </OrderBack>
        )
    }
}
export default Order