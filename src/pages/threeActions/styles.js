import styled from 'styled-components';
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    &::after{
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 3.42rem;
        background-color: #567bff;
        z-index: 0;
    }
    .fleft {
        float: left;
    }
    .blank_block {
        height: 1.8rem;
    }
`;

export const HeaderNav = styled.div`
    position: relative;
    width: 100%;
    height: 0.86rem;
    padding: 0.18rem 0;
    box-sizing: border-box;
    z-index: 1;
    margin-bottom: 0.2rem;
    .nav_back {
        position: absolute;
        left: 0.2rem;
        top: 0.24rem;
        width: 0.34rem;
        height: 0.34rem;
        img {
            display: block;
            width: 0.34rem;
            height: 0.34rem;
        }
    }
    .nav_title {
        width: 100%;
        text-align: center;
        font-size: 0.36rem;
        line-height: 0.5rem;
        color: #fff;
    }
    .nav_question {
        position: absolute;
        right: 0.2rem;
        top: 0.3rem;
        font-size: 0.28rem;
        color: #fff;
    }
`;

export const LoanDes = styled.div`
    position: relative;
    margin: 0 0.2rem 0.2rem;
    height: 2.8rem;
    z-index: 1;
    background-color: #fff;
    border-radius: 0.04rem;
    &::after {
        display: block;
        content: '';
        clear: both;
        visibility: hidden;
    }
    .loan_types {
        &::after {
            display: block;
            content: '';
            clear: both;
            visibility: hidden;
        }
    }
    .loan_types_box {
        width: 50%;
        float: left;
        padding: 0.4rem 0 0.28rem 0;
        span {
            display: block;
            text-align: center;
            font-size: 0.24rem;
            color: #9b9b9b;
            margin-bottom: 0.08rem;
        }
        .amount_date {
            text-align: center;
            font-size: 0.5rem;
            color: #4a4a4a;
            line-height: 0.72rem;
            em  {
                position: relative;
                display: inline-block;
                border-width: 0.16rem;
                border-style: solid dashed dashed dashed;
                border-color: #ccc transparent transparent transparent;
                width: 0;
                height: 0;
                top: 0.12rem;
            }
        }
    }
    .nav_intro {
        height: 0.96rem;
        border-top:1px solid #f0f0f0;
        &::before {
            content: '';
            display: block;
            clear: both;
            visibility: hidden;
        }
        span {
            display: block;
            width: 50%;
            height: 0.96rem;
            font-size: 0.28rem;
            box-sizing: border-box;
            line-height: 0.96rem;
            &.p_intro {
                color: #9b9b9b;
                float: left;
                padding-left: 0.4rem;
            }
            &.p_des {
                position: relative;
                color: #4a4a4a;
                float: right;
                padding-right: 0.7rem;
                text-align: right;
                img {
                    position: absolute;
                    right: 0.4rem;
                    top: 0.32rem;
                    display: block;
                    height: 0.3rem;
                }
            }
        }
    }
`;

export const AuthenList = styled.div`
    margin: 0 0.2rem 0;
    padding: 0.4rem 0.4rem 0.4rem;
    box-sizing: border-box;
    background-color: #fff;
    .auth_title {
        color: #4a4a4a;
        font-size: 0.28rem;
    }
    .auth_ul {
        li {
            padding: 0.34rem 0;
            border-bottom: 1px solid #eee;
            overflow: hidden;
            .auth_li_left {
                float: left;
            }
            .auth_li_right {
                float: right;
            }
            span {
                float:left;
                display: block;
                font-size: 0.28rem;
                color: #4a4a4a;
                height: 0.52rem;
                vertical-align: middle;
                line-height: 0.52rem;
            }
            .auth_icon {
                float: left;
                display: block;
                width: 0.52rem;
                height: 0.52rem;
                vertical-align: middle;
                margin-right: 0.2rem;
            }
            .auth_li_img {
                float: left;
                display: block;
                height: 0.4rem;
                margin-top: 0.06rem;
                margin-right: 0.24rem;
            }
            .auth_li_arrow {
                float: left;
                display: block;
                height: 0.24rem;
                margin-top: 0.12rem;
            }
        }
    }
`;

export const BottomInfo = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .promt{
        width: 100%;
        height: 0.6rem;
        padding: 0 0.4rem;
        line-height: 0.6rem;
        font-size: 0.24rem;
        color: #567Bff;
        background-color: #fff;
    }
    .btn_apply,.can_apply {
        display: block;
        width: 100%;
        height: 1rem;
        background-color: #bbcaff;
        border: 0;
        font-size: 0.36rem;
        color: #fff;
        outline: none;
    }
    .can_apply{
        background-color: #5378F6;
    }
`;
