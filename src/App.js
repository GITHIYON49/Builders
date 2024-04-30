import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UncontrolledExample from "./components/carousel/Carousel";
import Apartment from "./components/Apartment/Apartment";

function App() {
  return (
    <>
      <div>
        <UncontrolledExample />
        <Apartment />
      </div>
    </>
  );
}

export default App;
