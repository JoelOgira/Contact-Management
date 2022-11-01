import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import format from "date-fns/format";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "./api/contact"
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import EditContact from "./Components/EditContact";
import Header from "./Components/Header";
import ContactShowcase from "./Components/ContactShowcase";
import NewContact from "./Components/NewContact";



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

const handleDelete = async (id) => {
  try {
    await api.delete(`/contacts/${id}`);
    setContacts(contacts.filter(contact => contact.id !== id));
    history('/');
  } catch (error) {
    console.log(error.message);
  }
}

  return (
    <div className="App container">
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home contacts={searchContacts} />} />
        <Route path="/new" element={<NewContact />} />
        <Route path="/contact/:id" element={<ContactShowcase contacts={contacts} handleDelete={handleDelete} />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;