import styled from 'styled-components';

export const BarContent = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .promt_text {
        height: 0.56rem;
        line-height: 0.56rem;
        font-size: 0.2rem;
        color: #ccc;
        text-align: center;
        background-color: #F5F5F5;
    }
    .bottom_content {
        height: 0.98rem;
        background-color: #fff;
        overflow:hidden;
        & > div {
            float: left;
            width: 50%;
            padding-top: 0.2rem;
            text-align: center;
            font-size: 0.2rem;
            color: #9b9b9b;
            line-height: 0.22rem;
            &.active {
                color: #5378f6;
            }
            img {
                display: block;
                width: 0.4rem;
                height: 0.4rem;
                margin: 0 auto 0.1rem;
            }
        }
    }
`;