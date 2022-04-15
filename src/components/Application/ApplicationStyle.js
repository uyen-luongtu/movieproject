import styled from 'styled-components'
import appBg from '../../assets/img/appBg.jpg'
import { Responsive } from '../../util/settings/BreakpointStyle'


export const ApplicationContainer = styled.div`
background-image: url(${appBg});
height: 600px;
background-size: cover;
position: relative;
`
export const Content = styled.div`
width: 940px;
margin: auto;
position: absolute;
top: 50%;
left: 50%;
color: white;
transform: translate(-50%, -50%);
${Responsive.lg}{
    width:700px
}
${Responsive.md}{
    width:515px;
}
${Responsive.sm}{
    padding:0 5px;
    width:275px;
}
`
export const ContentLeft = styled.div`
width: 50%;
h2{
    font-size: 30px;
    font-weight: 700;
    line-height: 50px;
}
p:first-of-type {
    font-size: 16px;
    line-height: 22px;
}
button {
    padding: 12px 20px;
    background-color: #fb4226;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
}
p:last-of-type {
    margin-top: 15px;
    font-size: 14px;
    span {
        border-bottom: 1px solid white;
    }
}
${Responsive.md}{
   h2{
    font-size: 21px;
    line-height: 28px;
   }
   p:first-of-type {
    font-size: 14px;
    line-height: 18px;
}
button {
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 700;
}
p:last-of-type {
    font-size: 12px;
}
}
${Responsive.sm}{
    width:100%;
}
`

export const ContentRight = styled.div`
position: relative;
width: 50%;
${Responsive.sm}{
    width:100%;
}
`
export const PhoneImg = styled.div`
width: 43%;
margin: auto;

`

export const AppImg = styled.div`
width: 41%;
margin: auto;
position: absolute;
top: 2%;
left: 140px;
img{
    border-radius: 25px;
}
${Responsive.lg}{
    top:1%;
    left:104px
}
${Responsive.md}{
    left:76px;
    img{
        border-radius: 16px;
    }
}
${Responsive.sm}{
    left:78px;
    width: 41%;
}
`