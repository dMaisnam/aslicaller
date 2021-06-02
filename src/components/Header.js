import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function Header({ open, setOpen }) {
    return (
        <header id="header">
            <div className="menu" onClick={() => setOpen(!open)}>
                {
                    open
                    ? <MdClose />
                    : <AiOutlineMenu />
                }
            </div>
            <div className="logo">
                <Link to="/">aslicaller</Link>
            </div>
        </header>
    );
}

export default Header;