import * as React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "@mui/material";

export interface NumberSlotProps extends ButtonProps {
    active?: boolean;
    done?: boolean;
    showcase?: boolean;
    empty?: boolean;
    correct?:boolean;
}

const NumberSlot: React.FC<NumberSlotProps> = (props: NumberSlotProps) => {
    const {
        active = false,
        correct = false,
        done = false,
        empty = false,
        children
    } = props;

    return (
        <StyledButton
            active={active}
            correct={correct}
            done={done}
            disableRipple
            empty={empty}
            variant="outlined"
            {...props}
        >
            {children}
        </StyledButton>
    );
}

export default NumberSlot;