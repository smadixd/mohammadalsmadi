import { LITLY_PROJECT_ID } from "./config";
import { Lit } from "litlyx";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

Lit.init(LITLY_PROJECT_ID);

const App = () => {
  return (
    <div className="flex flex-col selection:bg-darkBlue selection:text-offWhit eoverflow-x-hidden">
      <Navbar />
      <div className="xl:w-2/3 sm:w-[90%] xs:w-[100%] mx-auto px-2 md:px-0 flex flex-col justify-center items-center">
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
