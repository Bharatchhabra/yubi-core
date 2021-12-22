import "./App.scss";
import Header from "./components/layout/header/Header";
import HomePageComponents from "./pages/homepage/HomePageComponents";
import StepperForm from "./components/stepper/StepperForm";

function App() {
  return (
    <div className="App">
      {/* <HomePageComponents /> */}
      <Header />
      <StepperForm />
    </div>
  );
}

export default App;
