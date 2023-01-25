import  {Headers,Search,Check}  from "./components/index"
import Location from "./pages/Location";
function App() {
  return (
    <div style={{overflowX:"hidden"}}>
       <Headers/>
       <Search/>
       <Check/>
       <Location/>
    </div>
  );
}

export default App;
