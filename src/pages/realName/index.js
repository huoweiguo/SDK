import React, { Component } from 'react';
import Toast from 'react-simple-toast';
import queryString from 'querystring';
import { getQueryString } from '../../statics/common';
import {
    Container,
    CommonNav,
    Identity,
    SubmitBtn
} from './styles';
const positive = require('../../assets/ID1@2x.png');
const verso = require('../../assets/ID2@2x.png');

class RealName extends Component {
    constructor (props) {
        super(props);
        this.state = {
            positive: positive,
            verso: verso,
            authToken: '',
            trace_id: '',
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId'),
            appkey: 'nJXjqfdDpj6icM3zncgVVtRzkFzmi1ukqWN6J8xWpH',
            realAuthReason: '',
            faceScore: '',
            brith: '',
            issuedBy: '',
            realAuthSim: '',
            realAuth: '',
            gender: '',
            zqznTraceId: '',
            race: '',
            livenessImage: '',
            name:  '',
            backImg: '',
            idNo: '',
            address: '',
            validDate: '',
            fontImg: '',
            faceImg: ''
        }
    }

    goBack () {
        this.props.history.push('/threeActions');  
    }
    
    goLinkAuthen () {
        var _this = this;
        this.getAuthToken(function(token, trace_id) {
            let resultUrl = encodeURIComponent('http://huopan-test.baijiajiekuan.com/SDK/#/realName'),
                appkeyVal = encodeURIComponent(`${_this.state.appkey}`),
                tokenVal = encodeURIComponent(`${token}`),
                traceIdVal = encodeURIComponent(`${trace_id}`);
                localStorage.setItem('traceId', `${trace_id}`);
            window.location.href = `https://faceuweb.yskplus.com/idcardOCR.html?appkey=${appkeyVal}&token=${tokenVal}&trace_id=${traceIdVal}&trade_code=h5_face_id_verify&resultUrl=${resultUrl}`;
        });
    }

    getAuthToken (fn) {
        let t = new Date().getTime(),
            { userId, merchantId } = this.state,
            _this = this;
        fetch(`/api/preloan/certification/zhiquAuth/token?t=${t}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token')
            },
            body: JSON.stringify({
                userId,
                merchantId
            })
        })
        .then( res => res.json())
        .then( res => {
            if (res.respCode === '000000') {
                _this.setState({
                    authToken: res.data.token,
                    trace_id: res.data.traceId
                }, () => {
                    fn && fn(res.data.token, res.data.traceId);
                });
            }
        })
        .catch( err => {
            console.error(err)
        })
    }

    getParams(name) {
        return decodeURIComponent(getQueryString(this.props.location.search, name));
    }

    show(txt) {
        Toast({
            type: 'msg',
            msg: txt,
            duration: 1500
        });
    }

    submitBaseInfo () {
        if (this.state.realAuth == 1) {
            this.h5AuthResult();
        } else {
            this.show('实体认证不通过');
        }
    }

    h5AuthResult () {
        let t = new Date().getTime(),
                _this = this,
            { faceScore, birth, issuedBy, realAuthSim, realAuth, realAuthReason, gender, zqznTraceId, merchantId, race, livenessImage, userId, name, backImg, idNo, address, validDate, fontImg, faceImg} = this.state;
        fetch(`/api/preloan/certification/zhiquAuth/h5AuthResult?t=${t}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token')
            },
            body: JSON.stringify({
                traceId: localStorage.getItem('traceId'),
                faceScore, birth, issuedBy, realAuth, realAuthReason, realAuthSim,
                gender, zqznTraceId, merchantId, race, livenessImage, userId, name, backImg,
                idNo, address, validDate, fontImg, faceImg
            })
        })
        .then (res => res.json())
        .then (res => {
            console.log(res);
            if(res.respCode === '000000'){
                _this.show('提交成功');
                setTimeout(function(){
                    _this.props.history.push('/threeActions');
                }, 1500);
            } else {
                _this.show(res.respMsg);
            }
        })
        .catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        let realAuthReason = this.getParams('real_auth_reason');
        if (realAuthReason) {
            let success = this.getParams('success'),
                real_auth = this.getParams('real_auth');
            if (success && real_auth == 1) {
                localStorage.setItem('idCrad', this.getParams('id_no'));
                localStorage.setItem('userName', this.getParams('name'));
                this.setState({
                    positive: this.getParams('fontImg'),
                    verso: this.getParams('backImg'),
                    faceScore: this.getParams('face_score'),
                    birth: this.getParams('birth'),
                    issuedBy: this.getParams('issued'),
                    realAuthSim: this.getParams('real_auth_sim'),
                    realAuth: this.getParams('real_auth'),
                    realAuthReason: realAuthReason,
                    gender: this.getParams('gender'),
                    zqznTraceId: this.getParams('zqzn_trace_id'),
                    race: this.getParams('race'),
                    livenessImage: this.getParams('liveness_image'),
                    name: this.getParams('name'),
                    backImg: this.getParams('backImg'),
                    idNo: this.getParams('id_no'),
                    address: this.getParams('address'),
                    validDate: this.getParams('valid_date'),
                    fontImg: this.getParams('fontImg'),
                    faceImg: this.getParams('faceImg')
                });
            }
        }
    }

    render () {
        return  (
            <Container>
                <CommonNav>
                    <div className="back_btn" onClick={this.goBack.bind(this)}>
                        <img src={require('../../assets/leftarrow_5f.png')} />
                    </div>
                    <div className="nav_title">实名认证</div>
                </CommonNav>

                <Identity>
                    <div className="left_id_box" onClick={this.goLinkAuthen.bind(this)}>
                        <img src={this.state.positive} />
                        点击识别身份证 <span>姓名面</span>
                    </div>
                    <div className="left_id_box fright"  onClick={this.goLinkAuthen.bind(this)}>
                        <img src={this.state.verso} />
                        点击识别身份证 <span>国徽面</span>
                    </div>
                </Identity>

                <div className="outer_img">
                    <img src={require('../../assets/smrz_zysx@2x.png')} />
                </div>

                <SubmitBtn>
                    <button onClick={this.submitBaseInfo.bind(this)} className="submit_btn_1">确认提交</button>
                </SubmitBtn>
            </Container>
        )
    }
}

export default RealName;