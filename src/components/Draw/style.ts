import { Button, styled, chipClasses } from "@mui/material";

interface StyledProps {
    active?: boolean;
}

export const StyledWrapper = styled("div")`
    ${(props: StyledProps) => {
        const { active } = props;

        return `
            opacity: ${active ? 1 : .4};
            p {
                color: #555;
            }
        `;
    }}
`;

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

export const StyledButton = styled(Button)`
    border-radius: 40px;
    margin: 10px;
    padding: 5px 8px 5px 15px;

    & .${chipClasses.root} {
        margin-left: 8px;
    }
`;