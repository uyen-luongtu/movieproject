import styled from 'styled-components'
import { Responsive } from '../../util/settings/BreakpointStyle'

export const CheckoutResult = styled.div`
padding-top: 61px;
`
export const LeftContent = styled.div`
background-image: url(${(props) => props.backgroundImage});
width: 30%;
height: calc(100vh - 61px);
background-position: center;
background-size: cover;
position: fixed;
${Responsive.lg}{
    width: 40%;
}
${Responsive.md}{
display:none;
}
`;
export const Overlay = styled.div`
background-color: black;
opacity: 0.7;
height: 100%;
width: 100%;
`
export const FilmInfo = styled.div`
width: 85%;
position: absolute;
bottom: 29%;
left: 50%;
transform: translateX(-50%);
color: #e9e9e9;
h3{
    font-size: 24px;
    color: #e9e9e9 !important;
    margin: 18px 0;
    span{
        color: white;
        font-weight: 700;
        font-size: 15px;
        background-color: #fb4226;
        border-radius: 5px;
        padding: 3px 5px;
        margin-right: 8px; 
    } 
}
p:last-child {
    font-size: 16px;
}
`
export const RightContentWrapper = styled.div`
margin-left: 30%;
margin-top: 30px;
${Responsive.lg}{
    margin-left: 40%;
}
${Responsive.md}{
    margin-left: 0;
}
`

export const RightContent = styled.div`
max-width: 400px;
margin: auto;
`

export const Ticket = styled.div`
width: 100%;
border: 2px solid #e9e9e9;
box-shadow: 0 10px 20px 0 gray;
`
export const TicketInfo = styled.div`
padding: 30px 20px;

h3 {
    font-size: 22px;
    margin-bottom: 10px;
    span{
            color: white;
            font-weight: 700;
            font-size: 15px;
            background-color: #fb4226;
            border-radius: 5px;
            padding: 3px 5px;
            margin-right: 8px;   
    }
}
`
export const CinemaLogo = styled.img`
width: 45px;
height: 45px;
border-radius: 50%;
`

export const CinemaDetail = styled.div`
width: 60%;
p:last-child {
    color: #9b9b9b;
}
`
export const ScheduleInfo = styled.div`
margin-top: 20px;
    margin-right: 60px;
    p {
        margin: 0;
        color: #4a4a4a;
    }
    h4 {
        font-size: 18px;
    }
    @media screen and (max-width:350px){
        margin-right: 0;
    }
`

export const SeatCode = styled.div`
margin-top: 20px;
p {
    margin: 0;
    font-size: 14px;
    color: #4a4a4a;
}
h4 {
    font-size: 18px;
    margin: 0;
}
`
export const DivisionLine = styled.div`
height: 2px;
    background-image: linear-gradient(270deg, #e9e9e9 60%, rgba(255, 255, 255, 0) 0);
    background-size: 30px 2px;
    position: relative;
    .halfCircle {
        background-color: #d5d5d5;
        width: 9px;
        height: 18px;
        position: absolute;
        top: -9px;
        &.halfCircle_left {
            border-radius: 0 999px 999px 0;
        }
        &.halfCircle_right {
            border-radius: 999px 0 0 999px;
            right: 0;
        }
    }
`
export const TicketQRCode = styled.div`
padding: 30px 20px;
img {
    width: 130px;
    height: 130px;
}
.ticketCode{
    p {
        color: #4a4a4a;
        font-size: 14px;
        margin-bottom: 7px;
    }
    h3 {
        color: #fb4226;
        font-size: 24px;
    }
}
h2 {
    margin-top: 25px;
    color: #4a4a4a;
    text-transform: uppercases;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 24px;
}
@media screen and (max-width:350px){
  display:block;
  img{
      margin-bottom: 15px
  }
}
`
export const HomeButton = styled.div`
width: 80%;
    margin: 15px auto;
    padding: 13px;
    border: 1px solid #979797;
    border-radius: 5px;
    font-size: 20px;
    color: #4a4a4a;
    transition: all 0.5s;
    &:hover{
        background-color: #fb4226;
        border-color: #fb4226;
        color: white;
    }
`
export const Hotline = styled.div`
h2 {
    text-align: right;
    color: #9b9b9b;
    font-size: 18px;
}
.hotlineFee {
    color: red;
    font-size: 10px;
}
.hotlineNumber p {
    font-size: 36px;
}
`