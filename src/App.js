import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContactList from "./components/ContactList";
import ContactAdd from "./components/ContactAdd";

function App() {
    const [open, setOpen] = useState(false);

    return (
        <BrowserRouter>
            <Header open={open} setOpen={setOpen} />
            <Sidebar open={open} />
            <Switch>
                <Route exact path="/">
                    <ContactList />
                </Route>
                <Route path="/add-contact">
                    <ContactAdd />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;