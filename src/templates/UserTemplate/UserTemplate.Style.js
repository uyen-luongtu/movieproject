import styled from 'styled-components'
import loginBg from '../../assets/img/loginBg.jpg'

export const UserBackground = styled.div`
background-image: url(${loginBg});
color: white;
width: 100vw;
height: 100vh;
background-size: contain;
position: relative;
overflow-y: scroll;
`

export const FormContainer = styled.div`
background-image: linear-gradient(rgba(20, 50, 93, 0.9), rgba(8, 22, 48, 0.9));
width: 330px;
min-height: 480px;
border-radius: 10px;
padding: 45px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
img{
    width: 90%;
    margin: auto;  
    cursor:pointer;
}

.changeForm {
    border-top: 1px solid rgb(73, 80, 87);
    padding-top: 10px;
    margin-top: 20px;
}
.changeFormBtn {
    color: rgba(255, 193, 7, 0.72);
    text-decoration: underline;
    transition: all 0.5s;
    &:hover{
    color: rgb(251, 66, 38);
    }
}
`

export const SubmitButton = styled.button`
width: 100%;
padding: 8px;
background-color: rgb(20, 50, 93);
border: none;
transition: all 0.5s;
&:hover{
    background-color: rgb(15, 42, 82);
}
%:focus{
    box-shadow: none;
}

`