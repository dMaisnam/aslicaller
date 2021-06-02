import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContactList from "./components/ContactList";
import ContactAdd from "./components/ContactAdd";
import ContactEdit from "./components/ContactEdit";
import Error from "./components/Error";

function App() {
    const [open, setOpen] = useState(false);
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, contact]);
    }

    const editContactHandler = async (contact) => {
        const res = await axios.put(`http://localhost:3001/allContacts/${contact.id}`, contact);
        const data = res.data;
        const { id } = data;
        setContacts(contacts.map((contact) => {
            return contact.id === id ? {...res.data} : contact
        })) ;       
    }

    const removeContactHandler = async (id) => {
        await axios.delete(`http://localhost:3001/allContacts/${id}`);
        const newContacts = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContacts);
    }

    useEffect(async () => {
        const res = await axios.get("http://localhost:3001/allContacts");
        const data = await res.data;
        if (data) setContacts(data);
    }, []);

    return (
        <BrowserRouter>
            <Header open={open} setOpen={setOpen} />
            <Sidebar open={open} />
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={(props) => (
                        <ContactList 
                            {...props} 
                            contacts={contacts}
                            removeContact={removeContactHandler}
                        />
                    )}
                />
                <Route
                    path="/add-contact"
                    render={(props) => (
                        <ContactAdd
                            {...props}
                            addContactHandler={addContactHandler}
                        />
                    )}
                />
                <Route
                    path="/:id/edit"
                    render={(props) => (
                        <ContactEdit
                            {...props}
                            editContact={editContactHandler} 
                            // removeContact={removeContactHandler}
                        />
                    )}
                />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;