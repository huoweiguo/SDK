import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color:#f5f5f5;
    .content_outer {
        background-color: #fff;
        padding: 0 0.4rem 0.4rem;
    }
    .home_nav {
        font-size: 0.28rem;
        color: #4a4a4a;
        line-height: 0.4rem;
        font-weight: 500;
        margin-bottom: 0.26rem;
    }
    ul {
        li {
            list-style: none;
            width: 100%;
            margin-bottom: 0.1rem;
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .blank_block {
        height: 1.74rem;
    }
`;

export const Banner = styled.div`
    padding-top: 0.6rem;
    margin-bottom: 0.3rem;
    img {
        width: 100%;
        height: 2.68rem;
    }
`;