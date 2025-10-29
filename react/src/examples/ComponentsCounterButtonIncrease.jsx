export default function ComponentsCounterButtonIncrease({ counter, setCounter }) {
    return (
        <button
            onClick={() => {
                setCounter(counter + 1);
            }}
        >
            +
        </button>
    );
}
