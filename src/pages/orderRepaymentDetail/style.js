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
        img{
            position: absolute;
            height: 1.22rem;
            right: 0;
            top: -0.58rem;
        }
    }
`;

export const DetailList = styled.div`
    background: #ffffff;
    padding: 0.2rem 0.4rem;
    border-top: 1px solid #F5F5F5;
    h2{
        line-height: 0.7rem;
        font-size: 0.28rem;
        color: #4A4A4A;
    }
    .list{
        line-height: 0.7rem;
        color: #909090;
        font-size: 0.28rem;
        cursor: pointer;
        span{
            color: #000117;
            float: right;
        }
        em{
            color: #567BFF;
            float: right;
            text-decoration: none;
            cursor: pointer;
        }
    }
`;