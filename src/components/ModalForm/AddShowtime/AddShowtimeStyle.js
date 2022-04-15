import styled from "styled-components";

export const AddShowtimeForm = styled.div`
select, #ngayChieuGioChieu{
    outline: auto;
    padding: 5px;
}

select, option{
    width: 300px;
}
select:invalid{
    color: gray;
}

select:invalid option:not(:first-child) {
    color: black;
}
input:focus, select:focus{
    box-shadow: none!important;
}
`