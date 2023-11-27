import { Button, styled, chipClasses } from "@mui/material";

const doNotForwardProps = ["active"];

interface StyledProps {
    active?: boolean;
    size?: number;
}

export const StyledWrapper = styled("div", {
    shouldForwardProp: (prop: string) => !doNotForwardProps.includes(prop)
})`
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

export const StyledContainer = styled("div", {
    shouldForwardProp: (prop: string) => !doNotForwardProps.includes(prop)
})`
    ${(props: StyledProps) => {
        const { size } = props;

        return `
            display: grid;
            grid-template-columns: repeat(${size}, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-column-gap: 8px;
            padding: 10px 0 38px;
        
            @media screen and (max-width: 800px) {
                padding: 10px 0 25px;
            }
        `;
    }}
`;

export const StyledButton = styled(Button)`
    border-radius: 40px;
    margin: 10px;
    padding: 5px 8px 5px 15px;

    & .${chipClasses.root} {
        margin-left: 8px;
    }
`;