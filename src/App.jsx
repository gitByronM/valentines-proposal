import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProposalScreen from './components/ProposalScreen';
import { screens } from './config/proposalScreens';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProposalScreen {...screens.home} key={Date.now()}/>} />
        <Route path="/no1" element={<ProposalScreen {...screens.no1} key={Date.now()}/>} />
        <Route path="/no2" element={<ProposalScreen {...screens.no2} key={Date.now()}/>} />
        <Route path="/yes" element={<ProposalScreen {...screens.yes} key={Date.now()}/>} />
      </Routes>
    </Router>
  );
}

export default App;