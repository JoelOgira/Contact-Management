import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const EditContact = ({
  handleEdit, contacts, editName, setEditName, editFirstName, setEditFirstName, editSurName, setEditSurName, editNumber, setEditNumber
}) => {

  const { id } = useParams();
  const contact = contacts.find(contact => (contact.id).toString() === id);

  useEffect(() => {
    if(contact) {
      setEditName(contact.name);
      setEditFirstName(contact.firstName);
      setEditSurName(contact.surName);
      setEditNumber(contact.number);
    }
  }, [contact, setEditName, setEditFirstName, setEditSurName, setEditNumber])

    return (
      <main className="EditContact ">
        {editName &&
          <>
            <form className="NewContact container" onSubmit={e => e.preventDefault()}>
              <div className="addTop">
                <p><span><Link to="/">X</Link></span> Edit Contact <span><button type="submit" onClick={() => handleEdit(contact.id)}><FaBookOpen /></button></span></p>
              </div>
              <label htmlFor="Add Name">Name</label>
              <input 
                type="text" 
                required
                className="form-control mb-3"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <label htmlFor="Add First Name">First Name</label>
              <input 
                type="text" 
                className="form-control mb-3"
                value={editFirstName}
                onChange={(e) => setEditFirstName(e.target.value)}
              />
              <label htmlFor="Add Sur Name">Sur Name</label>
              <input 
                type="text" 
                className="form-control mb-3"
                value={editSurName}
                onChange={(e) => setEditSurName(e.target.value)}
              />
              <label htmlFor="Add Number">Number</label>
              <input 
                type="text" 
                required
                className="form-control mb-3"
                value={editNumber}
                onChange={(e) => setEditNumber(e.target.value)}
              />
            </form>
          </>
        }
        {!editName &&
          <>
            <div className="card">
              <h2 className="card-title">Ooops! There was an Error</h2>
              <Link to="/"><p className="card-text">Go back to Contacts</p></Link>
            </div>
          </>
        }
      </main>
    )
  }
  
  export default EditContact;