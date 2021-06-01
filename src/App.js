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

    const editContactHandler = (id) => {
        const contact = contacts.filter((contact) => {
            return contact.id === id;
        });
        return contact;
    }

    const removeContactHandler = (id) => {
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
                <Route exact path="/">
                    <ContactList 
                        contacts={contacts} 
                        removeContact={removeContactHandler}
                    />
                </Route>
                <Route path="/add-contact">
                    <ContactAdd addContactHandler={addContactHandler} />
                </Route>
                <Route path="/:id/edit">
                    <ContactEdit editContact={editContactHandler} />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;