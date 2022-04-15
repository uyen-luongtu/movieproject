import styled, { keyframes } from "styled-components";

export const Loading = styled.div`
    background-color: white;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
`

const LoadingShaking = keyframes`
0% {
        transform: rotate(5deg);
    }
    25% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-5deg);
    }
    75% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(5deg);
    }
`

export const LoadingLogo = styled.div`
 margin: auto;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 120px;
height: 120px;
img{
    width: 100%;
    animation: ${LoadingShaking} 0.5s linear infinite;
}
`