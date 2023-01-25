import  {StaticBar}  from "./components/index"
import Location from "./pages/Location";
import Front from "./pages/Front";

function App() {
  return (
    <div style={{overflowX:"hidden"}}>   
       <StaticBar/>
       <Front/>
       <Location/>
    </div>
  );
}

export default App;
