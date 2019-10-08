import styled from 'styled-components';
import leftarrow from "../../assets/leftarrow_5f.png";

export const OrderBack = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    overflow-y: auto;
`;

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

export const OrderNav = styled.div`
    padding-top: 1.5rem;
    background: #fff;
    height: 3.5rem;
    box-sizing: border-box;
    span {
        display: block;
        line-height: 0.36rem;
        font-size: 0.24rem;
        color: #4a4a4a;
        text-align: center;
        em {
            font-style: normal;
            color: #ff5656;
        }
    }
    h2 {
        line-height: 0.84rem;
        font-size: 0.6rem;
        text-align: center;
        position: relative;
        font-weight: 400;
        img{
            position: absolute;
            height: 1.22rem;
            right: 0;
            top: -0.58rem;
        }
    }
`;

export const OrderTitle = styled.div`
    height: 0.75rem;
	line-height: 0.75rem;
	padding: 0 0.4rem;
	margin-top: 0.4rem;
	font-size: 0.24rem;
	color: #9B9B9B;
`;

export const PlanList = styled.div`
    background: #ffffff;
    padding: 0 0.4rem 0.2rem;
    margin-bottom: 0.4rem;
    .listNav{
        border-bottom: 1px solid #F5F5F5;
        height: 1.16rem;
        line-height: 1.16rem;
        color: #4A4A4A;
        font-size: 0.28rem;
        font-family: PingFangSC-Light;
        font-weight: normal;
        margin-bottom: 0.1rem;
        span{
            float: right;
            font-size: 0.4rem;
            font-family: PingFangSC-Medium;
        }
    }
    .list{
        line-height: 0.6rem;
        color: #9B9B9B;
        font-size: 0.28rem;
        font-family:PingFangSC-Light;
        span{
            float: right;
        }
        em{
            float: right;
            color: #567BFF;
            text-decoration: none;
        }
    }
`;