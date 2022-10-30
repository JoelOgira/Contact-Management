import Feed from "./Feed";

const Home = ({ contacts }) => {
  return (
    <main className="Home container">
      {contacts.length ? 
        <Feed contacts={contacts} /> :
        <p className="text-center my-4 py-4 text-center text-danger">
          There are no contacts available
        </p>
      }
    </main>
  )
}

export default Home;