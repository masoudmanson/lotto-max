import { useSelector, useDispatch } from 'react-redux';
import NumberSlot from "../NumberSlot";
import { StyledContainer } from "./style";
import { RootState } from "../../store/store";
import { deselect, select } from "../../store/selectionSlice";

interface NumbersGridProps {
    count: number;
}

const NumbersGrid: React.FC<NumbersGridProps> = (props: NumbersGridProps) => {
    const { count } = props;

    const total = useSelector((state: RootState) => state.selection.total);
    const selected = useSelector((state: RootState) => state.selection.selected);
    const winning = useSelector((state: RootState) => state.selection.winning);
    const dispatch = useDispatch();

    const StartingArray = [...Array(count).keys()].map(num => num + 1);
    const isDone = selected.length === total;

    const handleClick = (number: number) => {
        if (winning.length) return;
        if (selected.length < total && !selected.includes(number)) {
            dispatch(select(number));
        } else if (selected.includes(number)) {
            dispatch(deselect(number));
        }
    };

    return (
        <StyledContainer>
            {StartingArray.map((item: number) => (
                <NumberSlot
                    key={item}
                    onClick={() => handleClick(item)}
                    active={selected.includes(item)}
                    done={isDone}
                >{item}</NumberSlot>
            ))}
        </StyledContainer>
    );
};

export default NumbersGrid;