import { Button, styled, chipClasses } from "@mui/material";

export const StyledContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 8px;
    padding: 10px 0 50px;

    @media screen and (max-width: 800px) {
        padding: 15px 0 45px;
    }
`;

export const StyledWrapper = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;

    @media screen and (max-width: 800px) {
        height: 5vh;
        margin: 0 auto 30px;
    }
`;

export const StyledButton = styled(Button)`
    border-radius: 40px;
    margin: 10px;
    padding: 5px 8px 5px 15px;

    & .${chipClasses.root} {
        margin-left: 8px;
    }
`;