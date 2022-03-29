const Home = () => {
    const handleClick  = (e) =>{
        console.log('hello')
        console.log(e)
    }

    const handleClickArg = (name, e) =>{
        console.log('hello ' + name)
        console.log(e.target)
    }
    return (
        <div className="home">
        <h2>Home Page</h2>
        <button onClick={ handleClick }>Handle click</button>
        <button onClick={ (e) => handleClickArg('shyam', e) }>Handle click Argument</button>
        </div>
      );
}
 
export default Home;