import React from 'react';
import Toast from 'react-simple-toast';
import { OrderBack, Head, Tips, RepayType, RepayDetail, RepaySmall, RepayBtn, BankList } from "./style";
import queryString from 'querystring';
import { HeaderNav } from '../result/styles';
class Repay extends React.Component{
	// 构造函数
    constructor(props) {
        // 传值
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            billOrderId: localStorage.getItem('billOrderId'),
            periods: localStorage.getItem('orderPeriods'),
            amt: localStorage.getItem('orderAmt'),
            orderAmount: '',
            serviceAmt: '',
            list: {},
            bankName: '',
            orderAmountAll: '',
            tradeType: "HK",
            bankCard: '',
            bankLogo: '',
            bankName: '',
            cardEndNum: '',
            canBindCard: '',
            lookBank: false,
            bankList: [],
            productId: localStorage.getItem('orderProduct'),
            isChange: ''
        };
    }
    // 获得确认还款数据
    init() {
        var _this = this;
        fetch('/api/postloan/repayment/confirm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                token: _this.state.token,
            },
            body: queryString.stringify({
                token: _this.state.token,
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                billOrderId: _this.state.billOrderId,
                amt: _this.state.amt
            })
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    orderAmount: res.data.amt,
                    serviceAmt: res.data.serviceAmt,
                    orderAmountAll: res.data.actAmt,
                    bankLogo: res.data.bankLogo,
                    bankName: res.data.bankName,
                    cardEndNum: res.data.bankCode,
                    canBindCard: res.data.canBindCard
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
    // 得到银行卡列表
    getBankList() {
        var _this = this;
        fetch('/api/preloan/bankCard/query', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                token: _this.state.token,
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                productId: _this.state.productId
            })
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    bankList: res.data.length > 0 ? res.data : []
                }, () => {
                    this.state.bankList.map(item => {
                        if (item.isDefault == 'Y') {
                            this.setState({
                                bankCard: item.bankCard,
                                isChange: item.userBankId
                            })
                        }
                    })
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
    // 去换卡
    handleChange() {
        this.setState({
            lookBank: true
        })
    }
    // 换卡
    changeCard(item) {
        this.setState({
            isChange: item.userBankId,
            bankCard: item.bankCard,
            bankLogo: item.bankLog,
            bankName: item.bankName,
            cardEndNum: item.bankCard.substring(item.bankCard.length - 4),
            lookBank: false
        })
    }
    // 关闭换卡
    closeBank() {
        this.setState({
            lookBank: false
        })
    }
    // 去绑卡
    goBind() {
        this.props.history.push('/cardList?type=order');
    }
    // 确认还款
    repaySure(){
        var _this = this;
        fetch('/api/postloan/repayment/pay', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                token: _this.state.token,
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                billOrderId: _this.state.billOrderId,
                amt: _this.state.amt,
                periods: _this.state.periods,
                tradeType: _this.state.tradeType,
                bankCard: _this.state.bankCard
            })
        })
        .then(res => res.json())
        .then ( res => {
            this.setState({
                retult: true
            })
            const headerNav = encodeURIComponent("还款结果");
            if (res.respCode === '000000') {
                const title = encodeURIComponent("还款成功，为信用点赞");
                const smallText = encodeURIComponent("还款方式：" + _this.state.bankName + "还款金额" + _this.state.amt);
                const search = `status=true&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=2`;
                this.props.history.push('/result?' + search);
            } else if (res.respCode == '500') {
                const title = encodeURIComponent("还款失败");
                const smallText = encodeURIComponent(res.respMsg);
                const search = `status=false&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=2`;
                this.props.history.push('/result?' + search);
            } else {
                const title = encodeURIComponent("还款处理中");
                const smallText = encodeURIComponent(res.respMsg);
                const search = `status=true&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=2`;
                this.props.history.push('/result?' + search);
            }
        })
        .catch ( err => {
            console.error(err);
        });
    }
    // 返回上一页
    goBack(){
        this.props.history.push('/orderDetail');
    }

    componentDidMount() {
        this.init();
        this.getBankList();
    }

	render() {
		return (
            <OrderBack>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    确认还款
                </Head>
                <Tips>注意：银行卡仅支持储蓄卡还款。</Tips>
                {
                    this.state.bankLogo
                        ? (<RepayType>
                                <div className="repay-bank" onClick={this.handleChange.bind(this)}>
                                    <img src={this.state.bankLogo} /> {this.state.bankName} ({this.state.cardEndNum})
                                    <i className="arrow_right"></i>
                                </div>
                            </RepayType>)
                        : ''
                }
                
                <RepayDetail>
                    <p>还款金额(元)</p>
                    <div className="repay-money">
                        <span>&yen;</span>
                        {this.state.orderAmount}
                    </div>
                </RepayDetail>
                <RepaySmall>本次还款手续费<span>{this.state.serviceAmt}</span>元，实扣金额<span>{this.state.orderAmountAll}</span>元</RepaySmall>
                <RepayBtn>
                    {
                        this.state.bankLogo
                            ? (<button className="repay-btn2" onClick={this.repaySure.bind(this)}>确认</button>)
                            : (<button className="repay-btn2" onClick={this.goBind.bind(this)}>去绑卡</button>)
                    }
                    
                </RepayBtn>
                {/* 选择还款银行卡 */}
                <div className={this.state.lookBank ? 'mask' : ''}></div>
                <BankList className={this.state.lookBank ? 'look' : ''}>
                    <h3 className="bank-nav">选择支付方式
                        <img className="close-btn" src={require('../../assets/delete@3x.png')} onClick={this.closeBank.bind(this)}/>
                    </h3>
                    <ul>
                        {
                            this.state.bankList.map((item,index) => {
                                return (<li key={index} className={this.state.isChange == item.userBankId ? 'active' : ''} onClick={this.changeCard.bind(this,item)}>
                                        <img src={item.bankLog} className="bankImg" />
                                        <div className="bank-detail">
                                            <span className="bank-name">{item.bankName}<i>({item.bankCard.substring(item.bankCard.length-4)})</i></span>
                                            <p>银行单笔限额{item.limitPerTransaction}元</p>
                                        </div>
                                        <i className="correct"></i>
                                    </li>)
                            })
                        }
                    </ul>
                    <span className="addCardPay" onClick={this.goBind.bind(this)}>
                        <img src={require('../../assets/icon_tjyhk@3x.png')} className="bankImg" />
                        <div className="add-card">添加银行卡支付</div>
                    </span>
                </BankList>
            </OrderBack>
		)
    }
}
export default Repay;