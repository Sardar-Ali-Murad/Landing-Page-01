import  {StaticBar,Links}  from "./components/index"
import Location from "./pages/Location";
import Front from "./pages/Front";

function App() {
  return (
    <div style={{overflowX:"hidden"}}>   
       <StaticBar/>
       <Front/>
       <Links/>
       <Location/>
    </div>
  );
}

export default App;
