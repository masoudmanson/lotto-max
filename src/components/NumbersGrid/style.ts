import { styled } from "@mui/material";
import { NumbersGridProps } from ".";

const doNotForwardProps = ["count"];

export const StyledContainer = styled("div", {
    shouldForwardProp: (prop: string) => !doNotForwardProps.includes(prop)
})`
    ${(props: NumbersGridProps) => {
        const { count } = props;
        console.log(props);
        
        const GRID_SIZE = Math.ceil(Math.sqrt(count));
        return `
            display: grid;
            grid-template-columns: repeat(${GRID_SIZE}, 1fr);
            grid-template-rows: repeat(${GRID_SIZE}, 1fr);
            grid-column-gap: 8px;
            grid-row-gap: 8px;
            padding-right: 30px;
            padding-top: 10px;
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
    }}
`;