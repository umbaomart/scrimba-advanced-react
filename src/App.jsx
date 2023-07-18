import Decision from './components/Decision'

export default function App() {
    return (
        <div>
            <Decision
                sayName={(bool) => {
                    console.log(bool ? "I AM going out" : "I am NOT going out");
                }}
            />
        </div>
    )
}