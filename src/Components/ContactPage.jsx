import { Link } from "react-router-dom";

const ContactPage = ({contact}) => {
    return (
      <main className="ContactPage">
        <li className="contact-link my-4">
          <Link to={`/contact/${contact.id}`}>
            <p className="lead contact-p"><span className="contact-initial p-3" >{(contact.name).slice(0,1)}</span> {contact.name}</p>
          </Link>
        </li>
      </main>
    )
  }
  
  export default ContactPage;