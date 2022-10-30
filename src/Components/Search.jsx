// import { FaPersonBooth } from "react-icons/fa";

const Search = ({search, setSearch}) => {
    return (
        <form className="Search container" onSubmit={e => e.preventDefault()}>
            <label htmlFor="Search Contact" className="search-input-label" >Search Contact</label>
            <input 
                type="text"
                className="form-control"
                placeholder={`Search numbers & names`}  
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </form>
    )
}
  
export default Search;