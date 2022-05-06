import { Route, Routes } from 'react-router-dom';
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home';
import { PeopleProvider } from '../state/PeopleContext';

function App() {
  return (
    <div className="App">
      <PeopleProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </PeopleProvider>
    </div>
  );
}

export default App;
