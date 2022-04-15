import styled, { css } from 'styled-components'

import { NavLink } from 'react-router-dom';
import { Responsive } from '../../../util/settings/BreakpointStyle';

export const styleImg = css`
width: 50px;
    height:50px;
`
export const CinemaDetails = styled.div`
padding: 10px 22px;
white-space: normal;
width: 282px;
opacity: 0.6;
transition: all 0.3s;
&:hover{
    opacity: 1;
}
img{
${styleImg}
}
${Responsive.md}{
    width:200px;
    padding: 6px 12px;
}
${Responsive.sm}{
    width:170px;
}
@media screen and (max-width: 400px){
    width:108px;
    padding: 5px 11px;

}
`
export const CinemaSystem = styled.div`
padding: 10px 22px;
opacity: 0.6;
transition: all 0.3s;
&:hover{
    opacity: 1;
}
img{
    ${styleImg}
}
${Responsive.md}{
    padding: 6px 12px;
}
@media screen and (max-width: 400px){
    padding: 5px 11px;
}
`
export const ShowtimesContainer = styled.div`
max-width: 940px;
margin: 40px auto;

//custom antd
.ant-tabs-left > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-right > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-left > div > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-right > div > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-left > .ant-tabs-content-holder > .ant-tabs-content > .ant-tabs-tabpane,
.ant-tabs-left > div > .ant-tabs-content-holder > .ant-tabs-content > .ant-tabs-tabpane{
    padding: 0;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    text-shadow: none;
}
.showtimes .ant-tabs {
    line-height: inherit;
}
.ant-tabs-tab-active{
    ${CinemaSystem}, ${CinemaDetails}{
    opacity: 1;
}
}
`

export const CinemaInfo = styled.div`
text-align: left;
margin-left: 15px;
.cinemaName span{
    color: #8bc541;
}
p{
    font-size: 12px;
    color: #949494;
    margin-top: 5px;
    margin-bottom: 0; 
}
`


export const CinemaList = styled.div`
.ant-tabs-nav-list{
    height: 705px;
}
`
export const MovieList = styled.div`
padding: 10px 22px;
height: 705px;
overflow-y: scroll;
`
export const MovieDetails = styled.div`
background-color:rgba(0,0,0,.03);
.movieTitle{
    font-weight: 600;
    span{
        color: white;
        padding: 3px 5px;
        background-color: #fb4226;
        border-radius: 5px;
        font-weight: 600;
        margin-right: 5px; 
    }
}
p{
    font-size: 12px;
    color: #9b9b9b;
    margin-top: 3px;
    margin-bottom: 0;
}
img{
    ${styleImg}
}
${Responsive.sm}{
    .movieTitle{
        line-height:20px;
}
`
export const MovieItem = styled.div`
margin-bottom: 40px
`
export const DigitalText = styled.p`
font-size: 16px;
    font-weight: 700;
    margin: 20px 0;
`

export const ShowingTime = styled(NavLink)`
text-decoration: none;
display: inline-block;
text-align: center;
color: #9b9b9b;
font-weight: 700;
margin: 0 10px 10px 0;
padding: 3px 0;
width: calc(25% - 10px);
background-color: hsla(0, 0%, 96.5%, 0.5);
border: 1px solid #e4e4e4;
border-radius: 7px;
span{
    color: #108f3e;
    font-size: 18px;
    transition: all 0.2s;
}
&:hover {
    color: #9b9b9b;
    span{
        color: #fb4226;
    }
}
@media screen and (max-width: 820px){
    font-size:14px;
    span{
        font-size: 14px;
    }
}
@media screen and (max-width: 670px){
    width: calc(33% - 10px); 
}
${Responsive.sm}{
    width: calc(50% - 10px); 
}
@media screen and (max-width: 400px){
    width: calc(100% - 10px); 
}

`