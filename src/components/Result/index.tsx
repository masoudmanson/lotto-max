import { useDispatch, useSelector } from "react-redux";
import NumberSlot from "../NumberSlot";
import { RootState } from "../../store/store";
import { Chip, Typography } from "@mui/material";
import { reset } from "../../store/selectionSlice";
import { StyledButton } from "../Draw/style";
import { StyledWrapper, StyledContainer } from "./style";
import { calculateOdds } from "../../utils/oddsCalculator";

const Result: React.FC = () => {
    const dispatch = useDispatch();

    let correct = 0;

    const total = useSelector((state: RootState) => state.selection.total);
    const selected = useSelector((state: RootState) => state.selection.selected);
    const winning = useSelector((state: RootState) => state.selection.winning);

    for (let i = 0; i < selected.length; i++) {
        if (winning.includes(selected[i])) correct++;
    }

    const odds = calculateOdds(correct);
    const oddsPercentage = (100 / odds);

    const selectedSorted = [...selected];
    selectedSorted.sort((a, b) => a - b);

    return (
        <>
            <Typography variant="h6" component="h6">
                Result: <strong>{correct}</strong> / {total}
            </Typography>

            <StyledContainer>
                {selectedSorted.map((item: number) => (
                    <NumberSlot
                        key={item}
                        correct={winning.includes(item)}
                        disabled={!winning.includes(item)}
                    >{item}</NumberSlot>
                ))}
            </StyledContainer>

            <StyledWrapper>
                <StyledButton
                    color="info"
                    disableElevation
                    disableRipple
                    onClick={handleReset}
                    variant="outlined"
                >
                    Start again <Chip label="S" size="small" />
                </StyledButton>
            </StyledWrapper>

            <Typography variant="body2" component="p">
                Odds of guessing <strong>{correct}</strong> / {total} ≈ <Chip size="small" variant="outlined" label={`1 : ${odds.toFixed(0)}`} /> or <Chip size="small" label={`${oddsPercentage.toFixed(6)}%`} />
            </Typography>
        </>
    );

    function handleReset() {
        dispatch(reset());
    }
};

export default Result;