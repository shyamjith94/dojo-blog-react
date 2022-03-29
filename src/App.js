import './App.css';

function App() {
  const title= "welcome to new blog";
  const likes = 50;
  const googleLink = "http://www.google.com";
  return (
    <div className="App">
     <div className="content">
       <h1>{ title }</h1>
       <p>likes {likes} times</p>
       <p>{ [1, 2 , 3, 4, 5] }</p>
       <p>{ 50 }</p>
       <p>{ Math.random()*10 }</p>
       <a href={ googleLink }> google site </a>
     </div>
    </div>
  );
}

export default App;
