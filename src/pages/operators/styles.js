import styled from 'styled-components';
export const BaseContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .base_nav {
        background-color: #fff;
        height: 0.86rem;
    }
    .header_nav {
        position: relative;
        width: 100%;
        height: 2.4rem;
    }
    .backText {
        position: absolute;
        display: block;
        left: 0.28rem;
        top: 0.2rem;
        width: 0.32rem;
        height: 0.32rem;
        z-index: 10;
    }
    .back {
        display: block;
        width: 0.32rem; 
        height: 0.32rem;
    }
    .base_txt {
        position: absolute;
        left: 0;
        top: 0.18rem;
        width: 100%;
        color: #4a4a4a;
        font-size: 0.36rem;
        text-align: center;
        z-index: 1;
    }
    .base_question {
        position: absolute;
        top: 0.2rem;
        right: 0.28rem;
        font-size: 0.28rem;
        color: #567bff;
        z-index:10
    }
    .nav_list {
        display: flex;
        justify-content: space-between;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        height:0.7rem;
        line-height: 0.7rem;
    }
    .base_banner {
        width: 100%
    }
`;

export const ComponentUl = styled.div`
    padding: 0 0.4rem;
    margin-bottom: 0.3rem;
    & > div:nth-of-type(1) ,& > div:nth-of-type(2), & > div:nth-of-type(3)  {
        position: relative;
        &::before {
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            content: '';
            width: 1.2rem;
            height: 1.2rem;
            line-height: 1.2rem;
            text-align: right;
            z-index: 1;
            font-size: 0.28rem;
            color: #9b9b9b;
        }
    }
    & > div:nth-of-type(1) {
        &::before {
            content: '姓名'
        }
    }
    & > div:nth-of-type(2) {
        &::before {
            content: '身份证号'
        }
    }
    & > div:nth-of-type(3) {
        &::before {
            content: '手机号'
        }
    }
    input[type="text"] {
        position: relative;
        display: block;
        width: 100%;
        height: 1.2rem;
        border: none;
        border-bottom: 1px solid #eee;
        outline: none;
        font-size: 0.28rem;
        color: #4a4a4a;
        padding-left: 1.4rem;
    }
`;

export const Promt = styled.div`
    padding: 0 0.4rem;
    .agree {
        font-size: 0.24rem;
        color: #9b9b9b;
        margin-bottom: 0.6rem;
        span {
            color: #000117;
        }
    }
    p {
        font-size: 0.24rem;
        color: #9b9b9b;
        line-height: 0.42rem;
    }
    .mb44 {
        margin-bottom: 0.44rem;
    }
    .agree_btn {
        width: 100%;
        background-color: #567bff;
        height: 0.88rem;
        border: 0;
        border-radius: 0.1rem;
        font-size: 0.36rem;
        color: #fff;
        margin-bottom: 0.7rem;
        outline: none;
    }
    .smallText {
        font-size: 0.24rem;
        color: #d9d9d9;
        text-align: center;
        padding-bottom: 0.3rem;
    }
`;