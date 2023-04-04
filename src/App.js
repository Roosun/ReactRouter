import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>Home</Link>{' '}
        <Link to='/about'>About</Link>{' '}
        <Link to='/contact'>Contact</Link>{' '}

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about/*' element={<About />} />
          <Route exact path='/contact/*' element={<Contact />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
