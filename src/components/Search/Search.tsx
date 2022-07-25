import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/search/slice';
import { debounce } from '../../utils';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();

  const throttled = React.useCallback(
    debounce((value: string) => dispatch(setSearchValue(value)), 500),
    [],
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => throttled(inputValue), [inputValue]);

  return (
    <div className={cn(styles.root, { [styles.active]: isFocus })}>
      <input
        type="text"
        placeholder="Название блюда"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {inputValue ? (
        <img
          src="img/Clear.svg"
          alt="Search"
          width="20"
          height="20"
          onClick={() => setInputValue('')}
        />
      ) : (
        <img src="img/Search.svg" alt="Search" width="20" height="20" />
      )}
    </div>
  );
};

export default Search;
