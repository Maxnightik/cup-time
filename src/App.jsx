import { Main } from "./modules/Main";
import { Footer } from "./modules/Footer";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./modules/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
