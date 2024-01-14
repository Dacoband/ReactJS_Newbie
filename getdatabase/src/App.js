import logo from './logo.svg';
import './App.css';
import GetAPI from './Components/getAPI';
import Example from './Components/example';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';
function App() {
  return (
    <div className="App">
      <Example3/>
      <h1>- - - - - - -</h1>
      <Example2/>
      <h1>- - - - - - -</h1>
      <Example/>
      <h1>- - - - - - -</h1>
      <GetAPI/>
    </div>
  );
}

export default App;
