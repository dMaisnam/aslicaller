import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";

function ContactEdit(props) {
    const { editContact } = props;
    let history = useHistory();
    const { id } = useParams();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const firstNameRef = useRef(null);

    const handleEditForm = async (e) => {
        e.preventDefault();
        if (firstName === "" || lastName === "" || email === "") {
            alert("Field cannot be empty");
            return;
        }
        const res = await axios.put(`http://localhost:3001/allContacts/${id}`, {
            firstName,
            lastName,
            email
        })
        console.log(res.data);
        editContact(res.data);
        history.push("/");
    };

    useEffect(async () => {
        const res = await axios.get(`http://localhost:3001/allContacts/${id}`);
        const data = res.data;
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        firstNameRef.current.focus();
    }, []);

    return (
        <section id="add">
            <div className="add-header">
                <div className="title add-title">Edit Contact {`${firstName} ${lastName}`}</div>
            </div>
            <div className="add-body">
                <div className="content">
                    <form className="form" onSubmit={handleEditForm}>
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
                            <button className="btn btn-secondary add-btn">Edit Contact</button>
                            {/* <button className="btn btn-danger" onClick={() => handleDeleteForm(id)}>Delete Contact</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactEdit;