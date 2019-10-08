import styled from 'styled-components';
export const BaseContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .base_nav {
        background-color: #fff;
        height: 0.86rem;
        border-bottom: 1px solid #eee;
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

export const ServeceContent = styled.div`
    padding: 0.4rem;
    p {
        font-size: 0.24rem;
        color: #000117;
        line-height: 0.5rem;
    }
`; 