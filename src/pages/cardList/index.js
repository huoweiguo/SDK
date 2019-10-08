import React, { Component } from 'react';
import Toast from 'react-simple-toast';
import { Head, NoCard, AddCard, Tips, BankList, SureBtn, Major } from './style'
import queryString from 'querystring';

class CardList extends Component{
    constructor(props) {
        super(props);
        this.getQueryString = this.getQueryString.bind(this);
        this.state = {
            token: localStorage.getItem("token"),
            productId: '',
            userId: localStorage.getItem('userId'),
            userName: localStorage.getItem('userName'),
            merchantId: localStorage.getItem('merchantId'),
            productName: localStorage.getItem('productName'),
            type: '',
            list: [],
            isMajor: false,
            userBankId: ''
        }
    }
    
    getQueryString(name) {
        let hashStr = window.location.hash;
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        if (hashStr.split('?')[1]) {
            let parameter = hashStr.split('?')[1].match(reg);
            if (parameter != null) return decodeURI(parameter[2]);
            return null;
        } else {
            return null
        }
    }

    goBack() {
        window.history.back();
    }
    
    goBind() {
        this.props.history.push('/bindCard');
    }

    goLoanResult() {
        const _this = this;
        fetch('/api/preloan/risk/getRiskResult', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                token: _this.state.token,
            },
            body: queryString.stringify({
                token: _this.state.token,
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                productId: _this.state.productId,
                productName: _this.state.productName,
                userName: _this.state.userName,
                channelId: '01'
            })
        })
        .then(res => res.json())
        .then(res => {
            const headerNav = encodeURIComponent("审核结果");
            if (res.respCode == '6666666') {
                localStorage.setItem("loanApplySeqId",res.data.sysSeqId)
                this.props.history.push('/loanDetail');
            } else {
                const title = encodeURIComponent("审核拒绝");
                const smallText = encodeURIComponent(res.respMsg);
                const search = `status=false&title=${title}&smallText=${smallText}&headerNav=${headerNav}&btnType=1`;
                this.props.history.push('/result?' + search);
            }
        })
        .catch ( err => {
            console.error(err);
        });
    }

    init() {
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
                    list: res.data ? res.data : []
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

    changeDefault(item) {
        if (item.isDefault == 'Y') {
            Toast({
                type: "msg",
                msg: "默认银行卡不可操作", 
                duration: 1500
            });
        } else {
            this.setState({
                isMajor: true,
                userBankId: item.userBankId
            })
        }
    }

    cancel() {
        this.setState({
            isMajor: false,
            userBankId: ''
        })
    }

    sureMajor() {
        let _this = this;
        fetch('/api/preloan/bankCard/default/change', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                token: _this.state.token,
            },
            body: queryString.stringify({
                token: _this.state.token,
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                userBankId: _this.state.userBankId
            })
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    isMajor: false,
                    userBankId: ''
                });
                this.init();
                Toast({
                    type: "msg",
                    msg: '已设置为默认卡', 
                    duration: 1500
                });
            } else {
                this.setState({
                    isMajor: false,
                    userBankId: ''
                });
                Toast({
                    type: "msg",
                    msg: '设置默认卡失败', 
                    duration: 1500
                });
            }
        })
        .catch ( err => {
            console.error(err);
        });
    }

    componentDidMount() {
        let _this = this;
        this.setState({
            type: _this.getQueryString('type') ? _this.getQueryString('type') : ''
        }, () => {
                if (this.state.type == 'order') {
                    this.setState({
                        productId: localStorage.getItem("orderProduct")
                    }, () => {
                        localStorage.setItem("cardProduct", this.state.productId);
                        this.init();
                    })
                } else {
                    this.setState({
                        productId: localStorage.getItem("productId")
                    }, () => {
                        localStorage.setItem("cardProduct", this.state.productId);
                        this.init();
                    })
                }
        })
    }

    render() {
        return (
            <div>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    银行卡
                </Head>
                {
                    this.state.list.length == 0
                        ? (<NoCard>
                            <img src={require('../../assets/icon_zwyhk@3x.png')} />
                            <p>还没有银行卡</p>
                        </NoCard>)
                        : (<div><Tips>
                                <img src={require('../../assets/icon_taps2_blue@3x.png')} />
                                默认卡是你借款成功后的到账银行卡！
                            </Tips>
                            <BankList>
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <li key={index} onClick={this.changeDefault.bind(this,item)}>
                                            <img src={item.bankLog}/>
                                            <div className="cardContent">
                                                <h2>
                                                    <strong>{item.bankName}</strong>
                                                    {item.isDefault == 'Y' ? <span>默认卡</span> : ''}
                                                </h2>
                                                <h3>储蓄卡</h3>
                                                <h4><span>****</span><span>****</span><span>****</span><em>{item.bankCard.substring(item.bankCard.length-4)}</em></h4>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </BankList></div>)
                }
                
                <AddCard onClick={this.goBind.bind(this)}>
                    <img src={require('../../assets/more_add@3x.png')}/>
                    <span>添加银行卡</span>
                    <img className="go" src={require('../../assets/right-arrow.png')}/>
                </AddCard>
                {
                    this.state.type == 'loan' && this.state.list.length > 0
                        ? (<SureBtn onClick={this.goLoanResult.bind(this)}>
                            <span>确认</span>
                        </SureBtn>)
                        : ''
                }
                {
                    this.state.isMajor
                        ? (<Major>
                            <div className="mask"></div>
                            <div className="popup">
                                <div>
                                    <h2>确定设置为默认卡？</h2>
                                    <p>默认卡是您借款成功后的到账银行卡</p>
                                    <div class="btn">
                                        <button className="cancelBtn" onClick={this.cancel.bind(this)}>取消</button>
                                        <button className="sureBtn" onClick={this.sureMajor.bind(this)}>确定</button>
                                    </div>
                                </div>
                            </div>
                                
                        </Major>)
                        : ''
                }
            </div>
        )
    }
}
export default CardList