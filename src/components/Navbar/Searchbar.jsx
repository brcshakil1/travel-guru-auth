import PropTypes from "prop-types";

const Searchbar = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="form-control">
      <input
        type="text"
        placeholder="Search your destination..."
        name="search"
        className=" border rounded-md py-3 px-4 w-[200px] md:w-[370px]"
      />
    </form>
  );
};

Searchbar.propTypes = {
  handleSearch: PropTypes.func,
};

export default Searchbar;
