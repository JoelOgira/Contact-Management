import ContactPage from "./ContactPage";

const Feed = ({ contacts }) => {
    return (
        <main className="Feed">
            <ul>
            {contacts.map(contact => <ContactPage contact={contact} key={contact.id} />)}
            </ul>
        </main>
    )
}

export default Feed;