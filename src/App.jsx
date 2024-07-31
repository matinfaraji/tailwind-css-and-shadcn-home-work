import Header from "./components/header";
import Navbar from "./components/Navbar";
import BodyComponents from "./components/bodys.jsx";
import Technologies from "./components/technologies.jsx";
import BlackCard from "./components/blackCard.jsx";


export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <BodyComponents />
      <Technologies />
      <BlackCard />
    </div>
  );
}
