import React from 'react';
import Toast from 'react-simple-toast';
import { OrderBack, Head, OrderNav, OrderTitle, PlanList, ShowMask } from './style';
class Plan extends React.Component{
	// 构造函数
    constructor(props) {
        // 传值
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            orderId: localStorage.getItem('billOrderId'),
            name: '未还总额(元)',
            amt: localStorage.getItem('allAmt'),//带过来的数据
            unclearCount: '',
            list: [],
            isShow: false
        };
    }

    init() {
        var _this = this;
        fetch('/api/postloan/loan/queryBillRepayPlanList', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                token: _this.state.token,
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                billOrderId: _this.state.orderId
            })
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    list: res.data.repayPlanRoughList,
                    unclearCount: res.data.unclearCount
                });
                  
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

    goPaymentPage(item) {
        localStorage.setItem("repayPlanId", item.sysSeqId);
        this.props.history.push('/orderRepaymentDetail');
    }

    goDetail(item) {
        localStorage.setItem("repayPlanId", item.sysSeqId);
        this.props.history.push('/orderDetail');
    }

    waiting() {
        this.setState({
            isShow: true
        })
    }

    goBack() {
        this.props.history.push('/order');
    }

    cancel() {
        this.setState({
            isShow: false
        })
    }

    componentDidMount() {
        this.init();
    }

	render() {
		return (
            <OrderBack>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    还款
                </Head>
                <OrderNav>
                    <span>{this.state.name}</span>
                    <h2>{this.state.amt}</h2>
                    <span>共计<em>{this.state.unclearCount}笔</em>未结清</span>
                </OrderNav>
                <OrderTitle>账单明细</OrderTitle>
                <PlanList>
                    {
                        this.state.list.map((item, index) => {
                            if (item.status === 'S') {
                                return (
                                    <h2 key={index} className="orderEnd" onClick={this.goPaymentPage.bind(this,item)}>
                                        {item.repayDate}
                                        <span>已结清
                                            <img src={require('../../assets/arrow.png')} />
                                        </span>
                                    </h2>
                                )
                            } else if (item.status === 'W') {
                                if (item.overdueStatus == 'O') {
                                    return (
                                        <h2 key={index} className="orderOver" onClick={this.goDetail.bind(this,item)}>
                                            {item.repayDate}
                                            <span>{item.shouldRepayAmt}
                                                <img src={require('../../assets/arrow.png')}/>
                                            </span>
                                        </h2>
                                    )
                                } else {
                                    return (
                                        <h2 key={index} onClick={this.goDetail.bind(this,item)}>
                                            {item.repayDate}
                                            <span>{item.shouldRepayAmt}元
                                                <img src={require('../../assets/arrow.png')} />
                                            </span>
                                        </h2>
                                    )
                                }
                                
                            } else if (item.status === 'P') {
                                return (
                                    <h2 key={index} className="orderEnd"  onClick={this.waiting.bind(this)}>
                                        {item.repayDate}
                                        <span>处理中
                                            <img src={require('../../assets/arrow.png')} />
                                        </span>
                                    </h2>
                                )
                            } else {
                                return (
                                    <h2 key={index} className="orderEnd">
                                        {item.repayDate}
                                        <span>{item.shouldRepayAmt}
                                            <img src={require('../../assets/arrow.png')} />
                                        </span>
                                    </h2>
                                )
                            }
                        })
                    }
                </PlanList>
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
            </OrderBack>
		)
    }
}
export default Plan;