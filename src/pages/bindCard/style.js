import styled from 'styled-components';
import leftarrow from "../../assets/leftarrow_5f.png";

export const CardBack = styled.div`
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

export const Tips = styled.div`
    padding: 0.9rem 0.4rem 0;
    width: 100%;
    background-color: #D5DDF7;
    line-height: 0.6rem;
    color: #4A4A4A;
    font-size: 0.24rem;
`;

export const CardText = styled.div`
    background-color: #fff;
    &>div{
        height: 1rem;
        border-bottom: 1px solid #f5f5f5;
        line-height: 1rem;
        position: relative;
        span{
            font-size:0.28rem;
            float: left;
            display: block;
            height: 1rem;
            width: 25%;
            text-align: right;
            color: #000117;
            margin-right:5%; 
        }
        i{
            float: right;
            width: 70%;
            font-style: normal;
            display: block;
            font-size: 0.28rem;
            color: #9B9B9B;
            img{
                display:inline-block;
                width: 0.48rem;
                height: 0.48rem;
                vertical-align: middle
            }
        }
        input[type="text"],input[type="number"]{
            width: 70%;
            height: 0.9rem;
            border:0;
            outline: none;
            font-size: 0.28rem;
            color: #000117;
            float: left;
        }
        em{
            position: absolute;
            right: 0.4rem;
            top: 0;
            height: 1rem;
            line-height: 1rem;
            font-style: normal;
            font-size: 0.28rem;
            color: #567BFF;
            &.orange{
                color: #000117;
            }
        }
    }
`;

export const BingSure = styled.div`
    padding: 0 0.4rem;
    p{
        height: 0.68rem;
        line-height: 0.68rem;
        font-size: 0.2rem;
        color: #9B9B9B;
        &>span{
            color: #567BFF;
        }
    }
    button{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.4rem;
        color: #FFFFFF;
        border-radius: 0.12rem;
        border: none;
        margin: 0.4rem 0;
        outline: none;
        &.bind-btn{
            background-color: #567BFF;
        }
    }
    &>span{
        display: block;
        width: 100%;
        height: 0.4rem;
        text-align: center;
        font-size: 0.28rem;
        color: #567BFF;
    }
`;