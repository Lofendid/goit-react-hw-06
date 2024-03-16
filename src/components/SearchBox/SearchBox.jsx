import css from './SearchBox.module.css';

export default function SearchBox({ value, setValue }) {
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="searchbar">
        Searchbar
      </label>
      <input
        className={css.searchbar}
        type="text"
        value={value}
        onChange={handleChange}
        id="searchbar"
      />
    </div>
  );
}
