import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import RealName from './pages/realName';
import ThreeActions from './pages/threeActions';
import BaseInfo from './pages/baseInfo';
import Home from './pages/home'; 
import Operators from './pages/operators';
import Agreement from './pages/agreement';
import Order from './pages/order';
import OrderPlan from './pages/orderPlan/';
import OrderDetail from './pages/orderDetail/';
import Repay from './pages/repay';
import FaceRecognition from './pages/faceRecognition';
import OrderPlanRepayment from './pages/orderPlanRepayment';
import OrderRepaymentDetail from './pages/orderRepaymentDetail';
import BankCard from './pages/bankCard';
import CardList from './pages/cardList';
import Result from './pages/result';
import BindCard from './pages/bindCard';
import ProductDetail from './pages/productDetail';
import LoanDetail from './pages/loanDetail';
import Transition from './pages/transition';

class App extends Component {
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/realName" component={RealName}/>
                    <Route exact path="/threeActions" component={ThreeActions}/>
                    <Route exact path="/baseInfo" component={BaseInfo}/>
                    <Route exact path="/operators" component={Operators}/>
                    <Route exact path="/agreement" component={Agreement}/>
                    <Route exact path="/order" component={Order}/>
                    <Route exact path="/orderPlan" component={OrderPlan}/>
                    <Route exact path="/orderDetail" component={OrderDetail}/>
                    <Route exact path="/repay" component={Repay}/>
                    <Route exact path="/faceRecognition" component={FaceRecognition} />
                    <Route exact path="/orderPlanRepayment" component={OrderPlanRepayment}/>
                    <Route exact path="/orderRepaymentDetail" component={OrderRepaymentDetail} />
                    <Route exact path="/bankCard" component={BankCard}/>
                    <Route exact path="/cardList" component={CardList}/>
                    <Route exact path="/faceRecognition" component={FaceRecognition}/>
                    <Route exact path="/result" component={Result}/>
                    <Route exact path="/bindCard" component={BindCard}/>
                    <Route exact path="/productDetail" component={ProductDetail}/>
                    <Route exact path="/loanDetail" component={LoanDetail}/>
                    <Route exact path="/Transition" component={Transition}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
