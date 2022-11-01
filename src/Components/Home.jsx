import { Link } from "react-router-dom";
import Feed from "./Feed";
import PageFooter from "./PageFooter";

const Home = ({ contacts }) => {
  return (
    <main className="Home container">
      {contacts.length ? 
        <Feed contacts={contacts} /> :
        <p className="text-center my-4 py-4 text-center text-danger">
          There are no contacts available
        </p>
      }
      <Link to="/new"><PageFooter /></Link>
    </main>
  )
}

export default Home;