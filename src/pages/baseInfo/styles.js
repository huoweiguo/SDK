import styled from 'styled-components';

export const BaseContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #f5f5f5;
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
    .small_txt {
        font-size: 0.2rem;
        color: #9b9b9b;
        line-height: 0.7rem;
        white-space: nowrap;
    }
    .small_des {
        font-size: 0.2rem;
        color: #567bff;
        line-height: 0.7rem;
        white-space: nowrap;
    }
    .content_list {
        background-color: #fff;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }
    .view_box {
        height: 0.88rem;
        border: 0;
        border-bottom: 1px solid #f0f0f0;
        &:after{
            content: '';
            clear: both;
            display: block;
            visibility: hidden;
        }
    }
    .list_label {
        height: 0.88rem;
        line-height: 0.88rem;
        font-size: 0.28rem;
        color: #000117;
        float: left;
    }
    .wechat_input {
        float: right;
        width: 50%;
        text-align: right;
        border: 0;
        font-size: 0.28rem;
        color: #9b9b9b;
        height: 0.8rem;
        outline: none;
    }
    .addres_input {
        width: 100%;
        text-align: right;
        border: 0;
        font-size: 0.28rem;
        color: #9b9b9b;
        height: 0.8rem;
        outline:none;
        display: block;
    }
    .list_con {
        float: right;
        height: 0.86rem;
        input[type='text'] {
            display: block;
            height: 0.84rem;
            text-align: right;
            outline: none;
            font-size: 0.28rem;
            border: none;
        }
    }
    .change_txt {
        float: left;
        display: block;
        color: #9b9b9b;
        font-size: 0.28rem;
        height: 0.88rem;
        line-height: 0.88rem;
    }
    .list_img {
        float: right;
        display: block;
        margin-top: 0.32rem;
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.1rem;
    }
    .sm_txt {
        display: block;
        color: #9b9b9b;
        font-size: 0.24rem;
        height: 0.6rem;
        line-height: 0.6rem;
    }
    .base_bottom {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        padding: 0 0.3rem;
        box-sizing: border-box;
    }
    .view_btn {
        width: 100%;
        height: 0.88rem;
        margin: 0.2rem 0;
        border-radius: 0.1rem;
    }
    .btn_icon {
        display: block;
        width: 100%;
        height: 0.88rem;
        color: #fff;
        font-size: 0.36rem;
        text-align: center;
        line-height: 0.88rem;
        border-radius: 0.1rem;
    }
    .btn_1 {
        background-color: #bbcaff;
    }
    .btn_active {
        background-color: #567bff;
    }
    .pl {
        width: 0;
        height: 0;
        overflow: hidden;
    }
    .contact_list {
        position: fixed;
        left: 100%;
        top: 0;
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        z-index: 10;
        transition: 0.5s;
        overflow-y: scroll;
        h3 {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.36rem;
            background-color: #ddd;
            text-align: center;
        }
        ul {
            margin-top: 1rem;
            li {
                height: 0.8rem;
                line-height: 0.8rem;
                padding: 0 0.2rem;
                background-color: #fff;
                font-size: 0.32rem;
                margin-bottom: 0.1rem;
                font-weight: 500
            }
        }
    }
    .active_move {
        left: 0;
    }
    .blank_block {
        height: 2.28rem;
    }
`;