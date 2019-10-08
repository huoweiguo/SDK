import React from 'react';
import Toast from 'react-simple-toast';
import { OrderBack, Head, OrderNav, DetailList } from './style';
class RepaymentDetail extends React.Component{
	// 构造函数
    constructor(props) {
        // 传值
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            repayPlanId: localStorage.getItem('repayPlanId'),
            name: '已结清金额(元)',
            list: {}
        };
    }

    init() {
        var _this = this;
        fetch(`/api/postloan/plan/` + _this.state.repayPlanId + `?t=${new Date().getTime()}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                token: _this.state.token,
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
            }
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    list: res.data
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

    goBack() {
        window.history.back();
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
                        {this.state.list.actualRepayAmt}
                        <img src={require('../../assets/icon_yjq@3x.png')}/>
                    </h2>
                    <span>好借好还，再借不难</span>
                </OrderNav>
                <DetailList>
                    <h2>借款明细</h2>
                    <div className="list">
                        借款金额
                        <span>{this.state.list.periodsPortAmt}</span>
                    </div>
                    <div className="list">
                        借款产品
                        <span>{this.state.list.productName}</span>
                    </div>
                    <div className="list">
                        借款期限
                        <span>{this.state.list.loanPeriodsTimes}{this.state.list.loanPeriodsUnit === 'WEEK' ? '周' : this.state.list.loanPeriodsUnit === 'DAY' ? '天' : this.state.list.loanPeriodsUnit === 'MONTH' ? '月' : ''}|{this.state.list.periodsStartDate}至{this.state.list.periodsEndDate}</span>
                    </div>
                    <div className="list">
                        借款时间
                        <span>{this.state.list.periodsStartDate}</span>
                    </div>
                    <div className="list">
                        订单编号
                        <span>{this.state.list.billOrderId}</span>
                    </div>
                    {
                        this.state.list.contractShowFlag != 'N'
                            ? (<div className="list">
                                借款合同
                                <em>查看</em>
                            </div>)
                            : ''
                    }
                </DetailList>
                <DetailList>
                    <h2>还款明细</h2>
                    <div className="list">
                        本金
                        <span>{this.state.list.periodsPortAmt}元</span>
                    </div>
                    <div className="list">
                        利息
                        <span>{this.state.list.periodsInterestRateAmt}元</span>
                    </div>
                    <div className="list">
                        逾期费
                        <span>{this.state.list.periodsPenalSumAmt}元</span>
                    </div>
                    <div className="list">
                        手续费
                        <span>{this.state.list.periodsViolateAmt}元</span>
                    </div>
                    {
                        this.state.list.periodsSubstractAmt
                            ? (<div className="list">
                                减免金额
                                <span>{this.state.list.periodsSubstractAmt}元</span>
                            </div>)
                            : ''
                    }
                    <div className="list">
                        还款时间
                        <span>{this.state.list.loanSettleTimeFormat}</span>
                    </div>
                </DetailList>
            </OrderBack>
		)
    }
}
export default RepaymentDetail;