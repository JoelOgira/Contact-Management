import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const NewContact = ({
  name, setName, firstName, setFirstName, surName, setSurName, number, setNumber, addContact
}) => {



  return (
    <form className="NewContact container" onSubmit={addContact}>
      <div className="addTop">
        <p><span><Link to="/">X</Link></span> Create New Contact <span><button type="submit"><FaBookOpen /></button></span></p>
      </div>
      <label htmlFor="Add Name">Name</label>
      <input 
        type="text" 
        required
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="Add First Name">First Name</label>
      <input 
        type="text" 
        className="form-control mb-3"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="Add Sur Name">Sur Name</label>
      <input 
        type="text" 
        className="form-control mb-3"
        value={surName}
        onChange={(e) => setSurName(e.target.value)}
      />
      <label htmlFor="Add Number">Number</label>
      <input 
        type="text" 
        required
        className="form-control mb-3"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </form>
  )
  }
  
  export default NewContact;