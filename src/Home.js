import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('shyam');
    const [age, setAge] = useState(25);

    const handleClick  = (e) =>{
        setName('shyamjith')
        setAge(30)

    }

    return (
        <div className="home">
        <h2>Home Page</h2>
        <p>{ name } is { age } yesrs old</p> {/* change name when click happen */}
        <button onClick={ handleClick }>Handle click</button>
        </div>
      );
}
 
export default Home;