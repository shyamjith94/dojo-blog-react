import './App.css';
import Navbar from './Nabar';
import Home from './Home';

function App() {
  const title= "welcome to new blog";
  const likes = 50;
  const googleLink = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
