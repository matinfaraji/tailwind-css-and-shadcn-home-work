import Header from "./components/header";
import Navbar from "./components/Navbar";
import BodyComponents from "./components/bodys.jsx";
import Technologies from "./components/technologies.jsx";


export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <BodyComponents />
      <Technologies />
    </div>
  );
}
