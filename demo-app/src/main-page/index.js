// import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import Carousel from './carousel';
function App() {
  return (
    <div className='container'>
      <Header appName="Bootstrap in 30" />
      <Carousel />
    </div>
  );
}

export default App;
