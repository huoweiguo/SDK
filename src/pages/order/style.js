import styled from 'styled-components'

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
`

export const Nodata = styled.div`
    padding-top: 2.6rem;
    img{
        display: block;
        width: 3rem;
        margin: 0 auto;
    }
    p{
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.54rem;
        color: #9B9B9B;
        margin-top: 0.1rem;
        margin-bottom: 0.3rem;
    }
    span{
        display: block;
        width: 2.4rem;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        font-size: 0.36rem;
        color: #FFFFFF;
        background-color: #567BFF;
        border-radius: 0.1rem;
        margin: 0 auto;
    }
`

export const Orderlist = styled.div`
    margin-top: 0.3rem;
    background-color: #FFFFFF;
    padding: 0 0.4rem;
    .li_nav{
        height: 0.8rem;
        border-bottom:1px solid #f0f0f0;
        width: 100%;
        line-height: 0.8rem;
        .order_user{
            float: left;
            font-size: 0.24rem;
            color: #9B9B9B;
        }
        .order_status{
            float: right; 
            font-size: 0.24rem;
            color: #9B9B9B;
            span{
                font-size: 0.24rem;
                color: #FF5656;
            }
            em{
                font-style: normal;
                color: #567BFF;
                font-size: 0.24rem;
            }
            img{
                float: right;
                margin-left: 0.2rem;
                height: 0.24rem;
                margin-top: 0.28rem;
            }
        }
    }
    .li_desc{
        padding: 0.2rem 0 0.3rem;
        overflow: hidden;
        &>div{
            color: #9B9B9B;
            p{
                font-size:0.2rem;
                line-height: 0.34rem;
            }
        }
        .order_date{
            float: right;
            padding-right:0.1rem;
            p{
                line-height: 0.44rem;
                white-space: nowrap;
            }
        }
        .order_money{
            float: left;
            span{
                display: block;
                color: #4A4A4A;
                line-height: 0.56rem;
                font-size: 0.4rem;
                font-family: PingFangSC-Semibold;
            }
        }
    }
`

export const OrderMain = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.9rem 0 1rem;
    position: absolute;
    left: 0;
    top: 0;
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