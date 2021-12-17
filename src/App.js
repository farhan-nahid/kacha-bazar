import './App.css';
import LoadingSpinner from './Pages/SharedComponents/LoadingSpinner/LoadingSpinner';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className='container'>
      <ScrollToTop />
      <PreLoader />
      <LoadingSpinner />
    </div>
  );
}

export default App;
