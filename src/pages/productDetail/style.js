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

export const ProductMain = styled.div`
    background: #ffffff;
    padding: 1.2rem 0.4rem 0.4rem;
    // height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .box {
        padding: 0.16rem 0 0.28rem 0;
        border-bottom: 1px solid #eeeeee;
        h2 {
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.28rem;
            color: #9B9B9B;
            letter-spacing: 1px;
            font-weight: normal;
        }
        .list {
            line-height: 0.5rem;
            font-size: 0.24rem;
            color: #00010B;
            letter-spacing: 1px;
            overflow: hidden;
            span{
                margin-right: 0.1rem;
                float: left;
            }
            em,strong{
                font-style: normal;
                float: left;
                width: 6rem;
                font-weight: normal;
            }
        }
    }
    .box:last-child {
        border-bottom: none;
    }
`;