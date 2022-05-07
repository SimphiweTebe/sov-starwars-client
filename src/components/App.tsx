import { Route, Routes } from 'react-router-dom';
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home';
import { PeopleProvider } from '../state/PeopleContext';
import Header from './Nav/Nav';

function App() {
  return (
    <div className="container">
      <PeopleProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </PeopleProvider>
    </div>
  );
}

export default App;
