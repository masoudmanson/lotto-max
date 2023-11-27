import { styled } from "@mui/material";

export const LottoMimWrapper = styled("div")`
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 15px 30px 30px;
    background-color: white;
    border-radius: 0 0 10px 10px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 800px) {
        display: block;
    }
`;