import './App.css';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <PreLoader />
    </div>
  );
}

export default App;
