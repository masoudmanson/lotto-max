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

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(8, 1fr);
        padding-right: 0;
        padding-bottom: 30px;
        margin: 0 auto 30px;
        border-right: none;   
        border-bottom: solid 1px #eee;
    }
`;