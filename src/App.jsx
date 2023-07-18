import Decision from './components/Decision'

export default function App() {
    return (
        <div>
            <Decision
                render={(decision) => {
                    return (
                        <h1>Am I going out tonight?? {decision ? 'Yes' : 'Nope...'} </h1>
                    )
                }}
            />
        </div>
    )
}