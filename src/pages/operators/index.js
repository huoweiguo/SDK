import React, { Component } from 'react';
import Toast from 'react-simple-toast';
import queryString from 'querystring';
import { getApiKey, getQueryString } from '../../statics/common';
import { 
    BaseContent,
    ComponentUl,
    Promt
} from './styles';

class Operators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: localStorage.getItem('userName'),
            mobile: localStorage.getItem('mobile'),
            idCard: localStorage.getItem('idCard'),
            merchantId: localStorage.getItem('merchantId'),
            userId: localStorage.getItem('userId')
        }
    }

    goback () {
        this.props.history.push('/threeActions');
    }

    show (txt) {
        Toast({
            type: 'msg',
            msg: txt,
            duration: 1500
        });
    }

    goServece () {
        this.props.history.push('/agreement');
    }

    agreeAuth () {
        var phoneExp = /^1[3-9]{10}/;
        if (!phoneExp.test(this.state.mobile)) {
            this.show('手机号格式不正确');
            return false;
        }

        localStorage.setItem('mobile', this.state.mobile);
        var backUrl = encodeURIComponent(window.location.href),
            loginParams = JSON.stringify({
                phone: this.state.mobile,
                name: this.state.userName,
                idcard: this.state.idCard
            });
            
        window.location.href = `https://api.51datakey.com/h5/importV3/index.html#/carrier?apiKey=${getApiKey()}&userId=${this.state.merchantId},${this.state.userId}&backUrl=${backUrl}&loginParams=${loginParams}`
    }

    getParams(name) {
        return decodeURIComponent(getQueryString(this.props.location.search, name));
    }

    getCarrier () {
        let t = new Date().getTime(),
            _this = this;
        fetch('/api/preloan/userAuth/add/carrier', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                token: localStorage.getItem('token')
            },
            body: queryString.stringify({
                token: localStorage.getItem('token'),
                userId: localStorage.getItem('userId'),
                merchantId: localStorage.getItem('merchantId'),
                taskId: _this.getParams('taskId')
            })
        })
        .then( res => res.json())
        .then( res => {
            if (res.respCode === '000000') {
                _this.show("数据采集成功");
                setTimeout(function(){
                    _this.props.history.push('/threeActions');
                }, 1500);
            } else {
                _this.show(res.respMsg);
            }
        })
        .catch( err => {
            console.error(err);
        });
    }

    componentDidMount() {
        var mxcode = this.getParams('mxcode');
        switch(mxcode) {
            case '-1':
                this.show('您退出了运营商认证');
                break;
            case '0':
                this.show('认证失败');
            case '-2':
                this.show('第三方数据异常');
            case '-3':
                this.show('数据服务异常');
            case '-4':
                this.show('用户输入出错');
            case '1':
                this.show('任务进行成功');
            case '2':
                this.show('任务进行中');
            default :
                if (mxcode !== 'false') {
                    this.getCarrier();
                }
        }
    }

    render () {
        return (
            <BaseContent>
                <div className="base_nav">                       
                    <span className="backText" onClick={this.goback.bind(this)}>
                        <img className="back" src={require('../../assets/leftarrow_5f.png')}/>
                    </span>                        
                    <span className="base_txt">运营商认证</span>                       
                    {/*<span className="base_question">遇到问题?</span>*/}
                </div>
                 <img src={require('../../assets/auth_banner.png')} className="base_banner"/>

                 <ComponentUl>
                     <div><input type="text" value={this.state.userName} disabled placeholder="请输入姓名"/></div>
                     <div><input type="text" value={this.state.idCard} disabled placeholder="请输入身份证号"/></div>
                     <div><input type="text" value={this.state.mobile} disabled  placeholder="请输入手机号"/></div>
                 </ComponentUl>

                 <Promt>
                     <div className="agree">*点击"同意授权"即表示同意<span onClick={this.goServece.bind(this)}>《用户使用协议》</span></div>
                     <p>温馨提示：</p>
                     <p>1、认证手机号需本人运营商实名认证手机号码；</p>
                     <p>2、认证号码必须与注册号码一致；</p>
                     <p>3、若遗忘服务密码，可以致电运营商服务电话设置；</p>
                     <p className="mb44">4、若身份信息有误可点击进行修改；</p>
                     <button onClick={this.agreeAuth.bind(this)} className="agree_btn">同意授权</button>
                     <div className="smallText">我们坚决保护您的信息安全</div>
                 </Promt>
            </BaseContent>
        )
    }
}

export default Operators;