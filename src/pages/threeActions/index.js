import React, { Component } from 'react';
import Toast from 'react-simple-toast';
import { Link } from 'react-router-dom';
import Picker from '../../statics/picker';
import '../../statics/picker.css';
import {
    Container,
    HeaderNav,
    LoanDes,
    AuthenList,
    BottomInfo
}  from './styles';

class ThreeActions extends Component {
    constructor (props) {
        super(props);
        this.state = {
            productName: '',
            date: '',
            amount: 0,
            loanPeriods: [],
            loanAmtOptions: [],
            userProductAuthList: [],
            token: localStorage.getItem('token'),
            merchantId: localStorage.getItem('merchantId'),
            userId: localStorage.getItem('userId'),
            productId: localStorage.getItem('productId'),
            userProductAuthFinish: '',
            A015S: '',  //实体认证
            A002S: '' //运营商认证
        }
    }

    show (text) {
        Toast({
            type: 'msg',
            msg: text,
            duration: 1500
        });
    }

    goAuthen (name, status) {
        if (status === 'Y' || status === 'P') {
            this.show('该项已经认证或认证中');
            return false;
        }
        switch (name) {
            case 'operators':
                if (this.state.A015S !== 'Y') {
                    this.show('请先完成实名认证');
                    return false;
                }
                this.props.history.push('/operators');
                break;
            case 'realName':
                this.props.history.push('/realName');
                break;
            case 'baseInfo':
                if (this.state.A015S !== 'Y') {
                    this.show('请先完成实名认证');
                    return false;
                } else if(this.state.A015S !== 'Y') {
                    this.show('请先完成手机认证');
                    return false;
                }
                this.props.history.push('/baseInfo');
                break;
        }
    }

    //数据处理
    dealData (data) {
        let loanAmt = [],
            loanPeriods = [];
        data.loanAmtOptions.map( (item,index) => {
            loanAmt.push({
                Code: index,
                Name: item
            })
        });

        data.loanPeriods.map( (item, index) => {
            loanPeriods.push({
                Code: index,
                Name: item
            })
        });

        this.setState({
            productName: data.productName,
            date: this.state.date || data.loanPeriods[0],
            loanPeriods:  loanPeriods,
            amount: this.state.amount || data.loanMinAmt,
            loanAmtOptions: loanAmt,
            userProductAuthList: data.userProductAuthList,
            userProductAuthFinish: data.userProductAuthFinish
        });

        data.userProductAuthList.map( item => {
            if (item.authId === 'A015') {
                this.setState({
                    A015S: item.authStatus
                });
            }

            if (item.authId === 'A002') {
                this.setState({
                    A002S: item.authStatus
                });
            }
        })

        if (data.userProductAuthFinish) {
            clearInterval(this.timer)
        }
    }

    //选择金额
    selectAmt () {
        let _this = this;
        new Picker({
            title: '选择金额',
            data: _this.state.loanAmtOptions,
            keys: {
                id: 'Code',
                value: 'Name'
            },
            callBack (value) {
                _this.setState({
                    amount: value
                })
            }
        })
    }

    //选择日期
    selectDate () {
        let _this = this;
        new Picker({
            title: '选择期限',
            data: _this.state.loanPeriods,
            keys: {
                id: 'Code',
                value: 'Name'
            },
            callBack (value) {
                _this.setState({
                    date: value
                })
            }
        })
        
    }

    renderActions () {
        let _this = this,
            t = new Date().getTime(),
            { token, productId, userId, merchantId } = this.state;
        fetch(`/api/preloan/product/productForUser?t=${t}`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                token: token
            },
            body: JSON.stringify({
                token, productId, userId, merchantId
            })
        })
        .then( res => res.json())
        .then( res => {
            if (res.respCode === '000000') {
                _this.dealData(res.data);
            } else {
                this.show(res.respMsg);
            }
        })
        .catch( err => {
            console.error(err);
        })
    }

    goBack () {
        this.props.history.push('/home');  
    }

    goLoan() {
        this.props.history.push('/cardList?type=loan');
    }

    componentDidMount() {
        this.renderActions();
        this.timer = setInterval(() => {
            this.renderActions();
        }, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render () {
        return  (
            <Container>
                {/**导航 */}
                <HeaderNav>
                    <div className="nav_back" onClick={this.goBack.bind(this)}><img src={require('../../assets/back.png')} /></div>
                    <div className="nav_title">{this.state.productName}</div>
                </HeaderNav>

                {/**借款详情 */}
                <LoanDes>
                    <div className="loan_types">
                        <div className="loan_types_box">
                            <span>借款金额</span>
                            <div className="amount_date" onClick={this.selectAmt.bind(this)}>{this.state.amount}元 <em></em></div>
                        </div>
                        <div className="loan_types_box">
                            <span>借款期限</span>
                            <div className="amount_date" onClick={this.selectDate.bind(this)}>{this.state.date}  <em></em></div>
                        </div>
                    </div>

                    <div className="nav_intro">
                        <span className="p_intro">产品介绍</span>
                        <span className="p_des" onClick={()=>{this.props.history.push('/productDetail')}}>产品详情 <img src={require('../../assets/arrow.png')} /></span>
                    </div>
                </LoanDes>

                {/**认证列表 */}
                <AuthenList>
                    <div className="auth_title">认证材料</div>
                    <ul className="auth_ul">
                        {
                            this.state.userProductAuthList.map ( item => {
                                let name = item.authId === 'A015' ? 'realName' :  
                                    item.authId === 'A002' ? 'operators' : 
                                    item.authId === 'A003' ? 'baseInfo' : 
                                    item.authId === 'A004' ? 'zmAuthen': '';

                                return (
                                    <li key={item.authId} 
                                    onClick={this.goAuthen.bind(this, name, item.authStatus)}>
                                        <div className="auth_li_left">
                                            <img className="auth_icon" src={
                                                item.authId === 'A015' ? require('../../assets/icon_ID.png') : 
                                                item.authId === 'A002' ? require('../../assets/icon_iphone.png') : 
                                                item.authId === 'A003' ? require('../../assets/icon_essential_information.png') : require('../../assets/icon_ID.png')
                                            } />
                                            <span>
                                                {
                                                    item.authId === 'A015' ? '实名认证' : 
                                                    item.authId === 'A002' ? '手机认证' :
                                                    item.authId === 'A003' ? '基础信息' :
                                                    item.authId === 'A004' ? '芝麻信用' : ''
                                                }
                                            </span>
                                        </div>

                                        <div className="auth_li_right">
                                            <img className="auth_li_img" src={
                                                item.authStatus === 'Y' ? require('../../assets/taps_certified.png') :
                                                item.authStatus === 'I' ? require('../../assets/taps_uncertified_gray.png') :
                                                item.authStatus === 'F' ? require('../../assets/taps_auth_invalid.png') :
                                                item.authStatus === 'P' ? require('../../assets/taps_authing.png') : require('../../assets/taps_certified_faild.png')
                                            } />
                                            <img className="auth_li_arrow" src={require('../../assets/arrow.png')} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </AuthenList>

                <div className="blank_block"></div>
            
                {/**底部信息 */}
                <BottomInfo>
                    <div className="promt">为保证成功借款,请保证以上认证的真实性哟~</div>
                    {
                        this.state.userProductAuthFinish
                            ? (<button className="can_apply" onClick={this.goLoan.bind(this)}>立即申请</button>)
                            : (<button className="btn_apply">立即申请</button>)
                    }
                        
                </BottomInfo>
            </Container>
        )
    }
}

export default ThreeActions;