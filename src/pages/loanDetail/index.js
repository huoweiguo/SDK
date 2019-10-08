import React, { Component, Fragment } from 'react';
import Toast from 'react-simple-toast';
import { LoanBack, Head, DetailLoan, RepayBox } from './style'

class LoanDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token"),
            productId: localStorage.getItem("productId"),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            loanApplySeqId: localStorage.getItem("loanApplySeqId"),
            contractShowFlag: '',
            planList: [],
            serviceAmt: '',
            totalPayAmt: '',
            interestPayAmt: '',
            accountAmt: '',
            productName: '',
            productLoanAmt: '',
            periodUnit: '',
            loanInstalmentsNum: '',
            defaultCardName: '',
            defaultCard: '',
            isPlan: false,
            canClick: true,
            protAmt: '',
            bankCard: '',
            bankName: '',
            paymentAmt: ''
        }
    }

    goBack() {
        window.history.back();
    }

    goLink() {
        this.props.history.push('/cardList');
    }
    
    init() {
        const t = new Date().getTime(),
            { token, userId, merchantId, loanApplySeqId, productId } = this.state;
        fetch(`/api/preloan/loanApply/record/getApplyLoanResult?t=${t}&loanApplySeqId=${loanApplySeqId}&productId=${productId}&userId=${userId}&merchantId=${merchantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                token
            }
        })
        .then(res => res.json())
        .then ( res => {
            if (res.respCode === '000000') {
                const replayInfo = res.data.replayInfo,
                    loanApply = res.data.loanApply,
                    userBankInfos = res.data.userBankInfos ? res.data.userBankInfos : '',
                    planList = res.data.billRepayPlanList;
                this.setState({
                    contractShowFlag: res.data.contractShowFlag,
                    planList,
                    serviceAmt: replayInfo.serviceAmt,
                    totalPayAmt: replayInfo.totalPayAmt,
                    interestPayAmt: replayInfo.interestPayAmt,
                    accountAmt: replayInfo.accountAmt,
                    productName: loanApply.productName,
                    productLoanAmt: loanApply.productLoanAmt,
                    periodUnit: loanApply.periodUnit === 'W' ? '周' : loanApply.periodUnit === 'D' ? '天' : loanApply.periodUnit === 'M' ? '月' : '',
                    loanInstalmentsNum: loanApply.loanInstalmentsNum,
                    defaultCardName: userBankInfos.bankName ? userBankInfos.bankName : '',
                    defaultCard: userBankInfos.bankCard ? userBankInfos.bankCard.substring(userBankInfos.bankCard.length - 4) : ''
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

    lookPlan() {
        this.setState({
            isPlan: true
        })
    }

    close() {
        this.setState({
            isPlan: false
        })
    }

    // 获取信息
    getCardMsg(){
        var _this = this;
        if(_this.state.cardNo == ''){
            return false;
        }
        if (_this.state.cardNo.length > 15) {
            fetch('/api/preloan/cabin/bank?cardNo=' + _this.state.cardNo, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    token: _this.state.token,
                    userId: _this.state.userId,
                    merchantId: _this.state.merchantId
                } 
            })
            .then(res => res.json())
            .then ( res => {
                if(res.respCode === '000000'){
                    this.setState({
                        bankCode: res.bankCode,
                        bankName: res.bankName
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
    }

    applyLoan() {
        const _this = this;
        fetch('/api/postloan/loan/confirmLoan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: _this.state.token,
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                loanApplyId: _this.state.loanApplySeqId
            })
        })
        .then(res => res.json())
        .then(res => {
            const headerNav = encodeURIComponent("借款结果");

            if(res.respCode === '000000'){
                setTimeout(_ => {
                    this.queryLoanResult();
                })
            } else if (res.respCode == '060028') {
                const title = encodeURIComponent("来晚了，今日额度已放完");
                const smallText = encodeURIComponent("小主别灰心，明日早点来借款吧");
                const search = `status=true&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=1`;
                this.props.history.push('/result?' + search);
            } else if (res.respCode == '060021') {
                const title = encodeURIComponent("处理中...");
                const smallText = encodeURIComponent("系统正在放款中，到账时间大约需要24小时,请耐心等待");
                const search = `status=true&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=1`;
                this.props.history.push('/result?' + search);
            } else {
                const title = encodeURIComponent("借款失败");
                const smallText = encodeURIComponent(res.respMsg);
                const search = `status=true&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=1`;
                this.props.history.push('/result?' + search);
            }
        })
        .catch ( err => {
            console.error(err);
        });
    }

    queryLoanResult() {
        const _this = this;
        fetch('/api/postloan/loan/queryLoanResult', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: _this.state.token,
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                loanApplyId: _this.state.loanApplySeqId
            })
        })
        .then(res => res.json())
        .then(res => {
            const headerNav = encodeURIComponent("借款结果");
            if(res.respCode === '000000'){
                if (res.data.loanloanStatus == 'W') {
                    const protAmt = res.data.protAmt,
                        bankCard = res.data.bankCode.substring(res.data.bankCode.length - 4),
                        bankName = res.data.bankName,
                        paymentAmt = res.data.paymentAmt;
                    const title = encodeURIComponent("借款成功");
                    const search = `status=true&title=${title}&loanAmt=${protAmt}&actureAmt=${paymentAmt}&bankName=${bankName}&bankSort=${bankCard}&headerNav=${headerNav}&btnType=1`;
                    this.props.history.push('/result?' + search);
                } else if (res.data.loanStatus === 'P' || res.data.loanStatus === 'I') {
                    const title = encodeURIComponent("处理中...");
                    const smallText = encodeURIComponent("系统正在放款中，到账时间大约需要24小时,请耐心等待");
                    const search = `status=true&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=1`;
                    this.props.history.push('/result?' + search);
                } else {
                    const title = encodeURIComponent("借款失败");
                    const smallText = encodeURIComponent(res.data.loanMsg);
                    const search = `status=true&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=1`;
                    this.props.history.push('/result?' + search);
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

    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <LoanBack>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    借款详情
                </Head>
                <DetailLoan>
                    <div className="quota">
                    
                        <div className="qu_list">
                            <div>
                                <span>借款金额</span>
                                <p>{this.state.productLoanAmt}元</p> 
                            </div>
                            <div>
                                <span>期限</span>
                                <p>{this.state.loanInstalmentsNum}{this.state.periodUnit}</p>
                            </div>
                        </div>

                        <div className="loan-prod">
                            <span>借款产品</span>
                            <em>{this.state.productName}</em>
                        </div>
                    </div>
                    <div className="detail-list">
                        <h4>费用说明</h4>
                        <ul>
                            <li><span>综合费用</span><i>{this.state.serviceAmt}元</i></li>
                            <li><span>到账金额</span><i>{this.state.accountAmt}元</i></li>
                            <li><span>到期应还</span><i>{this.state.totalPayAmt}元</i></li>
                            <li><span>还款计划</span><i className="look" onClick={this.lookPlan.bind(this)}>查看</i></li>
                        </ul>
                    </div>

                    <div className="detail-list">
                        <h4>银行卡信息
                            <span onClick={this.goLink.bind(this)}>更换银行卡</span>
                        </h4>
                        <ul>
                            <li><span>到账银行卡</span><i>尾号{this.state.defaultCard}</i></li>
                            <li><span>所属银行</span><i>{this.state.defaultCardName}</i></li>
                        </ul>
                    </div>

                    <div className="charge_agree">
                        {
                            this.state.contractShowFlag != 'N'
                                ? (<Fragment><em className="protocol">我已阅读并同意</em> <span className="a_protocol">《借款相关协议》</span></Fragment>)
                                : ''
                        }
                        <div className="agree_btn_set">
                            {
                                this.state.defaultCard
                                    ?(this.state.canClick
                                        ? (<span className="a_btn2" onClick={this.applyLoan.bind(this)}>同意借款</span>)
                                        : (<span className="unclick">放款中···</span>)
                                    )
                                    : (<span className="a_btn2" onClick={this.goLink.bind(this)}>去绑卡</span>)
                            }
                        </div>
                    </div>
                </DetailLoan>
                <RepayBox className={this.state.isPlan ? 'nothing' : ''}>
                    <div className="mask"></div>
                    <div className={this.state.isPlan ? 'repay_box strenth' : 'repay_box'}>
                        <h2 className="repay_box_nav">还款计划 <span onClick={this.close.bind(this)}></span></h2>
                        <div className="repay-small">温馨提示：次日起可提前还款</div>
                        <div className="replay_content">
                            <span>还款金额(元)</span>
                            <h2 className="repay-money">{this.state.totalPayAmt}</h2>
                            <div className="repay-rate">总利息{this.state.interestPayAmt}元</div>
                            <div className="repay-list">
                                <ul>
                                    {
                                        this.state.planList.map((item, index) => {
                                            return (<li key={index}>
                                                <div className="li-index">{index + 1}</div>
                                                <div className="li-date">{item.periodsEndDate}</div>
                                                <div className="li-money">
                                                    <span>{item.periodsShldRepayAmt}元</span>
                                                    <em>含本金{item.periodsPortAmt}元，利息{item.periodsInterestRateAmt}元</em>
                                                </div>
                                            </li>)
                                        })
                                    }
                                    
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </RepayBox>
            </LoanBack>
                
        )
    }
}
export default LoanDetail