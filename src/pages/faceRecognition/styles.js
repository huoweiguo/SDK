import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    height: 100%;
    .real_banner {
        width: 100%;
        img {
            display: block;
            width: 100%;
        }
    }
    .real_list {
        ul {
            margin: 0.7rem 0.5rem;
            li {
                float: left;
                width: 50%;
                margin-bottom: 0.5rem;
                text-align: center;
                img {
                    width: 1.52rem;
                    height: 1.64rem;
                }
            }
        }
    }
    .authen_box {
        position: fixed;
        left: 0;
        bottom: 0.2rem;
        width: 100%;
        height: 0.88rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    .authen_btn {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #567bff;
        color: #fff;
        font-size: 0.36rem;
        border: 0;
        border-radius: 0.12rem;
    }
`;

export const CommonNav = styled.div`
    position: relative;
    width: 100%;
    height: 0.84rem;
    background-color: #fff;
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