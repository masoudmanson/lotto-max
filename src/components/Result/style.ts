import { styled } from "@mui/material";

export const StyledWrapper = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh;
    
    @media screen and (max-width: 800px) {
        height: 5vh;
        margin: 0 auto 30px;
    }
`;
