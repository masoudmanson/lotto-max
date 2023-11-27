import { Button, chipClasses, styled } from "@mui/material";

export const LottoMaxWrapper = styled("div")`
    display: flex;
    padding: 20px 40px 40px;
    background-color: white;
    border-radius: 0 0 10px 10px;
    position: relative;
    z-index: 1;

    h6 {
        color: #555;
    }

    @media screen and (max-width: 800px) {
        display: block;
    }
`;

export const LottoMaxHeader = styled("div")`
    background-color: rgba(10, 238, 10, 0.62);
    border-radius: 10px 10px 0 0;
    padding: 20px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;

    &::after {
        font-family: "Inter";
        content: "649";
        opacity: 0.1;
        position: absolute;
        right: -30px;
        top: -170px;
        font-size: 300px;
        font-weight: 700;
        transform: rotate(-15deg);
    }

    & h4 {
        color: white;
        padding-bottom: 0;
    }

    @media screen and (max-width: 400px) {
        border-radius: 0;
    }
`;

export const StyledSubtitle = styled("span")`
    color: white;
    font-size: 13px;
`;

export const HeaderButtonWrapper = styled("div")`
    z-index: 2;
`;

export const StyledButton = styled(Button)`
    border-radius: 40px;
    margin: 10px;
    padding: 5px 8px 5px 15px;
    background-color: white;
    color: #444;

    &:hover {
        background-color: white;
        color: #000;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    }

    & .${chipClasses.root} {
        margin-left: 8px;
    }
`;