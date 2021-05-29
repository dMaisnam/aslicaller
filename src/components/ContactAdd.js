import { useState, useEffect, useRef } from "react";

function ContactAdd() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const firstNameRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    return (
        <section id="add">
            <div className="add-header">
                <div className="title add-title">Add a new Contact</div>
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
                        <div className="btn btn-primary add-btn" onClick={() => handleFormSubmit}>Add Contact</div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactAdd;