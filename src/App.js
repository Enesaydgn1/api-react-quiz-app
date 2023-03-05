import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Intorduce from './pages/intorduce/intorduce';
import Quiz from './pages/quiz/Quiz';
import './index.scss'
function App() {
  return (
    
    <div className="">

          <Router>
            <Routes>
              <Route path='/' element={<Intorduce/>}/>
              <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
