import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard";
import axios from 'axios';


function App() {
  axios.defaults.baseURL = "http://localhost:8080";
 return (
      <Dashboard />
 )
}

export default App;
