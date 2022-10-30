import { useParams } from "react-router-dom";
import { FaPhone, FaFacebookMessenger, FaBell, FaPhoneAlt, FaShareAlt, FaPenAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactShowcase = ({ contacts }) => {

    const { id } = useParams();
    const contact = contacts.find(contact => (contact.id).toString() === id);

    return (
    <main className="ContactShowcase container" >
        {contact && 
            <>                
                <div className="contactBanner text-center py-3">
                    <p><span className="bannerInitial p-3" >{(contact.name).slice(0,1)}</span></p>
                    <p className="bannerName">{contact.name}</p>
                </div>
                <p><span>{<FaPhoneAlt />}</span> {contact.number} <span>{<FaFacebookMessenger />}</span></p>
                <p><span>{<FaWhatsapp />}</span> Voice call {contact.number} </p>
                <p><span>{<FaWhatsapp />}</span> Video call {contact.number} </p>
                <p><span>{<FaWhatsapp />}</span> Message {contact.number} </p>
            </>
        }
        {!contact &&
            <>
                <div className="text-center">
                    <p className="my-4">Ooops! There was an error</p>
                    <Link to="/" className="text-center">Go back to Contacts</Link>
                </div>
            </>
        }
    </main>
    )
}

export default ContactShowcase;