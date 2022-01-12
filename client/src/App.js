import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code={code}/> : <Login/>
}

export default App;
