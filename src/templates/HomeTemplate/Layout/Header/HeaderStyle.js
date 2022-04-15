import styled from 'styled-components'
import { breakpoint, Responsive } from '../../../../util/settings/BreakpointStyle'
export const Header = styled.header`
position: fixed;
top: 0;
left: 0;
z-index: 999;
width: 100%;
background-color: white;

`
export const NavbarHeader = styled.nav`
height: 60px;
.logo {
    padding:0 0 0 30px;
    margin-right: calc(100%/3 - 80px);
    img{
        width: 50px;
        height: 50px;
    }
}
.toggleBtn{
    margin: 0 25px;
color:gray;
&:focus{
    box-shadow: none;
}
}
#navbarContent{
    background-color:white;   
}
ul li{
    margin: 0 5px;
    a{
    text-decoration: none;
    color: black;
    transition: all 0.3s;
    white-space: nowrap;
    &:hover{
    color: #fb4226;
    }
    } 
    &.active a{
    color: #fb4226;
    }
}
${Responsive.md}{
    .logo {
        margin-right: calc(100%/6 - 80px);
}
}
${Responsive.sm}{
#navbarContent{
padding:14px 25px;
}

}
`