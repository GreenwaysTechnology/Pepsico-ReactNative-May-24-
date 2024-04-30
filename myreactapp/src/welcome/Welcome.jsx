
// import { Hai } from '../hai/Hai'
// import { NewHai } from '../hai/NewHai'
import { Hai, NewHai } from '../hai'
import { Hello } from '../hello/Hello'
import { Greet } from '../greet/Greet'

const Welcome = () => {
    return <>
        <Hello />
        <Hai />
        <NewHai />
        <Greet />
    </>
}
export { Welcome }