import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import data from "./data";

function App() {
  return (
    <div>
      <Header />
      <HotelInfo data={data} />
      <Footer />
    </div>
  );
}

export default App;
