import "./styles.css";
import Car from "./assets/images/car.jpg";
import ReactIcon from "./assets/images/react.svg";
import { Counter } from "./Counter";

export const App = () => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.CUSTOM);

    return (
        <div>
            <h1>React TypeScript Webpack project for Modsen</h1>
            <p>JSX also works, let&apos;s insert current data: {new Date().toDateString()}</p>
            <img src={Car} alt="" width={800} height={500} />
            <img src={ReactIcon} alt="" width={300} height={200} />
            <Counter />
        </div>
    );
};
