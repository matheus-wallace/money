import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" name="trasction" id="transaction" placeholder="Search transaction" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
