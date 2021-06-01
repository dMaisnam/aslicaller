import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiSearch } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import Loading from "./Loading";
import axios from "axios";

function ContactList({ contacts, removeContact }) {
    const [loading, setLoading] = useState(false);

    const removeContactHandler = async (id) => {
        removeContact(id);
    }

    useEffect(() => {
        setLoading(true);
        contacts && setLoading(false);
    }, []);

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
                        loading
                        ? <Loading title="contacts" />
                        : contacts.map((item) => {
                            const { id, firstName, lastName, email } = item;
                            // const slug = `${firstName.toLocaleLowerCase()}-${lastName.toLocaleLowerCase()}`;
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
                                        <Link to={`/${id}/edit`}>
                                            <FiEdit className="edit" />
                                        </Link>
                                        <AiOutlineDelete 
                                            className="delete"
                                            onClick={() => removeContactHandler(id)}
                                        />
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

export default ContactList;