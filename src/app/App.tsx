import { useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks"
import "./App.scss";
import Header from "./components/header/Header"

function App() {

  const tags = ['#uch', '#fantasy', '#modern', '#vampire', '#ciberpunk'];
  const [searchValue, setSearchValue] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const debounceSearchValue = useDebounce(searchValue, 500);

  const onSetSearchValue = (value: string) => {
    setSearchValue(value);
  }

  const onSetIsPopupOpen = (isOpen: boolean) => {
    setIsPopupOpen(isOpen);
  }

  const foundContent = useMemo(findTag, [debounceSearchValue]);

  function findTag():string[] | string {
    if (searchValue === '') {
      return '';
    } else {
      return tags.filter(tag => tag.indexOf(searchValue) > -1);
    }
  }

  return (
    <>
      <Header onSetSearchValue={onSetSearchValue} onSetIsPopupOpen={onSetIsPopupOpen} foundValues={foundContent} isPopupOpen={isPopupOpen}/>
    </>
  )
}

export default App;
