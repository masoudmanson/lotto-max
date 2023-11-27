import { useSelector } from "react-redux";
import NumberSlot from "../NumberSlot";
import { RootState } from "../../store/store";
import { Chip, Typography } from "@mui/material";
import { calculateOdds } from "../../utils/oddsCalculator";
import { StyledContainer } from "../Draw/style";
import { StyledWrapper } from "./style";

const Result: React.FC = () => {
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

    const OddsPhrase = () => {
        if (winning.length) {
            return correct ? (
                <Typography variant="body2" component="p">
                    Odds of guessing <strong>{correct}</strong> of {total} ≈ <Chip size="small" variant="outlined" label={`1 in ${odds.toFixed(0)}`} /> or <Chip size="small" label={`${oddsPercentage.toFixed(6)}%`} />
                </Typography>
            ) : (
                <Typography variant="body2" component="p">
                    You guessed <strong>0</strong> of {total} numbers. Better luck next time!
                </Typography>
            );
        } else {
            return (
                <Typography variant="body2" component="p">
                    Waiting for draw!
                </Typography>
            );
        }
    };

    return (
        <StyledWrapper active={winning.length > 0}>
            <Typography variant="body1" component="h6">
                Result: <strong>{correct}</strong> of {total}
            </Typography>

            <StyledContainer>
                {winning.length ? selectedSorted.map((item: number) => (
                    <NumberSlot
                        key={item}
                        correct={winning.includes(item)}
                        disabled={!winning.includes(item)}
                    >{item}</NumberSlot>
                )) : [...Array(total)].map((item: number, index) => (
                    <NumberSlot
                        key={`empty-winning-${index}`}
                        empty
                        disabled
                    >{item}</NumberSlot>
                ))}
            </StyledContainer>

            <OddsPhrase />
        </StyledWrapper>
    );
};

export default Result;