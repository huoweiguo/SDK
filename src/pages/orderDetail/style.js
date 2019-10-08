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
    padding: 1.5rem 0.4rem 0.3rem;
    background: #ffffff;
    box-sizing: border-box;
    span{
        display: block;
        line-height: 0.36rem;
        font-size: 0.24rem;
        color: #4A4A4A;
        text-align: center;
        em{
            font-style: normal;
            color: #FF5656;
        }
    }
    h2{
        line-height: 0.84rem;
        font-size: 0.6rem;
        text-align: center;
        position: relative;
        font-weight: normal;
    }
    p{
        font-size: 0.24rem;
        color: #567BFF;
        text-align: center;
        margin-top: 0.1rem;
        img{
            height: 0.24rem;
            width: 0.24rem;
            vertical-align: text-top;
        }
        &.orderOver{
            color: #FF5656;
        }
    }
    em{
        display: block;
        width: 100%;
        height: 1rem;
        border-radius: 0.06rem;
        line-height: 1rem;
        color: #ffffff;
        text-align: center;
        font-size: 0.4rem;
        text-decoration: none;
        background: #567BFF;
        margin: 0.5rem auto;
    }
`;

export const DetailList = styled.div`
    background: #ffffff;
    padding: 0 0.4rem 0.1rem;
    margin-top: 0.4rem;
    .listNav{
        border-bottom: 1px solid #F5F5F5;
        height: 1.4rem;
        h2{
            padding-top: 0.4rem;
            line-height: 0.4rem;
            color: #4A4A4A;
            font-size: 0.28rem;
            font-weight: normal;
            span{
                float: right;
                font-size: 0.32rem;
            }
        }
        p{
            font-size: 0.24rem;
            color: #909090;
            line-height: 0.4rem;
        }
    }
    .list{
        line-height: 0.7rem;
        color: #909090;
        font-size: 0.24rem;
        span{
            float: right;
            color: #4A4A4A;
        }
    }
`;