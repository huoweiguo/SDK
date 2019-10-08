import React, { Component } from 'react';
import {
    Container,
    CommonNav
} from './styles';

class FaceRecognition extends Component {
    constructor (props) {
        super(props);
    }

    goBack () {
        this.props.history.push('/realName');
    }

    render () {
        return (
            <Container>
                <CommonNav>
                        <div className="back_btn" onClick={this.goBack.bind(this)}>
                            <img src={require('../../assets/leftarrow_5f.png')} />
                        </div>
                        <div className="nav_title">人脸识别</div>
                </CommonNav>
                <div className="real_banner"><img src={require('../../assets/auth_banner.png')} /></div>
                <div className="real_list">
                    <ul>
                        <li><img src={require('../../assets/my_face_icon1@2x.png')} /></li>
                        <li><img src={require('../../assets/my_face_icon2@2x.png')} /></li>
                        <li><img src={require('../../assets/my_face_icon3@2x.png')} /></li>
                        <li><img src={require('../../assets/my_face_icon4@2x.png')} /></li>
                    </ul>
                </div>

                <div className="authen_box">
                    <button className="authen_btn">开始认证</button>
                </div>
                
            </Container>
        )
    }
}

export default FaceRecognition;