import "./styles.css";

import { Counter } from "@components/Counter";
import { SomeOtherComponent } from "@components/SomeOtherComponent";
import { dateHelper } from "@utils/dateHelper";

import Car from "./assets/images/car.jpg";
import ReactIcon from "./assets/images/react.svg";

export const App = () => {
    return (
        <div>
            <h1>React TypeScript Webpack project for Modsen</h1>
            <p>JSX also works, let&apos;s insert current data: {new Date().toDateString()}</p>
            <img src={Car} alt="" width={800} height={500} />
            <img src={ReactIcon} alt="" width={300} height={200} />
            <Counter />
            <SomeOtherComponent />
            <p>{dateHelper.getDate()}</p>
        </div>
    );
};
