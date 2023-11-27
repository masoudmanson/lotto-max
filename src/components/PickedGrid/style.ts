import { styled } from "@mui/material";

interface StyledProps {
    active?: boolean;
}

export const StyledWrapper = styled("div")`
    ${(props: StyledProps) => {
        const { active } = props;

        return `
            opacity: ${active ? 1 : .4};
        `;
    }}
`;