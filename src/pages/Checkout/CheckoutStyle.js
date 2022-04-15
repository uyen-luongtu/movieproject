import styled, { css } from 'styled-components'
import { Responsive } from '../../util/settings/BreakpointStyle'


export const CheckoutContent = styled.div`
padding-top: 61px;
height: 100vh;
display: flex;
${Responsive.lg}{
    display: block;
}
`
export const CheckoutLeft = styled.div`
width: 72%;
height:100%;
overflow-y:scroll;
${Responsive.lg}{
width: 100%;
overflow: unset;
}
`
export const CheckoutLeft_Top = styled.div`
margin: 30px 9%;
img{
    width: 50px;
    margin-right: 15px;  
}
`
export const CinemaInfoLeft = styled.div`

p:first-child {
    font-size: 16px;
    span{
    color: rgb(0, 143, 229);
    }
}
p:nth-child(2) {
    font-size: 14px;
    margin-top: 5px;
    color: #9b9b9b;
    font-weight: 700;
}
`
export const SeatPlanContainer = styled.div`
width: 100%;
height: 63vh;
overflow-x:scroll;

${Responsive.lg}{
    min-height:285px;
}

`
export const Screen = styled.div`
min-width:750px;
img{
  width:80%;
    margin: 0 auto;
}
`
export const SeatPlan = styled.div`
min-width:750px;
margin: 0 auto;
margin-bottom:30px;
text-align: center;
`
export const SeatRow = styled.div`
margin-bottom: 8px;
justify-content:center;
`
export const SeatRowName = styled.div`
color: #3e515d;
font-weight: 700;
font-size: 15px;
display:flex;
width:22px;
`
const styleSelectingSeat = css`
background-color: #44c020;
.item1{
    background-color: #44c020;
}
.item2{
    color: #fff;
    background-color: #44c020;
    }
}
`
const styleVipSeat = css`
 background-color: #f7b500;
.item1{
    background-color: #f7b500;
}
.item2{
    background-color: #f7b500;
    }
}
 `

const styleBookedSeat = css`
 background-color: #aeb8bd;
.item1{
    background-color: #aeb8bd;
}
.item2{
    background-color: #aeb8bd;
    }
}
 `
export const Seat = styled.div`
margin-right: 8px;
position: relative;
cursor: pointer;
border-radius: 0px 0px 8px 8px;

&.selectingSeat{
${styleSelectingSeat}
}
&.vipSeat{
${styleVipSeat}
}
&.bookedSeat{
    ${styleBookedSeat}
    }
.item1{
    background-color: #3e515d;
    height: 23px;
    width: 29px;
    border-radius: 2px 2px 8px 8px;
}
.item2{
    color: rgba(255, 255, 255, 0);
    font-size: 10px;
    padding: 3px 0;
    font-weight: 700;
    background-color: #3e515d;
    height: 22px;
    width: 22px;
    border-radius: 5px;
    border: 2px solid #fff;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
}
`
export const SeatTypeContainer = styled.div`
width:70%;
margin: 20px auto;
`
export const SeatType = styled.div` 
    background-color: #3e515d;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 5px;
    width: 16px;
    height: 16px;
&.selectingSeat{
    ${styleSelectingSeat}
}
&.vipSeat{
${styleVipSeat}
}
&.bookedSeat{
${styleBookedSeat}
}
`
export const SeatTitle = styled.div`
font-size: 12px;
color: #9b9b9b;
`
export const StyleSection = css`
padding: 10px 0;
    border-bottom: 1px dashed #e9e9e9;
`

export const CheckoutRight = styled.div`
width: 28%;
height: 100%;
position:relative;
box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
.section{
    ${StyleSection}
}
${Responsive.lg}{
    width:100%;
}
`

export const BookingInfo = styled.div`
padding: 0  22px;
height: 70%;
overflow-y:scroll;
${Responsive.lg}{
    height: auto;
   padding:0 50px;
   overflow: unset;
}
${Responsive.sm}{
    padding 0 30px;
}
`
export const TotalAmount = styled.div`
padding: 18px 0 12px;
font-size: 36px;
color: #44c020;
border-bottom: 1px dashed #e9e9e9;
text-align:center;
`

export const CinemaInfoRight = styled.div`
h3 {
    margin-bottom: 5px;
    font-size: 16px;
    span{
        color: white;
        font-weight: 700;
        background-color: red;
        border-radius: 5px;
        padding: 3px 5px;
        margin-right: 8px;
}
}
${StyleSection}
`

export const SeatInfo = styled.div`
.seatCode{
    width: 60%;
    color: rgb(251, 66, 38);
}
.totalAmt{
    width: 40%;
    font-size: 16px;
    color: #44c020;
}
${StyleSection}

`
export const UserInfo = styled.div`
p:first-child {
    color: #9b9b9b;
    font-size: 12px;
    margin: 0;
}
input:focus {
    outline: none;
}
`

export const PaymentInfo = styled.div`
padding-top: 10px;
 padding-bottom: 15px;
input {
    width: 22px;
    height: 22px;
    transform: translateY(8px);
}
img {
    width: 30px;
    border-radius: 5px;
    display: inline-block;
}
`

export const Notice = styled.div`
padding: 0 22px;
    margin-bottom: 10px;
    position: absolute;
    bottom: 35px;
    background-color: white;
    width:100%;
    img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
    p:last-child span {
        color: rgb(247, 147, 32);
    }
`
export const BookingButton = styled.div`
position: absolute;
bottom: 0;
width: 100%;
padding: 14px 0;
background-image: linear-gradient(223deg, #b4ec51, #429321);
color: #e9e9e9;
font-size: 24px;
text-align:center;
cursor: pointer;
&.blockBookingBtn {
    background-color: rgb(175, 175, 175);
    background-image: none;
    cursor: auto;
}
`
