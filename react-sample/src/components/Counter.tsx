import { useState } from "react";
import { useReducer } from "react";

type Action = { type: 'increment' } | { type: 'decrement' } | {type: 'double'} | { type: 'reset' };

const reducer = (currentCount: number, action: Action) => {
    switch (action.type) {
        case 'increment':
            return currentCount + 1;
        case 'decrement':
            return currentCount - 1;
        case 'double':
            return currentCount * 2;
        case 'reset':
            return 0;
        default:
            throw new Error();
    }
}

type CounterProps = {
    initialCount: number;
}

const Counter = (props: CounterProps) => {
    const {initialCount} = props;
    const [count, dispatch] = useReducer(reducer, initialCount);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'double' })}>x2</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    );
}
export default Counter;