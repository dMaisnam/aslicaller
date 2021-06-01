import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function ContactEdit() {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("Shaun");
    const [lastName, setLastName] = useState("Drover");
    const [email, setEmail] = useState("shaun@email.com");
    const firstNameRef = useRef(null);

    const handleEditForm = (e) => {
        e.preventDefault();
    };

    const handleDeleteForm = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    return (
        <section id="add">
            <div className="add-header">
                <div className="title add-title">Edit Contact {id}</div>
            </div>
            <div className="add-body">
                <div className="content">
                    <form className="form">
                        <div className="form-element">
                            <label for="firstName" className="form-label">First Name</label>
                            <input
                                ref={firstNameRef}
                                className="form-input"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-element">
                            <label for="firstName" className="form-label">Last Name</label>
                            <input
                                className="form-input"
                                type="text"
                                name="firstName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-element">
                            <label for="firstName" className="form-label">Email</label>
                            <input
                                className="form-input"
                                type="text"
                                name="firstName"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="btns">
                            <button className="btn btn-secondary" onClick={() => handleEditForm}>Edit Contact</button>
                            <button className="btn btn-danger" onClick={() => handleDeleteForm}>Delete Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactEdit;