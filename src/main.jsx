import React from 'react';

export default function Main() {
    const [text, setText] = React.useState('')
    const [list, setList] = React.useState([])
    const inputRef = React.useRef(null)

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setList([...list, text])
        setText('')
        inputRef.current.focus()
    }

    return (
        <>
            <h2>React Project Idea</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={text}
                    placeholder='Idea'
                    ref={inputRef}
                />
                <button>Submit</button>
            </form>

            <ol>
                {list.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
        </>
    )
}