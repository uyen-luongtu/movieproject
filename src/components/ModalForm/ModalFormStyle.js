import styled from "styled-components";

export const ModalForm = styled.div`
.modal-header {
    border-bottom: none;
    .modal-title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    flex-grow: 1;
    button:focus, input:focus {
    box-shadow: none;
}
}
}
.modal-body {
    padding: 0 40px;
}
.modal-footer {
    border-top: none;
}
`