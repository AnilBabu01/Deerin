
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Deerim from './components/Deerim';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Deerin" element={<Main />} />
          <Route path="/deerim" element={<Deerim />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
