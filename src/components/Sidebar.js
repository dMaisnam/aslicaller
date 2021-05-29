import { Link } from "react-router-dom";
import { RiContactsBook2Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";

function Sidebar({ open }) {
    return (
        <aside id="sidebar" className={`${open ? "" : "sidebar-open"}`}>
            <nav className="sidenav">
                <ul>
                    <li>
                        <Link className="link" to="/">
                            <div>
                                <RiContactsBook2Line className="navlink-icon" /> All Contacts
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/add-contact">
                            <div>
                                <AiOutlineUserAdd className="navlink-icon" /> Add New Contact
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;