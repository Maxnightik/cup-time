import { Main } from "./modules/Main";
import { Footer } from "./modules/Footer";
import { Heade } from "./modules/Heade";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Heade />

      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
