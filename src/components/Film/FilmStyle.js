import styled from 'styled-components'


export const MovieOverlay = styled.div`
width: 100%;
height: 320px;
border-radius: 5px;
background: linear-gradient(0deg, #000, transparent);
position: absolute;
top: 0;
left: 0;
opacity: 0;
transition: all 0.3s;
`
export const MovieScore = styled.div`
background-color: rgba(12, 27, 54, 0.8);
border: 1px solid #1f2e46;
border-radius: 4px;
width: 54px;
position: absolute;
top: 12px;
right: 12px;
text-align:center;

p{
    margin:0;
    font-size: 20px;
    color: white;
}
`
export const MovieDetail = styled.div`
margin-top: 10px;
opacity: 1;
transition: all 0.3s;
.movieTitle{
    font-size: 16px;
    color: #000;
    font-weight: 600;
    line-height: 24px;
    height: 36px;
    span{
        color: white;
    padding: 3px 5px;
    background-color: #fb4226;
    border-radius: 5px;
    }
}
.movieDuration{
    color: #4a4a4a;
}
`
export const BuyTicketButton = styled.button`
color: white;
font-size: 18px;
padding: 11px;
width: 100%;
background: linear-gradient(270deg, #fb4226, #ce3017);
border-radius: 5px;
position: absolute;
bottom: -3px;
left: 0;
opacity: 0;
transition: all 0.3s;
`
export const MovieItem = styled.div`
margin-bottom: 20px;
position: relative;
img{
    height: 320px;
    width: 100%;
    border-radius: 5px;
}
&:hover{
    ${MovieDetail}{
        opacity:0;
    }
    ${MovieOverlay}{
        opacity: 1;
    }
    ${BuyTicketButton}{
        opacity:1;
    }
}
}
`
export const StarGroup = styled.div`
margin:0;
img{
    display: inline-block;
    width: 8px;
    height: 8px;
}
`