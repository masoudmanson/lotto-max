import { useSelector } from "react-redux";
import NumberSlot from "../NumberSlot";
import { StyledContainer, StyledWrapper } from "./style";
import { RootState } from "../../store/store";
import { Typography } from "@mui/material";

const Draw: React.FC = () => {
    const winning = useSelector((state: RootState) => state.selection.winning);
    const total = useSelector((state: RootState) => state.selection.total);

    const result = [...winning];
    result.sort((a, b) => a - b);

    return (
        <StyledWrapper active={winning.length > 0}>
            <Typography variant="body1" component="h6">
                Winning Numbers:
            </Typography>

            <StyledContainer>
                {winning.length ? result.map((item: number) => (
                    <NumberSlot
                        key={item}
                        color="warning"
                        showcase
                    >{item}</NumberSlot>
                )) : [...Array(total)].map((item: number, index) => (
                    <NumberSlot
                        key={`empty-winning-${index}`}
                        empty
                        disabled
                    >{item}</NumberSlot>
                ))}
            </StyledContainer>
        </StyledWrapper>
    );
};

export default Draw;