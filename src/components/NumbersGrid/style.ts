import { styled } from "@mui/material";

export const StyledContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    padding-right: 30px;
    margin-right: 30px;
    border-right: solid 1px #eee;
`;