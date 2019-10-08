import React, { Component } from 'react';
import BottomBar from '../../components/bottomBar';
import queryString from 'querystring';
import Toast from 'react-simple-toast';
import {
    Container,
    Banner
} from './styles';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    show(text) {
        Toast({
            type: 'msg',
            msg: text,
            duration: 1500
        })
    }

    getProductData () {
          let t = new Date().getTime(),
            _this = this;
        fetch (`/api/preloan/product/queryProductListShowApp?t=${t}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                token: localStorage.getItem('token')
            },
            body: queryString.stringify({
                merchantId: localStorage.getItem('merchantId'),
                userId: localStorage.getItem('userId'),
                platform: 0
            })
        })
        .then ( res => res.json() )
        .then ( res => {
            if (res.respCode === '000000') {
                _this.setState({
                    productList: res.data
                })
            } else {
                this.show(res.respMsg)
            }
        })
        .catch ( err => {
            console.error(err);
        })
    }

    goLink (obj) {
        if (obj.hasPassAndNotAcceptFlag && !obj.loanDayLimitAmtFlag) {
            localStorage.setItem('productId', obj.productId);
            localStorage.setItem('loanApplySeqId', obj.sysSeqId);
            this.props.history.push('/loanDetail');
        } else if (obj.loanDayLimitAmtFlag == true) {
            this.show('该产品额度已用完，请选择其他产品')
        } else {
            localStorage.setItem('productId', obj.productId);
            localStorage.setItem('productName', obj.productName);
            this.props.history.push('/threeActions');
        }
    }


    componentDidMount() {
        this.getProductData();
    }

    render () {
        return (
            <Container>
                <div className="content_outer">
                    <Banner><img src={require('../../assets/home_banner.png')} /></Banner>

                    <div className="home_nav">产品列表</div>

                    <ul>
                        {
                            this.state.productList.map( item => {
                                return (
                                    <li key={item.productId} onClick={this.goLink.bind(this, item)}>
                                        {
                                            item.hasPassAndNotAcceptFlag 
                                                ? <img src={item.imageUrlActive} />
                                                : <img src={item.imageUrl} />
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="blank_block"></div>

                <BottomBar name="loan" history={this.props.history}/>
            </Container>
        )
    }
}

export default Home;