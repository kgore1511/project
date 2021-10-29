import './App.css';
import { Login } from './components/Login';
import {Upload} from './components/Upload'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Route path='/' component={Login} exact={true} />
    <Route path='/upload' component={Upload} />
    </BrowserRouter>
  );
}

export default App;
