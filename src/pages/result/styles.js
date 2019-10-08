import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    .result_img {
        margin-top: 0.8rem;
        .result_circle {
            position: relative;
            width: 1.84rem;
            height: 1.84rem;
            margin:0 auto 0.4rem;
            .result_precent {
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                width: 100%;
                height: 100%;
                font-size: 0.32rem;
                color: #000118;
                text-align: center;
                line-height: 1.84rem;
            }
            img {
                position: absolute; 
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
    .rest_h2 {
        text-align: center;
        color: #000118;
        font-size: 0.48rem;
        line-height: 0.52rem;
        margin-bottom: 0.2rem;
    }
    .rest_h4 {
        text-align: center;
        color: #9b9b9b;
        font-size: 0.28rem;
        line-height: 0.28rem;
        p {
            color: #4a4a4a;
            line-height: 0.4rem;
            &.rest_gray{
                color: #9b9b9b;
            }
            span {
                color: #567bff;
            }
        }
    }
    .back_btn {
        display: block;
        width: 3.6rem;
        height: 0.88rem;
        background-color: #567bff;
        color: #fff;
        border: 0;
        border-radius: 0.12rem;
        font-size: 0.36rem;
        margin: 0.7rem auto 0;
    }
`; 

export const HeaderNav = styled.div`
    width: 100%;
    height: 0.84rem;
    line-height: 0.84rem;
    text-align: center;
    font-size: 0.32rem;
    color: #4a4a4a;
    border-bottom: 1px solid #eee;
`;

export const BankText = styled.div`
    margin: 0.6rem;
    .bank_des {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: 0.36rem 0;
        overflow: hidden;
        .bank_left_txt {
            width: 50%;
            float: left;
            color: #9b9b9b;
            font-size: 0.24rem;
        }
        .bank_right_txt {
            width: 50%;
            float: left;
            font-size: 0.24rem;
            color: #9b9b9b;
            p {
                margin: 0.32rem 0;
                span {
                    display: block;
                    line-height: 0.36rem;
                    &:nth-of-type(1){
                        color: #4a4a4a;
                        font-weight: 500
                    }
                }
            }
            img {
                float: left;
                width: 0.4rem;
                margin-right: 0.4rem;
            }
            .bank_inner_txt {
                float: left;
            }
        }
    }
    .bank_list {
        padding-top: 0.32rem;
        p {
            overflow: hidden;
            color: #9b9b9b;
            font-size: 0.24rem;
            margin-bottom: 0.32rem;
            span {
                display: block;
                float: left;
                width: 50%;
                &:last-child {
                    text-align: right;
                }
            }
        }
    }
`;