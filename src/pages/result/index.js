import React, { Component } from 'react';
import { getQueryString } from '../../statics/common';
import { 
    Container,
    HeaderNav,
    BankText
} from './styles';
import { thisExpression } from '@babel/types';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'true',
            type: 1, //1: 到账银行卡 2: 普通页面
            title: '',
            smallText: '',
            loanAmt: 0,
            actureAmt: 0,
            bankName: '',
            bankSort: '',
            headerNav: '',
            btnType: 1
        }
    }

    goHome() {
        if (this.state.btnType == '1') {
            this.props.history.push('/home');
        } else {
            this.props.history.push('/order');
        }
    }

    componentDidMount() {
        let status = getQueryString(this.props.location.search,'status'),
            type = getQueryString(this.props.location.search,'type'),
            title = decodeURIComponent(getQueryString(this.props.location.search,'title')),
            smallText = decodeURIComponent(getQueryString(this.props.location.search,'smallText')),
            loanAmt = getQueryString(this.props.location.search,'loanAmt'),
            actureAmt = getQueryString(this.props.location.search,'actureAmt'),
            bankName = decodeURIComponent(getQueryString(this.props.location.search,'bankName')),
            bankSort = getQueryString(this.props.location.search,'bankSort'),
            headerNav = decodeURIComponent(getQueryString(this.props.location.search,'headerNav')),
            btnType = decodeURIComponent(getQueryString(this.props.location.search,'btnType')||'1');
            
        this.setState({
            status,
            type,
            title,
            smallText,
            loanAmt: loanAmt || 0,
            actureAmt: actureAmt || 0,
            bankName,
            bankSort,
            headerNav,
            btnType
        })
    }

    render () {
        const BackDetail = () => {
            return (
                <BankText>
                    <div className="bank_des">
                        <div className="bank_left_txt">到账详情</div>
                        <div className="bank_right_txt">
                            <img src={require('../../assets/bar.png')} />
                            <div className="bank_inner_txt">
                                <span>发起借款申请</span>
                                <p className="bank_des_p">
                                    <span>银行处理中</span>
                                    <span>预计2小时内到账</span>
                                </p>
                                <span>到账成功</span>
                            </div>
                        </div>
                    </div>
                    <div className="bank_list">
                        <p><span>借款金额</span><span>&yen; {this.state.loanAmt}</span></p>
                        <p><span>到账金额</span><span>&yen; {this.state.actureAmt}</span></p>
                        <p><span>到账银行</span><span>{this.state.bankName} 尾号{this.state.bankSort}</span></p>
                    </div>
                </BankText>
            )
        };

        return (
            <Container>
                <HeaderNav>{this.state.headerNav}</HeaderNav>
                <div className="result_img">
                    <div className="result_circle">
                        {
                            this.state.status === 'true' 
                                ? <img src={require('../../assets/icon_cg@2x.png')} /> 
                                : <img src={require('../../assets/icon_sb@2x.png')} />
                        }
                    </div>
                    <h2 className="rest_h2">{this.state.title}</h2>
                   
                    {
                        this.state.type == 1 && this.state.status === 'true' ? ( <div>
                            <h4 className="rest_h4">
                                <p className="rest_gray">恭喜借款成功,到期按时还款</p>
                                <p>再借提额<span>最高50%</span>降息<span>最高30%</span></p>
                            </h4>
                            <BackDetail></BackDetail>
                        </div>) : <h4 className="rest_h4">{this.state.smallText}</h4>
                    }
                </div>
                {
                    this.state.btnType == '1'
                    ? <button className="back_btn" onClick={this.goHome.bind(this)}>返回首页</button>
                    : <button className="back_btn" onClick={this.goHome.bind(this)}>返回订单</button>

               }
            </Container>
        )
    }
}

export default Result;