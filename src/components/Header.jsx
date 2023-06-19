import { SlScreenSmartphone } from "react-icons/sl";
import { LuLogIn } from "react-icons/lu";

// Header CSS
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="logo-wrapper">
                <SlScreenSmartphone size={32} />
                <h1>SMARTSTORE</h1>
            </div>
            <div className="navbar-wrapper">
                <button>
                    <LuLogIn size={16} /> LOGIN
                </button>
            </div>
        </header>
    );
};

export default Header;
