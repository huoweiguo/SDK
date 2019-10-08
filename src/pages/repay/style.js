import styled from 'styled-components';
import leftarrow from "../../assets/leftarrow_5f.png";
import rightarrow from "../../assets/right-arrow.png";
import close from "../../assets/delete@3x.png";
import selected from "../../assets/icon_selected@3x.png"

export const OrderBack = styled.div`
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
	color: #4A4A4A;
	background-color: #FFFFFF;
    position: relative;
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

export const Tips = styled.div`
    background-color: #EFF2FF;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0 0.4rem;
    font-size: 0.2rem;
    color: #567BFF;
    margin-bottom: 0.1rem;
`;

export const RepayType = styled.div`
    border-bottom: 1px solid #EEEEEE;
    height: 1rem;
    overflow: hidden;
    .repay-bank{
        line-height: 1rem;
        padding: 0 0.4rem;
        background-color: #fff;
        font-size: 0.28rem;
        color: #333;
        img{
            width: 0.48rem;
            height: 0.48rem;
            border-radius:50%;
            vertical-align: middle;
        }
        i{
            display: block;
            float: right;
            width: 0.28rem;
            height: 0.28rem;
            background: url(${rightarrow}) no-repeat;
            background-size: 100% 100%; 
            margin-top:0.36rem; 
        }
    }
`;

export const RepayDetail = styled.div`
    background-color: #fff;
    padding: 0 0.4rem;
    border-bottom: 1px solid #EEEEEE;
    p{
        font-size: 0.24rem;
        color: #000118;
        padding: 0.2rem 0;
    }
    .repay-money{
        padding: 0rem 0 0.2rem;
        font-size:0.72rem;
        line-height: 1rem;
        span{
            font-size:0.32rem; 
            display: inline-block;
            vertical-align: middle;
            margin-right: 0.2rem;
        }
    }
`;

export const RepaySmall = styled.div`
    width: 100%;
    height: 0.88rem;
    background-color: #fff;
    line-height: 0.88rem;
    padding:0 0.4rem;
    font-size: 0.24rem;
    color: #000012;
    margin-bottom: 0.8rem;
    span{
        color: #FF5656;
    }
`;

export const RepayBtn = styled.div`
    padding: 0 0.4rem;
    .repay-btn2,.repay-btn7{
        width: 100%;
        background-color: #567BFF;
        color: #fff;
        font-size: 0.36rem;
        display: block;
        margin:0 auto;
        height: 1rem;
        border: 0;
        border-radius: 0.1rem;
        outline: none;
    }
    .repay-btn7{
        text-align: center;
        font-size: 0.36rem;
        text-decoration: none;
        line-height: 1rem;
    }
`;

export const BankList = styled.div`
    width: 100%;
    position: fixed;
    bottom: -10rem;
    left: 0;
    z-index: 1001;
    background-color: #f9f9f9;
    transition: 0.3s;
    &.look{
        bottom: 0;
    }
    .bank-nav{
        width: 100%;
        height: 0.96rem;
        background-color: #f9f9f9;
        font-size: 0.4rem;
        color: #000118;
        line-height: 0.96rem;
        text-align: center;
        font-weight: normal;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        .close-btn{
            width: 0.36rem;
            height: 0.36rem;
            display: block;
            background: url(${close}) no-repeat;
            background-size: contain;
            float: right;
            margin-top: 0.32rem;
            margin-right: 0.4rem;
        }
    }
    ul {
        max-height: 7rem;
        overflow-y: auto;
        li{
            position: relative;
            background-color: #fff;
            padding: 0.24rem 0.4rem;
            overflow: hidden;
            border-bottom: 1px solid #ddd;
            &>span{
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index:10;
                cursor:pointer;
                text-decoration: none;
            }
            .bankImg{
                width: 0.6rem;
                height: 0.6rem;
                display: block;
                float: left;
                margin-right: 0.2rem;
            }
            .bank-detail{
                float: left;
                .bank-name{
                    font-size: 0.32rem;
                    color: #000117;
                    display: block;
                    margin-bottom: 0.1rem;
                    i{
                        font-style: normal;
                        margin:0 0.2rem;
                    }
                }
                
                p{
                    font-size: 0.28rem;
                    color: #909090;
                }
            }
            .add-card{
                font-size: 0.32rem;
                color: #000117;
                height: 0.6rem;
                line-height: 0.6rem;
                display: block;
                float: left;
                margin-top: 0.2rem;
            }
            .correct{
                width: 0.4rem;
                height: 0.4rem;
                display: block;
                float: right;
                background: url(${selected}) no-repeat;
                background-size: 100% 100%;
                margin-top: 0.1rem;
                display: none;
            }
            &.active{
                .correct{
                    display: block;
                }
            }
        }
    }
    .addCardPay{
        display: block;
        background-color: #fff;
        padding: 0.24rem 0.4rem;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        font-size: 0.32rem;
        text-decoration: none;
        color: #000117;
        img{
            width: 0.6rem;
            height: 0.6rem;
            float: left;
            margin-right: 0.2rem;
        }
        .add-card{
            font-size: 0.32rem;
            line-height: 0.64rem;
        }
    }
`;