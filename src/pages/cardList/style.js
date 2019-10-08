import styled from 'styled-components';
import leftarrow from "../../assets/leftarrow_5f.png";

export const Head = styled.div`
    width: 100%;
	height: 0.9rem;
	line-height: 0.9rem;
	text-align: center;
	font-size: 0.36rem;
	color: #4A4A4A;
	background-color: #FFFFFF;
	position: fixed;
    top: 0;
    left: 0;
    z-index:1;
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

export const NoCard = styled.div`
    padding-top: 3.2rem;
    img{
        display: block;
        width: 3rem;
        height: auto;
        margin: 0 auto;
    }
    p{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.32rem;
        color: #909090;
        text-align: center;
    }
`;

export const Tips = styled.div`
    position: fixed;
    left: 0;
    top: 0.9rem;
    width: 100%;
    background: #ffffff;
    padding-top: 0.2rem;
    padding-left: 0.4rem;
    line-height: 0.75rem;
    color: #567BFF;
    font-size: 0.24rem;
    z-index:1;
    img{
        width: 0.28rem;
        height: 0.28rem;
        vertical-align: text-top;
    }
`;

export const BankList = styled.div`
    padding: 1.9rem 0.4rem 0.4rem;
    list-style: none;
    li{
        width: 100%;
        margin-bottom: 0.4rem;
        padding: 0.4rem;
        background:linear-gradient(90deg,rgba(81,183,245,1) 0%,rgba(86,123,255,1) 100%);
        border-radius:0.06rem;
        overflow: hidden;
        position: relative;
        img{
            display: block;
            width: 0.6rem;
            height: 0.6rem;
            float: left;
            margin-right: 0.2rem;
            margin-top: 0.1rem;
        }
        .cardContent{
            float: left;
            h2{
                height: 0.5rem;
                line-height: 0.5rem;
                font-weight: normal;
                strong{
                    font-size: 0.32rem;
                    font-family: 'PingFangSC-Medium';
                    color: #ffffff;
                    float: left;
                    font-weight: normal;
                }
                span{
                    display: block;
                    height: 0.32rem;
                    line-height: 0.24rem;
                    font-size: 0.18rem;
                    color: #567BFF;
                    border: 1px solid #ffffff;
                    background: #ffffff;
                    border-radius: 0.16rem;
                    margin-top: 0.12rem;
                    float: right;
                    padding: 0.04em 0.16rem;
                }
            }
            h3{
                height: 0.28rem;
                font-family:PingFangSC-Light;
                font-size: 0.2rem;
                color: #ffffff;
                margin-bottom: 0.2rem;
                font-weight: normal;
            }
            h4{
                height: 0.7rem;
                line-height: 0.7rem;
                font-weight: normal;
                span{
                    font-size: 0.36rem;
                    color: #ffffff;
                    margin-right: 0.5rem;
                }
                em{
                    font-weight: 500;
                    font-style: normal;
                    font-size: 0.48rem;
                    color: #ffffff;
                    font-family: Arial;
                }
            }
        }
    }
`;

export const AddCard = styled.div`
    border: 1px solid rgba(86,123,255,0.51);
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0.5rem 0.4rem 1.6rem;
    background:  #F4F8FE;
    border-radius: 0.08rem;
    img{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        float: left;
    }
    span{
        font-size:0.32rem;
        color: #4a4a4a;
        margin-left: 0.4rem;
        float: left;
    }
    .go{
        height: 0.24rem;
        width: 0.24rem;
        float: right;
        margin-right: 0.4rem;
        margin-top: 0.28rem;
    }
`;

export const SureBtn = styled.div`
    width: 100%;
    height: 1.2rem;
    line-height: 1rem;
    position: fixed;
    bottom:0;
    left: 0;
    z-index:1;
    padding-top: 0.2rem;
    background-color: #FFF;
    span{
        display: block;
        width: 100%;
        height: 100%;
        background-color: #567BFF;
        text-align: center;
        color: #FFFFFF;
        font-size: 0.36rem;
        text-decoration: none;
    }
`;

export const Major = styled.div`
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        z-index: 11;
        &>div{
            width: 100%;
            padding-top: 0.4rem;
            border-radius: 0.1rem;
            background: #ffffff;
            h2{
                // height: 0.25rem;
                line-height: 0.5rem;
                text-align: center;
                color: #000118;
                font-size:0.36rem;
                font-weight: normal;
                padding: 0 1rem;
            }
            p{
                margin-top: 0.1rem;
                line-height: 0.35rem;
                text-align: center;
                color: #9b9b9b;
                font-size: 0.24rem;
                border-bottom: 1px solid #dddddd;
                padding: 0 1rem 0.3rem;
            }
            .btn{
                height: 1.1rem;
                line-height: 1.1rem;
                button{
                    width: 50%;
                    height: 100%;
                    float: left;
                    text-align: center;
                    font-size: 0.32rem;
                    border: none;
                    background: transparent;
                    outline: none;
                    &.cancelBtn{
                        color: #9b9b9b;
                    }
                    &.sureBtn{
                        color: #567BFF;
                    }
                }
            }
        }
    }
`;