import { useState } from "react";

import LastUpdated from "@components/LastUpdated";
import WelcomeScreen from "@components/WelcomeScreen";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useAddGoodMutation, useGetGoodsQuery } from "@store/api/currencyAPI";
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

function Goods() {
    const [count, setCount] = useState("");
    const [counter, setCounter] = useState(0);

    const { data, error } = useGetGoodsQuery({ count });

    const [addGood, { isLoading }] = useAddGoodMutation();

    const handleAddGood = async () => {
        const date = new Date();
        addGood({ id: date.getMilliseconds, title: date.getFullYear, views: date.getHours }).unwrap();
        setCounter(10);
    };

    return (
        <div>
            <div>
                <select name="" id="" onChange={(e) => setCount(e.target.value)}>
                    <option value="">all</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <p>count: {counter}</p>
                <button onClick={() => setCounter(counter)}>Increment</button>

                {isLoading && <p>Add loading</p>}
                <button onClick={handleAddGood}>Add</button>
            </div>
            <h1>Goods:</h1>
            {JSON.stringify(data)}
            {error && <p>Error: {error.toString()}</p>}
        </div>
    );
}

export const Home = () => (
    <>
        <WelcomeScreen />
        <LastUpdated />
        <A />
        <Goods />
    </>
);
