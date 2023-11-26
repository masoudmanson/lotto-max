import { Typography } from "@mui/material";
import NumbersGrid from "../NumbersGrid";
import PickedGrid from "../PickedGrid";
import Draw from "../Draw";
import Result from "../Result";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const LottoMax = () => {
    const winning = useSelector((state: RootState) => state.selection.winning);
    
    return (
        <>
            <div id="header">
                <Typography
                    component="h4"
                    variant="h4"
                    sx={{
                        paddingBottom: 4,
                        color: "SteelBlue",
                        fontWeight: 600
                    }}
                >
                    Lotto Mim
                </Typography>
            </div>

            <div id="lotto-max-wrapper">
                <NumbersGrid count={50} />
                <div>
                    <PickedGrid />
                    <Draw />
                    {winning.length ? <Result /> : null}
                </div>
            </div>
        </>
    );
};

export default LottoMax;