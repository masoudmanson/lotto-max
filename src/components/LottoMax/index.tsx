import { Typography } from "@mui/material";
import NumbersGrid from "../NumbersGrid";
import PickedGrid from "../PickedGrid";
import Draw from "../Draw";
import Result from "../Result";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LottoMimWrapper } from "./style";

const LottoMax = () => {
    const winning = useSelector((state: RootState) => state.selection.winning);
    const selected = useSelector((state: RootState) => state.selection.selected);
    const total = useSelector((state: RootState) => state.selection.total);

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

            <LottoMimWrapper>
                <div>
                    <Typography variant="button" component="h6">
                        Pick {total} numbers: (<strong>{selected.length}</strong> / {total})
                    </Typography>
                    <NumbersGrid count={50} />
                </div>
                <div>
                    <PickedGrid />
                    <Draw />
                    {winning.length ? <Result /> : null}
                </div>
            </LottoMimWrapper>
        </>
    );
};

export default LottoMax;