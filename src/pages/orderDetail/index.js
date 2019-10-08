import React, { Fragment }from 'react';
import Toast from 'react-simple-toast';
import { OrderBack, Head, OrderNav, DetailList } from "./style";

class Detail extends React.Component{
	// 构造函数
    constructor(props) {
        // 传值
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            repayPlanId: localStorage.getItem('repayPlanId'),
            list: {}
        };
    }

    init() {
        var _this = this;
        fetch('/api/postloan/loan/queryBillRepayPlanDetail', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                token: _this.state.token,
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                repayPlanId: _this.state.repayPlanId
            })
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

    goRepay() {
        localStorage.setItem('orderAmt', this.state.list.currentShouldRepayTotalAmt)
        localStorage.setItem('orderPeriods', this.state.list.currentPeriods);
        this.props.history.push('/repay');
    }

    goBack() {
        this.props.history.push('/orderPlan');
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
                    <span>{this.state.list.currentRepayDate}应还款(元)</span>
                    <h2>
                        {this.state.list.currentShouldRepayTotalAmt}
                    </h2>
                    {
                        (this.state.list.overdueStatus != 'O' && !this.state.list.todayIsRepay)
                        ? (<p>
                                <img src={require('../../assets/icon_taps2_blue@3x.png')} />
                                确保到期资金充足，请按时还款
                            </p>)
                        : (this.state.list.overdueStatus != 'O' && this.state.list.todayIsRepay)
                        ? (<p className="orderOver">
                                <img src={require('../../assets/icon_taps2_red@3x.png')} />
                                今天是还款日，请尽快还款以免对征信产生影响
                            </p>)
                        : this.state.list.overdueStatus == 'O'
                        ? (<p className="orderOver">
                                <img src={require('../../assets/icon_taps2_red@3x.png')} />
                                您已逾期{this.state.list.overdueDay}天，请尽快还款以免对征信产生影响
                            </p>)
                        : ''
                    }
                    <em onClick={this.goRepay.bind(this)}>确认还款</em>
                </OrderNav>
                <DetailList>
                    <div className="listNav">
                        <h2>
                            {this.state.list.currentShouldRepayTotalAmt}元
                            {
                                this.state.list.totalPeriods > 1
                                    ? <span>第{this.state.list.currentPeriods}期</span>
                                    : <span>{this.state.list.currentPeriods}天</span>

                            }
                        </h2>
                        <p>{this.state.list.currentLoanDate}借 |
                            {
                                this.state.list.totalPeriods > 1
                                    ? <Fragment>共{this.state.list.totalPeriods}期</Fragment>
                                    : <Fragment>{this.state.list.currentPeriods}天</Fragment>
                            }
                        </p>
                    </div>
                    <div className="list">
                        本金
                        <span>{this.state.list.currentCapital}</span>
                    </div>
                    <div className="list">
                        利息
                        <span>{this.state.list.currentInterest}</span>
                    </div>
                    {
                        this.state.list.overdueAmt
                            ? (<div className="list">
                                逾期费
                                <span>{this.state.list.overdueAmt}</span>
                            </div>) : ''
                    }
                    {this.state.list.actualRepayAmt
                        ? (<div className="list">
                            已还金额
                            <span>{this.state.list.actualRepayAmt}</span>
                        </div>) : ''
                    }
                    {
                        this.state.list.periodsSubstractAmt
                        ? (<div className="list">
                            减免金额
                            <span>{this.state.list.periodsSubstractAmt}</span>
                        </div>) : ''
                            
                    }
                </DetailList>
            </OrderBack>
		)
    }
}
export default Detail;