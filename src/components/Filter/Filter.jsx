export const Filter = ({ filterValue, setFilterValue }) => {
  return (
    <div>
      <label htmlFor="filter">Finde contact by name:</label>
      <input
        type="text"
        id="filter"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};
