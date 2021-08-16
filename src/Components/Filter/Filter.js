import { useSelector, useDispatch } from "react-redux";
import actions from "../../Redux/phonebook-actions";
import { getFilter } from "../../Redux/phonebook-selectors";

import styles from "./Filter.module.scss";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (event) =>
    dispatch(actions.changeFilter(event.target.value));

  return (
    <label className={styles.filter}>
      <p className={styles.text}>Search Contact</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
