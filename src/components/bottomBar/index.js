import React, { Component } from 'react';
import {
    BarContent
} from './styles';

class BottomBar extends Component{
    constructor(props) {
        super(props);
    }

    
    goHome(name){
        if (name != 'loan') {
            this.props.history.push('/home')
        }
    }
    goOrder(name) {
        console.log(this.props);
        if (name != 'repay') {
            this.props.history.push('/order')
        }
    }

    render() {
        return (
            <BarContent>
                {
                    this.props.name === 'loan' ? <div className="promt_text">本平台不向学生提供借款</div> : ''
                }
                
                <div className="bottom_content">
                    <div className={this.props.name === 'loan' ? 'active' : ''} onClick={this.goHome.bind(this,this.props.name)}>
                        {
                            this.props.name === 'loan' 
                                ? <img src={require('../../assets/jk-icon@3x.png')} />
                                : <img src={require('../../assets/jkm-icon@3x.png')} />
                        }
                        借款
                    </div>
                    <div className={this.props.name === 'repay' ? 'active' : ''} onClick={this.goOrder.bind(this,this.props.name)}>
                        {
                            this.props.name === 'repay' 
                                ? <img src={require('../../assets/hkm-icon@3x.png')} />
                                : <img src={require('../../assets/hk-icon@3x.png')} />
                        }
                        还款
                    </div>
                </div>
            </BarContent>
        )
    }
    
}

export default BottomBar;