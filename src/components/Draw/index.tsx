import { useDispatch, useSelector } from "react-redux";
import NumberSlot from "../NumberSlot";
import { StyledButton, StyledContainer, StyledWrapper } from "./style";
import { RootState } from "../../store/store";
import { Chip, Typography } from "@mui/material";
import { draw, autoPick } from "../../store/selectionSlice";

const Draw: React.FC = () => {
    const dispatch = useDispatch();
    const winning = useSelector((state: RootState) => state.selection.winning);
    const selected = useSelector((state: RootState) => state.selection.selected);
    const total = useSelector((state: RootState) => state.selection.total);

    const result = [...winning];
    result.sort((a, b) => a - b);

    return winning.length ? (
        <>
            <Typography variant="button" component="h6">
                Winning Numbers:
            </Typography>

            <StyledContainer>
                {result.map((item: number) => (
                    <NumberSlot
                        key={item}
                        color="warning"
                        showcase
                    >{item}</NumberSlot>
                ))}
            </StyledContainer>
        </>
    ) : (
        <StyledWrapper>
            <StyledButton
                color="info"
                disableElevation
                disableRipple
                onClick={handleAutoPick}
                variant="outlined"
                disabled={selected.length > 0}
            >
                Auto Pick <Chip label="A" size="small" disabled={selected.length > 0}  variant={selected.length > 0 ? "outlined" : "filled"}  />
            </StyledButton>

            <StyledButton
                color="success"
                disableElevation
                disableRipple
                onClick={handleDraw}
                variant="outlined"
                disabled={selected.length < total}
            >
                Continue  <Chip disabled={selected.length < total} label="D" size="small" color={selected.length < total ? "default" : "default"} variant={selected.length < total ? "outlined" : "filled"} />
            </StyledButton>
        </StyledWrapper>
    );

    function handleDraw() {
        dispatch(draw());
    }

    function handleAutoPick() {
        dispatch(autoPick());
    }
};

export default Draw;