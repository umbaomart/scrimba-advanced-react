import React from 'react';

export default function Decision({children}) {
    const [decision, setDecision] = React.useState(false);

    function handleClick() {
        setDecision((prevDecision) => !prevDecision)
    }

    return (
        <div>
            <button onClick={handleClick}>Change mind</button>
            {children(decision)}
        </div>
    )
}