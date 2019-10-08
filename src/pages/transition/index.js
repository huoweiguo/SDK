import React, { Component } from 'react';
import Toast from 'react-simple-toast';

class Transition extends Component {
    constructor (props) {
        super(props);
    }

    show(text) {
        Toast({
            type: 'msg',
            msg: text,
            duration: 1500
        })
    }

    getUrlString(search, name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r =  search.substr(1).match(reg); 
        if (r != null) return r[2]; 
        return null;
    }


    getParams (name) {
        return decodeURIComponent(this.getUrlString(this.props.location.search, name));
    }

     //获取用户基础信息
     getUserInfo  () {
        let sign = this.getParams('sign'),
            bizData = this.getParams('bizData'),
            appId = this.getParams('appId'),
            type= this.getParams('type'),
            _this = this,
            t = new Date().getTime();
        fetch(`/api/stream-in/sdk/sdkLogin?t=${t}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sign, bizData, appId, type
            })
        })
        .then( res => res.json())
        .then( res => {
            if (res.respCode === '000000') {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('merchantId', res.data.merchantId);
                localStorage.setItem('mobile', res.data.phoneNum);
                localStorage.setItem('regChannelId', res.data.regChannelId);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('userName', res.data.userName);
                localStorage.setItem('idCard', res.data.userIdCard);
                setTimeout(() => {
                    if (res.orderType == 1) {
                        this.props.history.push('/home')
                    } else if(res.orderType == 2) {
                        this.props.history.push('/order');
                    }
                }, 1500);
            } else {
                this.show('获取用户信息失败');
            }            
        })
        .catch( err => {
            console.error(err)
        })
    }

    componentDidMount() {
        this.getUserInfo();
    }

    render () {
        return (
            <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                <img src={require('../../assets/sdk_transition.png')} width="100%" height="100%"/>
            </div>
        )
    }
}

export default Transition;