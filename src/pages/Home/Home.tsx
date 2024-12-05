import LastUpdated from "@components/LastUpdated";
import WelcomeScreen from "@components/WelcomeScreen";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { decrement, increment, incrementByAmount } from "@store/reducers/homePageReducer";

function A() {
    const count = useAppSelector((state) => state.homePage.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Прибавить
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Отнять
                </button>
                <br />
                <button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
            </div>
        </div>
    );
}

export const Home = () => (
    <>
        <WelcomeScreen />
        <LastUpdated />
        <A />
    </>
);
