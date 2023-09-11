import { FC, useState, ChangeEvent, useEffect } from "react";
import './SearchInput.scss';

export interface InputSearchProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  isPopupOpen?: boolean;
  onSetSearchValue?(value?: string): void;
}

const SearchInput: FC<InputSearchProps> = (props) => {

  const {className, placeholder, disabled, onSetSearchValue, isPopupOpen} = props;

  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setSearchValue('');
    onSetSearchValue?.('');
  }, [isPopupOpen])

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    onSetSearchValue?.(e.target.value);
  }

  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChangeSearchValue}
        value={searchValue}
      />
    </>
  )
}

export default SearchInput;