import styled from 'styled-components'
import { Responsive } from '../../../util/settings/BreakpointStyle'
export const CheckoutHeader = styled.div`
width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 999;
    
`

export const CheckoutStep = styled.div`
margin: 0 30px;
        padding: 22px 0;
        &.active{
            border-top: 1px solid rgb(251, 66, 38);
            color: rgb(251, 66, 38);
        }
        span{
            font-size: 18px;
            margin-right: 5px;
        }
${Responsive.md}{
    margin: 0 10px;
    display: none;
    &.active{
      display:block;
    }
    span{
        font-size: 14px;
        margin-right: 3px;
    }
}
`