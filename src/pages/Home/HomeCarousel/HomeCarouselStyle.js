import styled from 'styled-components'
import { Responsive } from '../../../util/settings/BreakpointStyle'

export const IndicatorBtn = styled.button``

export const MovieCarousel = styled.div`
margin-top: 60px;
// Custom carousel bs
.carousel-control-next, .carousel-control-prev{
    width: 10%;
}
.carousel-control-next-icon, .carousel-control-prev-icon{
    width: 4rem;
    height: 4rem; 
}
.carousel-item {
    img{
      height:570px;
    }
}

${IndicatorBtn}{
    width: 13px;
    height: 13px;
    border-radius: 50%;
    margin: 0 4px;
    background-color: #d8d8d8;
    opacity: 1;
    &.active{
    background-color: #fb4226;
    }
}
${Responsive.lg}{
    .carousel-item {
        img{
          height:430px;
        }
    }
}
${Responsive.md}{
    .carousel-item {
        img{
          height:350px;
        }
    }
}
${Responsive.sm}{
    .carousel-item {
        img{
          height:220px;
        }
    }
}
`