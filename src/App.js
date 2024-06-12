//https://www.youtube.com/watch?v=I2UBjN5ER4s&t=24s
//16:36
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar>
          <Route path='/' exact />
      </Navbar>
    </Router>
    </>
  );
}

export default App;
