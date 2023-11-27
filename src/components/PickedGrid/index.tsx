import { useSelector } from "react-redux";
import NumberSlot from "../NumberSlot";
import { RootState } from "../../store/store";
import { Typography } from "@mui/material";
import { StyledContainer } from "../Draw/style";
import { StyledWrapper } from "./style";

const PickedGrid: React.FC = () => {
    const total = useSelector((state: RootState) => state.selection.total);
    const selected = useSelector((state: RootState) => state.selection.selected);

    const result = [...selected];
    result.sort((a, b) => a - b);
    
    return (
        <StyledWrapper active={result.length > 0}>
            <Typography variant="body1" component="h6">
                Your Play:
            </Typography>

            <StyledContainer size={total}>
                {result.map((item: number) => (
                    <NumberSlot 
                        key={item}
                        active
                        done
                    >{item}</NumberSlot>
                ))}
                {[...Array(total - result.length)].map((item: number, index) => (
                    <NumberSlot 
                        key={`empty-${index}`}
                        empty
                        disabled
                    >{item}</NumberSlot>
                ))}
            </StyledContainer>
        </StyledWrapper>
    );
};

export default PickedGrid;