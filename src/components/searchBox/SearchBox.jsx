import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  const handleChange = evt => {
    onFilter(evt.target.value);
  };

  return (
    <div className={css.searchBox}>
      <label className={css.searchBoxLabel}>Find contacts by name</label>
      <input
        className={css.SearchBoxField}
        type="text"
        name="searchContact"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
