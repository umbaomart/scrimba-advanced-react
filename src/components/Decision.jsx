import React from 'react';

export default function Decision({sayName}) {
    const [decision, setDecision] = React.useState(false);

    sayName(decision);

    function handleClick() {
        setDecision((prevDecision) => !prevDecision)
    }

    return (
        <div>
            <button onClick={handleClick}>Change mind</button>
            <h1>Am I going out tonight?? {decision ? 'Yes' : 'Nope...'} </h1>
        </div>
    )
}