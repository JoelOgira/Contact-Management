import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import format from "date-fns/format";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "./api/contact"
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import EditContact from "./Components/EditContact";
import ContactPage from "./Components/ContactPage";
import Header from "./Components/Header";
import ContactShowcase from "./Components/ContactShowcase";



const App = () => {

const [contacts, setContacts] = useState([]);
const [searchContacts, setSearchContacts] = useState([]);
const [search, setSearch] = useState('');


const history = useNavigate();

useEffect(() => {
  const filteredContacts = contacts.filter(contact => ((contact.name).toLowerCase().includes(search.toLowerCase()))
    ||  ((contact.firstName).toLowerCase().includes(search.toLowerCase()))
    ||  ((contact.surName).toLowerCase().includes(search.toLowerCase()))
    ||  ((contact.number).toLowerCase().includes(search.toLowerCase()))
  )
  setSearchContacts(filteredContacts);
}, [contacts, search])

useEffect(() => {
  const fetchContacts = async () => {
    try {
      const response = await api.get('/contacts');
      setContacts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchContacts();
}, []);

  return (
    <div className="App container">
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home contacts={searchContacts} />} />
        <Route path="/contact/:id" element={<ContactShowcase contacts={contacts} />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;