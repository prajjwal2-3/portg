import logo from './photo.jpg';
import './App.css';

function App() {
  return (
    <div className="box">
        
    <div className="photo"><img class="photob" src={logo} alt=""></img></div>
    <div className="text">Hi, I am prajjwal. 
        <span className="colored">A react developer</span>
    </div>
</div>
  );
}

export default App;
