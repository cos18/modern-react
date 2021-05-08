import React, {useState, useCallback} from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncreaseClicked = useCallback(() => {
    setNumber(prev => prev + 1);
  }, []);

  const onDecreaseClicked = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncreaseClicked}>+1</button>
      <button onClick={onDecreaseClicked}>-1</button>
    </div>
  );
}

export default Counter;
