import { Link } from "react-router-dom";
import Feed from "./Feed";
import PageFooter from "./PageFooter";

const Home = ({ contacts, fetchError, isLoading }) => {
  return (
    <main className="Home container">
      {isLoading && <p>Contacts are loading ...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && (contacts.length ? 
        <Feed contacts={contacts} /> :
        <p className="text-center my-4 py-4 text-center text-danger">
          There are no contacts available
        </p>)
      }
      <Link to="/new"><PageFooter className="addButton my-4" /></Link>
    </main>
  )
}

export default Home;