import { styled } from "@mui/material";

export const StyledContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 8px;
    padding: 10px 0;
`;

export const StyledWrapper = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    
    @media screen and (max-width: 800px) {
        margin: 20px auto 30px;
    }
`;