
import Header from "./components/Header";
import FooterOfCustomer from "./components/FooterCustomer";


function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-32 text-center">
        <h1 className="text-4xl font-bold text-red-600 animate-fade-in-down">
          Welcome to MetroSites Laundry & Shoe Repair
        </h1>
        <p className="mt-4 text-red-600 animate-fade-in">
          Quality Service, Quick Turnaround, Happy Customers
        </p>
      </main>
 <FooterOfCustomer />
    </div>
  );
}

export default App;
