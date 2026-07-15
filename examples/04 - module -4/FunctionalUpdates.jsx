import React , {useState} from 'react';

function counterFunction(){
    const [count,setCount] = useState(0);
    

    const increamentThreeTimes = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);

    };

    return (
    <div>
    <h3>Counter with Functional Updates</h3>
    <p>Current Count: {count}</p>
    <button onClick={incrementThreeTimes}>Increment by 3</button>
    </div>
);
}


/* Each call to setCount receives the prevCount.
The first call uses the initial prevCount (0) and returns 1.
The second call receives the updated prevCount (which is now 1) and returns 2.
The third call receives the updated prevCount (which is now 2) and returns 3. */


