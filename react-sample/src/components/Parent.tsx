import React, {useCallback, useState} from "react";

type ButtonProps = {
    onClick: () => void;
}

const DecrementButton = (props: ButtonProps) => {
    const {onClick} = props;
    console.log("DecrementButton rendered");
    return <button onClick={onClick}>Decrement</button>;
}

const IncrementButton = React.memo((props: ButtonProps) => {
    const {onClick} = props;
    console.log("IncrementButton rendered");
    return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = React.memo((props: ButtonProps) => {
    const {onClick} = props;
    console.log("DoubleButton rendered");
    return <button onClick={onClick}>Double</button>;
});

export const Parent = () => {
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCount(count + 1);
    }
    const double = useCallback(() => {
        setCount(c => c * 2);
    }
        , []);
    return (
        <div>
            <h1>Count: {count}</h1>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    );
}