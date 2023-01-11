import {Home} from './Pages/Home';
import {Catalog} from './Pages/Catalog';
import {Error} from './Pages/Error';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
