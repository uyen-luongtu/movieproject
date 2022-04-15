import styled from 'styled-components'
import { Responsive } from '../../util/settings/BreakpointStyle'


export const FilmListCarousel = styled.div`
padding-top: 60px;
max-width: 68%;
margin: 30px auto;
position: relative;

// Custom carousel BS
.carousel-control-prev img, .carousel-control-next img{
    height: 50px;
}
.carousel-control-prev,.carousel-control-next{
    width: unset;
}
.carousel-control-prev {
    left: -55px;
}
.carousel-control-next {
    right: -55px;
}

${Responsive.sm}{
    .carousel-control-prev {
        left: -45px;
    }
    .carousel-control-next {
        right: -45px;
    }
    .carousel-control-prev img, .carousel-control-next img{
        height: 40px;
    }
}
`
export const NavTab = styled.ul`
border-bottom: none;
margin-bottom: 30px;
button{
    color: black;
    font-size: 18px;
    padding: 10px 15px;
    line-height: 15px;
    transition: all 0.3s;
    &:hover{
    font-size: 24px;
    }
    &.active{
        color: #fb4226;
        font-size: 24px;
    }
}
`