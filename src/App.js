import "./App.css";
import Header from "./components/header/header";
import Title from "./components/BalancingCryptoTitle/Title";
import Stats from "./components/stats/stats";
import MiddleCryptMarket from "./components/middle-crypt-market/MiddleCryptMarket";
import Ourpartners from "./components/Ourpartners/Ourpartners";
import Jointeam from "./components/jointeam/Jointeam";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <header className="app_header_container">
                <Header />
                <div className="app_header_container_title">
                    <Title />
                </div>
            </header>

            <Stats />
            <MiddleCryptMarket />
            <Ourpartners />
            <Jointeam />
            <Footer />
        </div>
    );
}

export default App;
