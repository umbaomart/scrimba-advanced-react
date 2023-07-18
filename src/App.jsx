import Decision from './components/Decision'

export default function App() {
    return (
        <div>
            <Decision>
                {(decision) => {
                    return (
                        <h1>Am I going out tonight?? {decision ? 'Yes' : 'Nope...'} </h1>
                    )
                }}
            </Decision>
        </div>
    )
}