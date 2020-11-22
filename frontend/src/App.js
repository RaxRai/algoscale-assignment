import './App.css';
import Contact from "./components/contact"
import Logout from './components/login/logout';

function App(props) {
  console.log(props.history);
  const goToAnalytics =()=>{
    props.history.push("./analytics");
  }

  return (
      <div className="" className="container">
        <div className="navbar">
          <Logout  {...props}/>
          <div onClick={goToAnalytics} className="btn" style={{ display : "flex" , height: 50, width: 100, justifyContent: "center" , alignItems: "center" , border: "1px solid black"}}> Analytics </div>
        </div>

        <Contact {...props}/>

      </div>
  );
}

export default App;
