import React, { Component } from 'react';
import Toast from 'react-simple-toast';
import { BankBack, Head, BankList } from './style'

class BankCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token"),
            bankList: []
        }
    }
    
    goBack() {
        window.history.back();
    }
    
    init() {
        var _this = this;
        fetch('/api/preloan/limitAmt/list', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                token: _this.state.token,
            }
        })
        .then(res => res.json())
        .then ( res => {
            if(res.respCode === '000000'){
                this.setState({
                    bankList: res.data
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

    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <BankBack>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    支持的银行卡和限额
                </Head>
                {
                    this.state.bankList.map((item, index) => {
                        return (<BankList key={index}>
                            <img src={item.bankLogo} />
                                <div className="text">
                                    <h2>{item.bankName}</h2>
                                    <span>单笔金额≤{item.perTransactionLimit}元，单日金额≤{item.perDayLimit}元</span>
                                </div>
                            </BankList>)
                    })
                }
            </BankBack>
        )
    }
}
export default BankCard