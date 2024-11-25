import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
