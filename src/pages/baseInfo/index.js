import React, { Component } from 'react';
import Picker from '../../statics/picker';
import Toast from 'react-simple-toast';
import { device } from '../../statics/common';
import cityData from '../../statics/city';
import '../../statics/picker.css';
import { BaseContent } from './styles';
class BaseInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            personAList: [
                { Code: 1,Name: '父母'},
                { Code: 2,Name: '配偶'},
                { Code: 3,Name: '子女'}
            ],
            personBList: [
                { Code: 4,Name: '兄弟'},
                { Code: 5,Name: '姐妹'},
                { Code: 6,Name: '同事'},
                { Code: 7,Name: '朋友'}
            ],
            personA: '',
            nameA: '',
            mobileA: '',
            personB: '',
            nameB: '',
            mobileB: '',
            isClick: false,
            address: '',
            wechat: '',
            city: '',
            device: device().version,
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            merchantId: localStorage.getItem('merchantId')
        }
    }

    show (text) {
        Toast({
            type: 'msg',
            msg: text,
            duration: 1500
        });
    }

    //选择联系人关系
    selectBox1 () {
        var _this = this;
        new Picker({
            "title": '请选择',
            "defaultValue": _this.state.personA,
            "data": _this.state.personAList,
            "keys": {
                "id": "Code",
                "value": "Name",
            },
            "callBack": function (val) {
                //回调函数（val为选择的值）
                _this.setState({
                    personA: val
                });
                _this.chkIsFull();
            }
        });
    }

    //选择联系人关系
    selectBox2 () {
        var _this = this;
        new Picker({
            "title": '请选择',
            "defaultValue": _this.state.personB,
            "data": _this.state.personBList,
            "keys": {
                "id": "Code",
                "value": "Name",
            },
            "callBack": function (val) {
                //回调函数（val为选择的值）
                _this.setState({
                    personB: val
                });
                _this.chkIsFull();
            }
        });
    }

    //设置表单数据
    changeText (name, e) {
        this.setState({
            [name]: e.target.value 
        });
        this.chkIsFull();
    }

    //校验表单是否为空
    chkIsFull () {
        clearTimeout(this.timer);
        this.timer = setTimeout( () => {
            let { wechat, address, city, mobileA,mobileB, nameA, nameB,  personA, personB} = this.state,
            status = Boolean;
            if (wechat && address && city && mobileA && mobileB && nameA && nameB && personA && personB) {
                status = true;
            } else {
                status = false;
            }
            this.setState({
                isClick: status
            });
        }, 30);
    }

    //确认保存
    authenBtn () {
        let { mobileA, mobileB, city, address, nameA, nameB, personA, personB, wechat} = this.state,
            mobileExp = /^1[0-9]{10}$/,
            selfMobile = localStorage.getItem('mobile');
        if (city =='' || nameA == '' || nameB == '' || address =='' || personA == '' || personB == '' || wechat == '') {
            this.show('请将信息填写完整');
            return false;
        }
        if (!mobileExp.test(mobileA) || !mobileExp.test(mobileB)) {
            this.show('手机号码格式不正确');
            return false;
        }

        if (nameA === mobileB) {
            this.show('紧急联系人姓名不能唯一');
            return false;
        }

        if (selfMobile === mobileA || selfMobile === mobileB) {
            this.show('紧急联系人手机号不能填写自己');
            return false;
        }

        this.baseInfoSub();
    }

    //提交数据
    baseInfoSub () {
        let _this = this,
            t = new Date().getTime(),
            {token, userId, merchantId, wechat, device, address, city, personA, personB, nameA, nameB, mobileA, mobileB } = this.state;
        fetch(`/api/preloan/userAuth/add/base?t=${t}`, {
            method: 'POST',
            headers: {
                "Content-Type":  'application/json',
                token: token
            },
            body: JSON.stringify({
                token,
                merchantId,
                userId,
                device,
                wxId: wechat,
                liveAddr: city + address,
                contact1Ship: personA,
                contact1Name: nameA,
                contact1Mobile: mobileA,
                contact2Ship: personB,
                contact2Name: nameB,
                contact2Mobile: mobileB
            })
        })
        .then (res => res.json())
        .then (res => {
            if (res.respCode === '000000') {
                this.show('保存成功');
                setTimeout(function(){
                    _this.props.history.push('/threeActions');
                }, 1500);
            } else {
                this.show(res.respMsg);
            }
        })
        .catch (err => {
            console.error(err);
        });
    }

    goback () {
        this.props.history.push('/threeActions');
    }
    
    //城市选择
    chooseRegion () {
        var _this = this;
        new Picker({
            "title": '请选择',
            "defaultValue": _this.state.city,
            "type": 3,
            "data": cityData,
            "keys": {
                "id": "Code",
                "value": "Name",
                "childData": "level"
            },
            "callBack": function (val) {
                _this.setState({
                    city: val
                })
            }
        })
    }

    render () {
        return (
            <BaseContent>
                 <div className="base_nav">                       
                    <span className="backText" onClick={this.goback.bind(this)}>
                        <img className="back" src={require('../../assets/leftarrow_5f.png')}/>
                    </span>                        
                    <span className="base_txt">基础信息</span>                       
                    {/*<span className="base_question">遇到问题?</span>*/}
                </div>
                 <img src={require('../../assets/auth_banner.png')} className="base_banner"/>

                 <div className="nav_list">
                     <span className="small_txt">基本信息</span>
                     <span className="small_des">确保信息真实、完整、有效</span>
                </div> 


                <div className="content_list">
                    <div className="view_box">
                         <span className="list_label">微信</span>
                         <input className="wechat_input" type="text" onChange={this.changeText.bind(this, 'wechat')} value={this.state.wechat} placeholder="输入微信号"/>
                    </div>
                    <div className="view_box">
                        <span className="list_label">现居地址</span>
                        <div className="list_con">
                            <span className="change_txt" onClick={this.chooseRegion.bind(this)}>
                                {this.state.city ? this.state.city : '请选择居住地址'}
                            </span>
                            <img className="list_img" src={require('../../assets/right-arrow.png')}/>
                        </div>
                    </div>                        
                    <div className="view_box">                            
                        <span></span>                            
                        <input className="addres_input" type="span" value={this.state.address} onChange={this.changeText.bind(this, 'address')} placeholder="请输入详细的地址信息"/>                        
                    </div>                    
                </div> 


                <div className="nav_list">                        
                    <span className="small_txt">紧急联系人1</span>                        
                    <span className="small_des">确保信息真实、完整、有效、可能电话回访</span>                    
                </div>                    
                <div className="content_list">                        
                    <div className="view_box">                            
                        <span className="list_label">TA是我的</span>                            
                        <div className="list_con" onClick={this.selectBox1.bind(this)}>                                
                            <span className="change_txt">{this.state.personA ? this.state.personA : '请选择'}</span>                                
                            <img className="list_img" src={require('../../assets/right-arrow.png')}/>                            
                        </div>                        
                    </div>                        
                    <div className="view_box">
                        <span className="list_label">联系人姓名</span>                            
                        <div className="list_con">                  
                            <input type="text" value={this.state.nameA} onChange={this.changeText.bind(this, 'nameA')} placeholder="请输入联系人姓名"/>                        
                        </div>                        
                    </div>
                    <div className="view_box">                            
                        <span className="list_label">联系人电话</span>                            
                        <div className="list_con">
                            <input type="text" value={this.state.mobileA} onChange={this.changeText.bind(this, 'mobileA')} placeholder="请输入联系人电话"/>                       
                        </div>                        
                    </div>                    
                </div> 


                <div className="nav_list">                       
                    <span className="small_txt">紧急联系人2</span>                        
                    <span className="small_des">确保信息真实、完整、有效、可能电话回访</span>                    
                </div>                    
                <div className="content_list">                       
                    <div className="view_box">                           
                        <span className="list_label">TA是我的</span>                            
                        <div className="list_con" onClick={this.selectBox2.bind(this)}>                               
                            <span className="change_txt">{this.state.personB ? this.state.personB : '请选择'}</span>                                
                            <img className="list_img" src={require('../../assets/right-arrow.png')}/>                            
                        </div>                        
                    </div>                        
                    <div className="view_box">                           
                        <span className="list_label">联系人姓名</span>                            
                        <div className="list_con">                 
                            <input type="text" value={this.state.nameB}  onChange={this.changeText.bind(this, 'nameB')} placeholder="请输入联系人姓名"/>         
                        </div>                        
                    </div>                        
                    <div className="view_box">                           
                        <span className="list_label">联系人电话</span>                            
                        <div className="list_con">                               
                            <input type="text" value={this.state.mobileB} onChange={this.changeText.bind(this, 'mobileB')} placeholder="请输入联系人电话"/>                            
                        </div>                        
                    </div>                   
                </div>  

                <div className="blank_block"></div>

                <div className="base_bottom">                       
                    <span className="sm_txt">(为了提高成功率,请确保填写信息真实、完整、有效)</span>                        
                    <div className="view_btn">          
                        {
                            this.state.isClick 
                                ? <span className="btn_icon btn_active" onClick={this.authenBtn.bind(this)}>确认保存</span>
                                : <span className="btn_icon btn_1">确认保存</span>
                        }                
                    </div>                    
                </div> 

           </BaseContent>
        )
    }
}

export default BaseInfo;