import Search from "./Search";

const Header = ({search, setSearch}) => {
    return (
      <main className="Header my-3">
        <Search search={search} setSearch={setSearch} />
      </main>
    )
  }
  
  export default Header;