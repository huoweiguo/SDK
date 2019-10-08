import styled from 'styled-components';
import leftarrow from "../../assets/leftarrow_5f.png";

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
    background: #fff;
    h2{
        height: 1.2rem;
        border-bottom: 1px solid #f5f5f5;
        line-height: 1.2rem;
        font-size: 0.28rem;
        color: #4a4a4a;
        padding: 0 0.4rem;
        font-weight: 400;
        &.orderOver {
            color: #ff5656;
        }
        &.orderEnd {
            color: #9b9b9b;
        }
        span {
            float: right;
            display: block;
            height: 1.2rem;
            font-size: 0.28rem;
            img {
                float: right;
                height: 0.24rem;
                margin-top: 0.46rem;
                margin-left: 0.12rem;
            }
        }
    }
`;

export const ShowMask = styled.div`
    .popup{
        width: 5.8rem;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        border-radius: 0.2rem;
        z-index: 1001;
        img{
            display: block;
            width: 5.8rem;
            height: auto;
        }
        span{
            display: block;
            width: 4.24rem;
            height: 0.72rem;
            line-height: 0.72rem;
            text-align: center;
            border-radius: 0.36rem;
            font-size: 0.28rem;
            color: #fff;
            margin: 0.58rem auto;
            background: #567BFF;
            text-decoration: none;
        }
    }
`;