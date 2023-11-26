import { useDispatch, useSelector } from "react-redux";
import NumberSlot from "../NumberSlot";
import { StyledButton, StyledContainer, StyledWrapper } from "./style";
import { RootState } from "../../store/store";
import { Typography } from "@mui/material";
import { draw } from "../../store/selectionSlice";

const Draw: React.FC = () => {
    const dispatch = useDispatch();
    const winning = useSelector((state: RootState) => state.selection.winning);
    const selected = useSelector((state: RootState) => state.selection.selected);
    const total = useSelector((state: RootState) => state.selection.total);

    const result = [...winning];
    result.sort((a, b) => a - b);

    return winning.length ? (
        <>
            <Typography variant="h6" component="h6">
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
                onClick={handleDraw}
                variant="contained"
                disabled={selected.length < total}
            >
                Draw Numbers
            </StyledButton>
        </StyledWrapper>
    );

    function handleDraw() {
        dispatch(draw());
    }
};

export default Draw;