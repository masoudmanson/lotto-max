import { Chip, Typography } from "@mui/material";
import NumbersGrid from "../NumbersGrid";
import PickedGrid from "../PickedGrid";
import Draw from "../Draw";
import Result from "../Result";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HeaderButtonWrapper, LottoMaxHeader, LottoMaxWrapper, StyledSubtitle, StyledButton } from "./style";
import { autoPick, draw, reset } from "../../store/selectionSlice";

const LottoMax = () => {
    const dispatch = useDispatch();

    const winning = useSelector((state: RootState) => state.selection.winning);
    const selected = useSelector((state: RootState) => state.selection.selected);
    const total = useSelector((state: RootState) => state.selection.total);
    const potSize = useSelector((state: RootState) => state.selection.potSize);

    return (
        <>
            <LottoMaxHeader>
                <div>
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={{
                            paddingBottom: 4,
                            color: "SteelBlue",
                            fontWeight: 600
                        }}
                    >
                        Lotto 649
                    </Typography>
                    <StyledSubtitle>Pick {total} numbers</StyledSubtitle>
                </div>
                <HeaderButtonWrapper>
                    {!selected.length ? (
                        <StyledButton
                            variant="contained"
                            disableElevation
                            disableRipple
                            onClick={handleAutoPick}
                        >
                            Auto Pick <Chip label="A" size="small" variant="filled" />
                        </StyledButton>
                    ) : null}

                    {selected.length && !winning.length ? (
                        <StyledButton
                            disableElevation
                            disableRipple
                            onClick={handleDraw}
                            variant="contained"
                            disabled={selected.length < total}
                        >
                            Draw  <Chip disabled={selected.length < total} label="D" size="small" color={selected.length < total ? "default" : "default"} variant={selected.length < total ? "outlined" : "filled"} />
                        </StyledButton>
                    ) : null}

                    {winning.length ? (
                        <StyledButton
                            disableElevation
                            disableRipple
                            onClick={handleReset}
                            variant="contained"
                        >
                            Start again <Chip label="S" size="small" />
                        </StyledButton>
                    ) : null}
                </HeaderButtonWrapper>
            </LottoMaxHeader>

            <LottoMaxWrapper>
                <div>
                    <Typography variant="body1" component="h6">
                        <strong>{selected.length}</strong> of {total} Selected!
                    </Typography>
                    <NumbersGrid count={potSize} />
                </div>
                <div>
                    <PickedGrid />
                    <Draw />
                    <Result />
                </div>
            </LottoMaxWrapper>
        </>
    );

    function handleDraw() {
        dispatch(draw());
    }

    function handleAutoPick() {
        dispatch(autoPick());
    }

    function handleReset() {
        dispatch(reset());
    }
};

export default LottoMax;