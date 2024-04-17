import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import clsx from "clsx";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <h2 className={clsx(css.titleFilter)}>Find contacts by name</h2>
      <input
        className={clsx(css.inputFilter)}
        type="text"
        onChange={onChangeFilter}
      />
    </div>
  );
};
export default SearchBox;
