import React, { Component, Fragment } from 'react';
import Toast from 'react-simple-toast';
import { Head, ProductMain } from './style'

class CardList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token"),
            productId: localStorage.getItem("productId"),
            product: {},
            authOption: []
        }
    }

    goBack() {
        window.history.back();
    }

    init() {
        var _this = this;
        fetch('/api/preloan/product/getProductInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: _this.state.token,
            },
            body: JSON.stringify({
                productId: _this.state.productId
            })
        })
        .then(res => res.json())
        .then ( res => {
            if (res.respCode === '000000') {
                console.log(res.data);
                this.setState({
                    product: res.data ? res.data : {},
                    authOption: JSON.parse(res.data.authOption)
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
            <div>
                <Head>
                    <span onClick={this.goBack.bind(this)}></span>
                    产品详情
                </Head>
                <ProductMain>
                    <div className="box">
                        <h2>申请条件</h2>
                        <div className="list"><span>· </span><em>年龄:{this.state.product.minAge} - {this.state.product.maxAge}</em></div>
                        <div className="list"><span>· </span><em>申请资料:{
                            this.state.authOption.map((item, index) => {
                                return (index == this.state.authOption.length - 1
                                    ? <Fragment key={index}>{item.authName}</Fragment>
                                    : <Fragment key={index}>{item.authName}、</Fragment>)
                            })
                        }</em></div>
                    </div>
                    <div className="box">
                        <h2>额度期限</h2>
                        <div className="list"><span>· </span><em>借款额度:{this.state.product.loanMinAmt} - {this.state.product.loanMaxAmt}</em></div>
                        <div className="list"><span>· </span><em>借款期限:{this.state.product.loanPeriodsNum}{this.state.product.loanPeriodsUnit === 'WEEK' ? '周' : this.state.product.loanPeriodsUnit === 'DAY' ? '天' : this.state.product.loanPeriodsUnit === 'MONTH' ? '月' : ''}</em></div>
                        <div className="list"><span>· </span><em>审批方式:{this.state.product.auditTypeDesc}</em></div>
                        <div className="list"><span>· </span><em>还款方式:{this.state.product.repaymentTypeDesc}</em></div>
                    </div>
                    <div className="box">
                        <h2>费用说明</h2>
                        <div className="list"><span>· </span><em>年利率:{((this.state.product.protInterestRate?this.state.product.protInterestRate:0) * 100).toFixed(2)}%</em></div>
                        <div className="list"><span>· </span><em>违约金:{((this.state.product.protViolateRate?this.state.product.protViolateRate:0) * 100).toFixed(2)}%</em></div>
                        <div className="list"><span>· </span><em>罚息:{((this.state.product.protPenalSumRate?this.state.product.protPenalSumRate:0) * 100).toFixed(2)}%</em></div>
                        <div className="list"><span>· </span><strong>实际到手金额=额度金额-VIP卡费，具体到手金额以实际银行到账为准。</strong></div>
                        <div className="list" style={{ color: '#9B9B9B' }}><span>·</span><em>如有疑问请咨询在线客服。</em></div>
                    </div>
                </ProductMain>
            </div>
        )
    }
}
export default CardList