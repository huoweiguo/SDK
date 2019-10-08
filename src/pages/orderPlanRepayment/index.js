import React from 'react';
import Toast from 'react-simple-toast';
import { OrderBack, Head, OrderNav, OrderTitle, PlanList } from './style';
import queryString from 'querystring';

class PlanRepayment extends React.Component{
	// 构造函数
    constructor(props) {
        // 传值
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            orderId: localStorage.getItem('billOrderId'),
            name: '已结清金额(元)',
            amt: localStorage.getItem('allAmt'),//带过来的数据
            unclearCount: '',
            list: []
        };
    }

    init() {
        var _this = this,
            t = new Date().getTime(),
            { orderId, token, merchantId, userId } = this.state;
        fetch(`/api/postloan/plan/detail?t=${t}&token=${token}&merchantId=${merchantId}&userId=${userId}&billOrderId=${orderId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                token
            }
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    list: res.data,
                    unclearCount: res.data[0].loanTotalPeriods
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

    goDetail(item) {
        localStorage.setItem("repayPlanId", item.sysSeqId);
        this.props.history.push('/orderRepaymentDetail')
    }

    goBack() {
        this.props.history.push('/order');
    }

    componentDidMount() {
        this.init();
    }

	render() {
		return (
            <OrderBack>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    还款详情
                </Head>
                <OrderNav>
                    <span>{this.state.name}</span>
                    <h2>
                        {this.state.amt}
                        <img src={require('../../assets/icon_yjq@3x.png')}/>
                    </h2>
                    <span>对应<em>{this.state.unclearCount}笔</em>借款</span>
                </OrderNav>
                <OrderTitle>共{this.state.unclearCount}笔</OrderTitle>
                {
                    this.state.list.map((item, index) => {
                        return (<PlanList key={index}>
                            <div className="listNav">
                                本息已还款
                                <span>{item.actualRepayAmt}元</span>
                            </div>
                            <div className="list">
                                借款金额
                                <span>{item.periodsPortAmt}元</span>
                            </div>
                            <div className="list">
                                借款期限
                                <span>{item.periodsStartDate}至{item.periodsEndDate}</span>
                            </div>
                            <div className="list">
                                借款详情
                                <em onClick={this.goDetail.bind(this, item)}>点击查看</em>
                            </div>
                        </PlanList>)
                    })
                }
            </OrderBack>
		)
    }
}
export default PlanRepayment;