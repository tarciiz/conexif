import LoadingConex from "./pages/LoadingConex/LoadingConex";
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Question from './pages/Question/Question';
import NotFound from './pages/NotFound/NotFound';
//import Questions from 'pages/Questions/Questions';
import { BrowserRouter as Router,Routes, Route, HashRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <HashRouter>
        <Routes >
          <Route exact path={'/'} element={< HomePage />}></Route>
          <Route exact path={'/questions'} element={< Question />}></Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
