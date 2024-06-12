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
