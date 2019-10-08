import React, { Component } from 'react';
import Toast from 'react-simple-toast';
import { CardBack, Head, Tips, CardText, BingSure } from './style'
import queryString from 'querystring';

class CardList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token"),
            productId: localStorage.getItem("cardProduct"),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            userName: '',
            idCard: '',
            userPhone: '',
            cardNo: '',
            bankCode: '',
            bankName: '',
            verifyCode: '',
            bindCardSeqNo: '',
            time: 60,
            isSms: false,
            timer: null,
            bind: false,
            canClick: true
        }
    }

    goBack() {
        window.history.back();
    }

    goLink() {
        this.props.history.push('/bankCard');
    }
    
    init() {
        var _this = this;
        fetch('/api/preloan/bankCard/bindCardLog/initBandCardInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                token: _this.state.token,
            },
            body: queryString.stringify({
                token: _this.state.token,
                userId: _this.state.userId,
                merchantId: _this.state.merchantId
            })
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    userName: res.data.userName,
                    idCard: res.data.idCard,
                    userPhone: res.data.userPhone
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

    checkValue(name, e) {
        this.setState({
            [name]: this.trim(e.target.value)
        })
    }

    trim(str){
        return (str ? str.replace(/\s+/g, ""):''); 
    }
    // 获取银行卡信息
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

    checkPhone(str) {
        let phone = /^1\d{10}$/;
        if(phone.test(str)){
            return true;
        } else {
            return false;
        }
    }
    // 获取验证码
    getCode() {
        let _this = this;
        if (!_this.checkPhone(_this.state.userPhone)) {
            Toast({
                type: "msg",
                msg: "银行预留手机号码格式不正确", 
                duration: 1500
            });
            return false
        }
        if (_this.state.cardNo == '') {
            Toast({
                type: "msg",
                msg: "请输入银行卡号", 
                duration: 1500
            });
            return false;
        }
        if (_this.state.canClick) {
            _this.setState({
                canClick: false
            }, () => {
                fetch('/api/preloan/bankCard/verifyCode', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        token: _this.state.token,
                    },
                    body: queryString.stringify({
                        token: _this.state.token,
                        userId: _this.state.userId,
                        merchantId: _this.state.merchantId,
                        idCardName: _this.state.userName,
                        idCard: _this.state.idCard,
                        bankCard: _this.state.cardNo,
                        bankCode: _this.state.bankCode,
                        bankName: _this.state.bankName,
                        phoneNum: _this.state.userPhone,
                        productId: _this.state.productId
                    })
                })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        canClick: true
                    });
                    if(res.respCode === '000000'){
                        this.setState({
                            bindCardSeqNo: res.data
                        });
                        _this.countDown();
                        
                    } else {
                        Toast({
                            type: "msg",
                            msg: res.respMsg, 
                            duration: 1500
                        });
                        _this.countDown();
                    }
                })
                .catch ( err => {
                    console.error(err);
                });
            })
        }      
    }
    //倒计时
    countDown() {
        const _this = this;
        clearInterval(_this.state.timer);
        this.state.timer = setInterval(function () {
            if (_this.state.time <= 0) {
                _this.setState({
                    isSms: false,
                    time: 60
                })
                clearInterval(_this.state.timer);
            } else {
                _this.setState({
                    isSms: true,
                    time: _this.state.time-1
                })
            }
        },1000)
    }
    // 确认绑卡
    makeSure() {
        let _this = this;
        if (!_this.checkPhone(_this.state.userPhone)) {
            Toast({
                type: "msg",
                msg: "银行预留手机号码格式不正确", 
                duration: 1500
            });
            return false
        }
        if (_this.state.cardNo == '') {
            Toast({
                type: "msg",
                msg: "请输入银行卡号", 
                duration: 1500
            });
            return false;
        }
        if (_this.state.verifyCode == '') {
            Toast({
                type: "msg",
                msg: "请输入验证码", 
                duration: 1500
            });
            return false;
        }
        this.setState({
            bind: false
        });
        fetch('/api/preloan/bankCard/bindConfirm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                token: _this.state.token,
            },
            body: queryString.stringify({
                token: _this.state.token,
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                sysSeqId: _this.state.bindCardSeqNo,
                verifyCode: _this.state.verifyCode
            })
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                bind: true
            });
            Toast({
                type: "msg",
                msg: res.respMsg, 
                duration: 1500
            });
            if(res.respCode === '000000'){
                setTimeout(function(){
                    window.history.back();
                },1000);
            }
        })
        .catch ( err => {
            this.setState({
                bind: true
            });
            console.error(err);
        });
    }

    componentDidMount() {
        let _this = this;
        this.init();
    }

    render() {
        return (
            <CardBack>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    绑定银行卡
                </Head>
                <Tips>注意：请绑定您的借记卡或储蓄卡，不支持绑定信用卡。</Tips>
                <CardText>
                    <div>
                        <span>持卡人</span>
                        <i>{this.state.userName}</i>
                    </div>
                    <div>
                        <span>身份证号</span>
                        <i>{this.state.idCard}</i>
                    </div>
                    <div>
                        <span>银行卡号</span>
                        <input type="number" value={this.state.cardNo} onChange={this.checkValue.bind(this, 'cardNo')} onBlur={this.getCardMsg.bind(this)} placeholder="请输入银行卡号" />
                    </div>
                    <div>
                        <span>发卡银行</span>
                        <i>{this.state.bankName}</i>
                    </div>
                    <div>
                        <span>预留电话</span>
                        <input type="number" value={this.state.userPhone} onChange={this.checkValue.bind(this, 'userPhone')} placeholder="请输入银行预留手机号" />
                    </div>
                    <div>
                        <span>验证码</span>
                        <input type="number" value={this.state.verifyCode} onChange={this.checkValue.bind(this, 'verifyCode')} placeholder="请输入验证码" />
                        {
                            this.state.isSms
                                ? <em className="orange">{this.state.time}S</em>
                                : <em onClick={this.getCode.bind(this)}>获取验证码</em>
                        }
                        
                    </div>
                </CardText>
                <BingSure>
                    <p>我已阅读并同意<span>《第三方代扣协议》</span></p>
                    {
                        this.state.bind
                            ? <button>确认绑定银行卡</button>
                            : <button className="bind-btn" onClick={this.makeSure.bind(this)}>确认绑定银行卡</button>
                    }
                    <span onClick={this.goLink.bind(this)}>支持的银行卡和限额</span>
                </BingSure>
            </CardBack>
        )
    }
}
export default CardList