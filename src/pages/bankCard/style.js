import styled from 'styled-components';
import leftarrow from "../../assets/leftarrow_5f.png";

export const BankBack = styled.div`
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

export const BankList = styled.div`
    border-bottom: 1px solid #F0F0F0;
    padding: 0.12rem 0.42rem;
    background: #FFFFFF;
    overflow: hidden;
    img{
        display: block;
        float: left;
        height: 0.6rem;
        width: 0.6rem;
        margin-top: 0.12rem;
        margin-right: 0.2rem;
    }
    .text{
        float: left;
        h2{
            height: 0.5rem;
            line-height: 0.5rem;
            font-family: 'PingFangSC-Light';
            font-size: 0.36rem;
            color: #000117;
            letter-spacing: 0;
            font-weight: normal;
        }
        span{
            display: block;
            height: 0.35rem;
            line-height: 0.35rem;
            font-family: 'PingFangSC-Light';
            font-size: 0.24rem;
            color: #9B9B9B;
            letter-spacing: 0;
        }
    }
`;
