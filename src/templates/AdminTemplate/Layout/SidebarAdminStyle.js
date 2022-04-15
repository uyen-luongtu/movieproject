import styled from 'styled-components'

export const SidebarAdmin = styled.div`
 display: block;
 background-image: linear-gradient(#464d55, #25292e);
    width: 17%;
`

export const UserContent = styled.div`
    padding: 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    img {
    margin: auto;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    }
    h3 {
    text-align: center;
    color: white;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 0;
}
`

export const Menu = styled.ul`
li{
    a{
        display: block;
        padding: 20px 25px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        position: relative; 
        &:hover, &:focus{
            background-color: #405cf5;
        }
        span {
            margin-left: 15px;
            font-size: 16px;
        }
        .angle {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10%;
        }
        &[aria-expanded="true"]{
            .angle .fa-angle-down {
                transform: rotate(180deg);
                transition: all 0.2s;
                }
        }
        &[aria-expanded="false"]{
            .angle .fa-angle-down {
                transform: rotate(0deg);
                transition: all 0.2s;
            }
        }
    }
}
`