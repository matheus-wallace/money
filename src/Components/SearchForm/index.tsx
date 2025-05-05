import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSeatchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeatchTransactions)}>
      <input type="text" id="transaction" placeholder="Search transaction" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
