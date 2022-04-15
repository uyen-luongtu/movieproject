import styled from 'styled-components'

export const ProfileContainer = styled.div`
    width: 37%;
    margin: 30px auto;
    button:focus {
    box-shadow: none;
    }
`
export const ProfileForm = styled.div`
    padding: 35px 70px;
    box-shadow: rgb(0 0 0 / 45%) 0px 0px 10px 0px;
    border-radius: 8px;
    img{
        margin: auto;
        margin-bottom: 20px;
        border-radius: 50%;
    }
    label {
    font-weight: 700;
    }
    input{
        &::placeholder{
            color: gray;
        }
        &:focus{
            box-shadow: none;
        }
        &:disabled{
            color: gray;
            background-color: white;
            border: none; 
        }
    }
`
export const EditButton = styled.button`
    width: 100%;
    background-color: rgb(54, 230, 94);
    border-color: rgb(54, 230, 94);
    margin-top: 20px;
    &:hover{
    background-color: rgb(64, 196, 95);
    }
`

export const ConfirmButton = styled.button`
    background-color: #198754;
    &:hover{
    background-color: #157347;
    }
`
export const CancelButton = styled.button`
    background-color: #dc3545;
&:hover{
    background-color: #bb2d3b;
}
`