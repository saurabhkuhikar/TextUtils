import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextConv from './Components/TextConv.js';

function App() {
  const webTitle = "TextUtils";
  return (
    <>
    <Navbar title={webTitle} aboutTextUtils = "About"/>
    <div className="container">
      <TextConv />
      {/* <About title={webTitle} /> */}
    </div>
    </>

  );
}

export default App;
