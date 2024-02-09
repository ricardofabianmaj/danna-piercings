import { atom } from "recoil";

const SearchedTerm = atom({
    key: 'SearchedTerm',
    default: ''
  });

export default SearchedTerm