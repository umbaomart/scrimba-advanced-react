import React from 'react';

export default function Decision({render}) {
    const [decision, setDecision] = React.useState(false);

    function handleClick() {
        setDecision((prevDecision) => !prevDecision)
    }

    return (
        <div>
            <button onClick={handleClick}>Change mind</button>
            {render(decision)}
        </div>
    )
}