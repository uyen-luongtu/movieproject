import styled from 'styled-components'
import { Responsive } from '../../../../util/settings/BreakpointStyle'

export const Footer = styled.footer`
background-color: #222;

.footer_content{
    max-width: 940px;
    margin: auto;
}
${Responsive.lg}{
    .footer_content{
width: 730px;
    }
}
${Responsive.md}{
    .footer_content{
width: 550px;
    }
}
${Responsive.sm}{
    .footer_content{
width: 275px;
padding:0 10px;
    }
}

`
export const FooterTop = styled.div`
padding: 45px 0;
.footer_title{
    color: white;
}
p{
    font-size: 12px;
    color: #949494;
    font-weight: 700;
    transition: all 0.3s;
    &:hover{
    color: white;
    }
}
`
export const ParterList = styled.div`
width: 75%;
display: flex;
flex-wrap: wrap;
${Responsive.md}{
    width: 90%
}
`

export const Partner = styled.div`
width: 20%;
margin-bottom: 10px;
.imgBg{
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    img{
    border-radius: 50%;
    }
}
`
export const LogoGroup = styled.div`
display:flex;
`
export const Logo = styled.img`
height: 30px;
margin: 5px;
`
export const FooterBottom = styled.div`
border-top: 1px solid #4a4a4a;
padding: 35px 0;
p{
    margin:0;
    font-size: 12px;
    color: #949494;
    text-align:center;
}
`
