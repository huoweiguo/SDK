import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .outer_img {
        margin: 0 0.36rem 1.48rem;
        box-sizing: border-box;
        img {
            width: 100%;
        }
    }
`;

export const CommonNav = styled.div`
    position: relative;
    width: 100%;
    height: 0.84rem;
    background-color: #fff;
    margin-bottom: 0.2rem;
    .back_btn {
        position: absolute;
        top: 0.26rem;
        left: 0.28rem;
        width: 0.3rem;
        height: 0.3rem;
        img {
            display: block;
            height: 0.3rem;
        }
    }
    .nav_title {
        text-align: center;
        height:0.84rem;
        line-height: 0.84rem;
        font-size: 0.32rem;
        color: #4a4a4a;
    }
`;

export const Identity = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 0.36rem;  
    box-sizing: border-box;
    margin-bottom: 0.8rem;
    &::after {
        display: block;
        content: '';
        clear: both;
        visibility: hidden;
    }
    .left_id_box {
        float: left;
        width: 3.24rem;
        text-align: center;
        font-size: 0.2rem;
        color: #9b9b9b;
        span {
            color: #4a4a4a;
        }
        img {
            display: block;
            width: 100%;
            margin-bottom: 0.15rem;
        }
    }
    .fright {
        float: right;
    }
`;

export const SubmitBtn = styled.div`
    position: fixed;
    left:  0;
    bottom: 0;
    width: 100%;
    padding: 0.2rem;
    background-color: #fff;
    box-sizing: border-box;
    .submit_btn_1 {
        display: block;
        width: 100%;
        height: 0.88rem;
        background-color: #567bff;
        color: #fff;
        font-size: 0.36rem;
        border: 0;
        outline: none;
    }
`;