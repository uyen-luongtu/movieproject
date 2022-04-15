import styled from 'styled-components'
import { Responsive } from '../../util/settings/BreakpointStyle'

export const DetailContainer = styled.div`
margin-top: 61px;
background-color: #0a2029;
padding-bottom: 10px;
`

export const TopContent = styled.div`
position: relative;
overflow: hidden;
`

export const BlurImgBg = styled.div`
background-image: url(${(props) => props.backgroundImage});
height: 512px;
background-position: top center;
background-size: cover;
filter: blur(15px);
`
export const GradientColorBg = styled.div`
background: linear-gradient(0deg, #0a2029, transparent);
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
`
export const FilmDetail = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
max-width: 70%;
${Responsive.md}{
    max-width: 80%;
}
${Responsive.sm}{
    max-width: 90%;
}
`
export const FilmDetail_Left = styled.div`
img {
    width: 215px;
    height: 318px;
}
${Responsive.sm}{
    img {
        width: 130px;
        height: 180px;
    } 
}
`

export const FilmInfo = styled.div`
display: flex;
align-items: center;
margin-left: 15px;
color: white;
font-weight: 700;
.filmTitle {
    font-weight: normal;
    font-size: 24px;
    margin: 10px 0;
    span {
        font-size: 17px;
        color: white;
        padding: 3px 5px;
        background-color: #fb4226;
        border-radius: 5px;
        margin-right: 8px;
        position: relative;
        top: -2px;
}
}
.buyTicketBtn{
    margin-top: 35px;
    background-color: #fb4226;
    padding: 9px 18px;
    font-size: 16px;
    border-radius: 4px;
    transition: all 0.3s;
    &:hover{
    background-color: #b42a14;
}
}
${Responsive.sm}{
.filmTitle {          
    font-size: 18px;
    span {
        font-size: 13px;
        padding: 3px 4px;
}
}
p:nth-child(3){
   font-size:12px 
}
.buyTicketBtn{           
    padding: 7px 15px;
    font-size: 15px;
    }    
}
`
export const BottomContent = styled.div`
position: relative;
    top: -70px;
color: white;

  // Custom tab bootstrap
  .nav-tabs {
    border-bottom: none;
}
`

export const NavTab = styled.ul`
button {
    color: white;
    font-size: 18px;
    padding: 10px;
    transition: all 0.3s;
    &.active, &:hover{
        color: #fb4226;
    font-size: 21px;
    }
}
`
export const NavContent = styled.div`
max-width: 70%;
margin: 20px auto;
${Responsive.lg}{
    max-width: 95%;
}
${Responsive.md}{
    max-width: 95%;
}
${Responsive.sm}{
    max-width: 95%;
}
`
export const ShowtimeContainer = styled.div`
background-color: white;
`
export const CinemaComplexList = styled.ul`
width: 28%;
min-height: 712px;
color: black;
border-right: 2px solid #ebebec;
li{
    cursor: pointer;
    &:hover button{
    opacity: 1;
    }
    
}
button{
    width: 100%;
    padding: 20px;
    text-transform: capitalize;
    opacity: 0.5;
    transition: all 0.3s; 
    &.active{
    opacity: 1;
    }
    img{
        height:50px;
        width:50px;
    }
    p{
        margin: 0 0 0 15px;
    }
}
${Responsive.sm}{
    width:18%;
    min-height: 600px;
    button{
        padding: 15px;
        img{
            height:35px;
            width:35px;
            margin: auto;
        }
}
`
export const CinemaSchedule = styled.div`
width: 72%;
${Responsive.sm}{
width: 82%;

}
`
export const ListShowingDate = styled.div`
color: black;
    padding: 20px 0;
    overflow-x: scroll;
    ul{
        display: inline-flex;
        flex-wrap: nowrap; 
        li{
            width: 90px;
            text-align: center; 
        }
        button{
            .day{
                margin-top: 8px;
                margin-bottom: 0;
                font-size: 17px;  
            }
            &.active{
    color: #fb4226;
            }
        }
    }
    &.scrollBarStyle::-webkit-scrollbar {
        width: 100%;
        height: 4px;
    }
`

export const ListCinemaCard = styled.div`

`

export const CinemaCard = styled.div`
padding: 20px 15px;
`

export const CinemaCardHeader = styled.div`
background-color: rgba(0, 0, 0, 0.03);
img{
    width: 50px;
    height: 50px;
    margin-right: 10px;   
}
.cinemaInfo{
    h3 {
        font-weight: bold;
        line-height: 22px;
    }
    p {
        color: #9b9b9b;
        font-size: 12px;
        line-height: 15px;
    }
}
`
export const MovieSchedule = styled.div`
button {
    color: #9b9b9b;
    font-weight: 700;
    margin: 0 10px 10px 0;
    padding: 7px;
    width: calc(25% - 10px);
    background-color: hsla(0, 0%, 96.5%, 0.5);
    border: 1px solid #e4e4e4;
    border-radius: 7px;
    span{
        color: #108f3e;
        font-size: 18px;
        transition: all 0.2s;
    }
    &:hover span{
    color: #fb4226;
    }
}
${Responsive.md}{
    button{
        width: calc(100%/3 - 10px);
    }
}
${Responsive.sm}{
    button{
        width: calc(50% - 10px);
        font-size: 15px;
        span{
            font-size: 15px;
        } 
    }
}
`
export const DigitalText = styled.p`
font-size: 16px;
    font-weight: 700;
    margin: 20px 0;
`