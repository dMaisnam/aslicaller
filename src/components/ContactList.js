import { Link } from "react-router-dom";
import { FiEdit, FiSearch } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

function ContactList() {
    return (
        <section id="list">
            <div className="list-header">
                <div className="title list-title">Your Contacts</div>
                <div className="input">
                    <input 
                        type="text" 
                        placeholder="Search contact"
                    />
                    <FiSearch className="search" />
                </div>
                <div>
                    <div className="btn btn-primary">
                        <Link to="/add-contact" className="link">Add Contact</Link>
                    </div>
                </div>
            </div>
            <div className="list-body">
                <div className="content">
                    {
                        data.map((item) => {
                            const { id, firstName, lastName, email } = item;
                            return (
                                <div key={id} className="content-card">
                                    <div className="contact">
                                        <div className="contact-avatar">{firstName.slice(0, 1)}</div>
                                        <div className="contact-detail">
                                            <p className="contact-name">{firstName + " " + lastName}</p>
                                            <p className="contact-email">{email}</p>
                                        </div>
                                    </div>
                                    <div className="icons">
                                        <FiEdit className="edit" />
                                        <AiOutlineDelete className="delete" />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

const data = [
    { id: 1, firstName: "Shaun", lastName: "Drover", email: "shaun@email.com" },
    { id: 1, firstName: "Leon", lastName: "Kennedy", email: "leonk@email.com" },
    { id: 1, firstName: "Mia", lastName: "Winters", email: "winters.mia@email.com" },
]

export default ContactList;