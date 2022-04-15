import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    font-family: Arial, Helvetica, sans-serif !important;
    box-sizing: border-box;
}
body {
    line-height: inherit !important;
}

.scrollBarStyle::-webkit-scrollbar {
    width: 4px;
    height: 2px;
    background-color: hsla(0, 0%, 96.5%, 0.5);
}
.scrollBarStyle::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #9b9b9b;
}
.scrollBarStyle::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(148, 148, 148, 0.3);
    background-color: #f5f5f5;
}

#account {
    padding: 10px 0;
    margin-right: 30px;
    color: rgb(155, 155, 155);
    cursor: pointer;
    position: relative;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .logoutBtn {
        font-size: 14px;
        color: white;
        background-color: #888;
        padding: 6px 20px;
        position: absolute;
        bottom: -23px;
        left: 6px;
        border-radius: 3px;
        display: none;
    }
    &:hover {
        .logoutBtn {
            display: block;
        }
    }
}
`
export default GlobalStyle;

export const ActionBtnGroup = styled.div`
span {
    position: relative;
    p {
    white-space: nowrap;
    position: absolute;
    top: -90%;
    left: 0;
    background-color: whitesmoke;
    padding: 2px 5px;
    border-radius: 3px;
    visibility: hidden;
    }
    &:hover p{
        visibility: visible;
    }
}
`