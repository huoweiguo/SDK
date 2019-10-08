import styled from 'styled-components';
import leftarrow from "../../assets/back.png";
import round from "../../assets/icon_round@2x.png";
import rightarrow from "../../assets/right-arrow.png"
import close from "../../assets/delete@3x.png"

export const LoanBack = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
`;

export const Head = styled.div`
    width: 100%;
	height: 0.9rem;
	line-height: 0.9rem;
	text-align: center;
	font-size: 0.36rem;
	color: #FFF;
	background-color: #567BFF;
	position: fixed;
    top: 0;
    left: 0;
    z-index:2;
    span{
        display: block;
        width: 0.9rem;
        height: 0.9rem;
        background-image: url(${leftarrow});
        background-size: 0.3rem 0.3rem;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
        top: 0;
    }
`;

export const DetailLoan = styled.div`
    padding:0 0.2rem;
    height: 100%;
    border-radius:0.1rem;
    margin:0.42rem auto 0;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    &::after{
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 3.42rem;
        background-color: #567bff;
        z-index: -1;
    }
    .quota{
        padding: 1.0rem 0 0;
        background-color: #fff;
        border-radius: 0.04rem 0.04rem 0 0;
        .qu_list{
            display: flex;
            width: 90%;
            margin: 0 auto;
            padding-bottom: 0.4rem;
            &>div{
                flex: 1;
                text-align: center;
                span{
                    color: #9B9B9B;
                    font-size: 0.28rem;
                }
                p{
                    font-size: 0.4rem;
                    color: #4a4a4a;
                    margin-top:0.12rem;
                }
            }
        }
        .loan-prod {
            border-top: 1px solid #f0f0f0;
            overflow: hidden;
            padding:0 0.4rem;
            height: 0.96rem;
            line-height: 0.96rem;
            span {
                float: left;
                font-size: 0.28rem;
                color: #9b9b9b;
            }
            em {
                float: right;
                font-size: 0.28rem;
                font-style: normal;
                color: #4a4a4a;
            }
        }
        
    }
    .detail-list {
        h4 {
            font-size: 0.24rem;
            color: #9b9b9b;
            font-weight: normal;
            height: 0.84rem;
            line-height: 0.84rem;
            padding: 0 0.4rem;
            position: relative;
            span{
                display: block;
                color: #5378F6;
                position: absolute;
                right: 0.4rem;
                top: 0;
            }
        }
        ul {
            background-color:#fff;
            padding:0 0.4rem;
            list-style: none;
            li {
                height: 0.84rem;
                line-height: 0.84rem;
                border-bottom: 1px solid #f0f0f0;
                overflow: hidden;
                list-style: none;
                &:last-child {
                    border-bottom: 0;
                }
                span {
                    float: left;
                    color: #9b9b9b;
                    font-size: 0.28rem;
                }
                i {
                    position: relative;
                    float: right;
                    font-size: 0.28rem
                    font-style: normal;
                    color: #4a4a4a;
                    &.look {
                        padding-right: 0.4rem;
                        &:after {
                            position: absolute;
                            right: 0;
                            top: 0.3rem;
                            content: '';
                            display: block;
                            width: 0.24rem;
                            height: 0.24rem;
                            background: url(${rightarrow}) no-repeat center;
                            background-size: 0.24rem 0.24rem; 
                            margin-top: -0.04rem;
                        }   
                    }
                }
            } 
        }
    }

    .charge_agree{
        padding: 0.4rem 0;
        font-size:0.2rem;
        .protocol{
            position: relative;
            color: #ccc;
            margin-bottom: 0.4rem;
            outline: none;
            font-style: normal;
            display: inline-block;
            font-size: 0.2rem;
        }
        a.a_protocol{
            font-size: 0.2rem;
            color: #4a4a4a;
            text-decoration: none;
        }
        .agree{
            position: relative;
            &::before{
                position: absolute;
                left: 0.5rem;
                top: 0.08rem;
                content: '';
                clear: both;
                display: block;
                width: 0.24rem;
                height: 0.24rem;
                background: url(${round});
                background-size: 100% 100%;
            }
        }
        .agree_btn_set{
            text-align: center;
            margin-bottom:0.4rem;
            padding: 0 0.2rem;
            span{
                width: 100%;
                height: 0.88rem;
                border-radius: 0.1rem;
                display: inline-block;
                text-decoration: none;
                line-height: 0.88rem;
                text-align: center;
                font-size: 0.36rem;
                &.a_btn2{
                    background: #567BFF;
                    color: #FFF0E5;
                }
                &.unclick{
                    background-color: #9B9B9B;
                    color: #FFF;
                }
            }
        }
    }
`;

export const RepayBox = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &.nothing{
        z-index: 11
    }
    .repay_box{
        width: 100%;
        background-color: #fff;
        height: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 11;
        &.strenth{
            // animation: run 0.7s forwards;
            height: 9rem;
        }
        .repay_box_nav {
            position: relative;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            background-color: #f5f5f5;
            font-size: 0.4rem;
            color: #000118;
            font-weight: normal;
            span {
                position: absolute;
                right: 0.3rem;
                top: 0.3rem;
                display: block;
                width: 0.36rem;
                height: 0.36rem;
                background: url(${close}) no-repeat;
                background-size:0.36rem 0.36rem; 
            }
        }
        .repay-small {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            background-color: #EFF2FF;
            font-size: 0.24rem;
            color: #567BFF;
        }
        .replay_content {
            padding: 0.4rem 0;
            height: 7.2rem;
            overflow-y: scroll;
            span {
                display: block;
                color: #4a4a4a;
                font-size: 0.24rem;
                text-align: center;
            }
            .repay-money {
                font-size: 0.5rem;
                color: #4a4a4a;
                text-align: center;
                margin: 0.12rem 0; 
            }
            .repay-rate {
                font-size: 0.2rem;
                color: #9b9b9b;
                text-align: center;
                margin-bottom: 0.4rem;
            }
            .repay-list {
                ul {
                    li {
                        overflow: hidden;
                        padding:0 0.4rem;
                        border-top: 1px solid #EEF1F6;
                        height: 0.96rem;
                        &:last-child {
                            border-bottom: 1px solid #EEF1F6;
                        }
                        .li-index {
                            float: left;
                            height: 100%;
                            line-height: 0.96rem;
                            color: #9b9b9b;
                            font-size: 0.28rem;
                            margin-right: 0.4rem;
                        }
                        .li-date {
                            float: left;
                            height: 100%;
                            line-height: 0.96rem;
                            color: #9b9b9b;
                            font-size: 0.28rem;
                        }
                        .li-money {
                            float: right;
                            span {
                                margin-top: 0.1rem;
                                text-align: right;
                                font-size: 0.28rem;
                                color: #4a4a4a;
                            }
                            em {
                                font-style: normal;
                                color: #9b9b9b;
                                font-size: 0.2rem;
                            }
                        }
                    }
                }
            }
        }
    }
    
    // @keyframes run{
    //     0% {
    //         height: 0;
    //     }
    
    //     100% {
    //         height: 9rem;
    //     }
    // }
    
    // @-webkit-keyframes run{
    //     0% {
    //         height: 0;
    //     }
    
    //     100% {
    //         height: 9rem;
    //     }
    // }
    
    // @-moz-keyframes run{
    //     0% {
    //         height: 0;
    //     }
    
    //     100% {
    //         height: 9rem;
    //     }
    // }
    
    // @-o-keyframes run{
    //     0% {
    //         height: 0;
    //     }
    
    //     100% {
    //         height: 9rem;
    //     }
    // }
`;