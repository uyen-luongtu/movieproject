import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 70%;
    margin: 70px auto;
`
export const AdminInfoContainer = styled.div`
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    background-color: rgb(249,250,251);
    border-radius: 8px;
`

export const AdminInfo = styled.div`
img{
    width: 120px;
    border-radius: 50%;
}
p {
    margin-bottom: 8px;
    font-weight: 700;
}
span {
    color:  #39739d;
}
`

export const ButtonGroup = styled.div`
button{
background-color: #e1ecf4;
border: 1px solid #7aa7c7;
box-shadow: rgb(255 255 255 / 70%) 0 1px 0 0 inset;
color: #39739d;
&:hover{
    background-color: #b3d3ea;
    color: #2c5777; 
}
&:focus{
    box-shadow: none;
}
}
`

export const Management = styled.div`
    margin-top: 50px;
    h2 {
    font-size: 40px;
    font-weight: 700;
    }
    button {
    background-color: #5E5DF0;
    box-shadow: #5e5df0 0 10px 20px -10px;
    border-radius: 10px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 35px;
    width: 35%;
    transition: all 0.5s;
    &:hover{
        background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    }
    }   
`