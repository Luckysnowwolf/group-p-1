import react, { useState } from 'react'

type User = {
    name: string;
    age: number;
    
}
const[number,setNumber] = useState<number>(0);
const [text, setText] = useState<string> ("hello world")
const [isPrimary, setisPrimery] = useState<boolean>(true)

type Buttonprops = {
backgroundColor: string;
fontSize: number;
pillShape?: boolean;
}
const Button = ({backgroundColor,fontSize}: Buttonprops ) => {
    return (
        <button style={{backgroundColor,fontSize}}>click me</button>
    )

}



export default Button