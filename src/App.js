import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Details from './components/Details';
import data from './data'

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Link to='/team'>Team Page</Link>
      <Link to='/'>Home Page</Link>
      <div>
        {data.map((person, index) => {
          return <Link to={`/details/${index}`}>{person.name}</Link>
        })}
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team/*' element={<Team />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
