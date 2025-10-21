
import Header from "./components/Header";
import FooterOfCustomer from "./components/FooterCustomer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";


function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-32 text-center">
        <Home />
      </main>
 <FooterOfCustomer />
    </div>
  );
}

export default App;
