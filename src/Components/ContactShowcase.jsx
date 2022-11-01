import { useParams } from "react-router-dom";
import { FaPhone, FaFacebookMessenger, FaBell, FaPhoneAlt, FaShareAlt, FaPenAlt, FaWhatsapp, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactShowcase = ({ contacts, handleDelete }) => {

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
                <p className="my-3"><span className="phoneIcon">{<FaPhoneAlt />}</span> {contact.number} <span>{<FaFacebookMessenger className="messengerIcon" />}</span></p>
                <p><span>{<FaWhatsapp className="whatsappIcon" />}</span> Voice call {contact.number} </p>
                <p><span>{<FaWhatsapp className="whatsappIcon" />}</span> Video call {contact.number} </p>
                <p><span>{<FaWhatsapp className="whatsappIcon" />}</span> Message {contact.number} </p>
                <p className="my-3 lead">Groups and Ringtone</p>
                <p><span>{<FaBell className="bellIcon" />}</span> Default ringtone</p>
                <button className="btn btn-outline-danger" onClick={() => handleDelete(contact.id)}><FaTrashAlt /></button>
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