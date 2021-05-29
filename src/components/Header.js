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
                aslicaller
            </div>
        </header>
    );
}

export default Header;