import { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/layout/Navbar'
import Charts from './pages/Charts';
// Context API
import CapeContext from './context/cape/CapeContext';
import './App.css';

function App() {
  const capeContext = useContext(CapeContext)
  const { getAllCapes, capes, loading } = capeContext
  useEffect(() => {
    getAllCapes()
    
    // eslint-disable-next-line
  }, [])
  

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/charts' element={<Charts capes={capes} loading={loading} />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
