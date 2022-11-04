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
const [name, setName] = useState('');
const [firstName, setFirstName] = useState('');
const [surName, setSurName] = useState('');
const [number, setNumber] = useState('');
const [editName, setEditName] = useState('');
const [editFirstName, setEditFirstName] = useState('');
const [editSurName, setEditSurName] = useState('');
const [editNumber, setEditNumber] = useState('');


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

const addContact = async (e) => {
  e.preventDefault();
  const id = contacts.length ? contacts[contacts.length - 1 ].id + 1 : 1;
  const newContact = {id, name, firstName, surName, number};
  try {
    const response = await api.post('/contacts', newContact);
    setContacts([...contacts, response.data]);
    setName('');
    setFirstName('');
    setSurName('');
    setNumber('');
    history('/');
  } catch (error) {
    console.log(error.message)
  }
}

const handleEdit = async (id) => {
  const editedContacts = {id, name: editName, firstName: editFirstName, surName: editSurName, number: editNumber};
  try {
    const response = await api.put(`/contacts/${id}`, editedContacts);
    setContacts(contacts.map(contact => contact.id === id ? { ...response.data} : contact));
    setEditName('');
    setEditFirstName('');
    setEditSurName('');
    setEditNumber('');
    history('/');
  } catch (error) {
    console.log(error.message);
  }
}

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
        <Route path="/new" element={<NewContact name={name} setName={setName} firstName={firstName} setFirstName={setFirstName} surName={surName} setSurName={setSurName} number={number} setNumber={setNumber} addContact={addContact} />} />
        <Route path="/contact/:id" element={<ContactShowcase contacts={contacts} handleDelete={handleDelete} />} />
        <Route path="/edit/:id" element={<EditContact handleEdit={handleEdit} contacts={contacts} editName={editName} setEditName={setEditName} editFirstName={editFirstName} setEditFirstName={setEditFirstName} editSurName={editSurName} setEditSurName={setEditSurName} editNumber={editNumber} setEditNumber={setEditNumber} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;