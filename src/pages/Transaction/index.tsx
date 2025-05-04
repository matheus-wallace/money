import Header from '../../Components/Header';
import Summary from '../../Components/Summary';
import { PriceHighlight, TransactionContainer, TransactionsTable } from './styles';

const Transaction = () => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Site Development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Sale</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Feeding</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>
                <PriceHighlight variant="income">- R$ 6.000,00</PriceHighlight>
              </td>
              <td>Others</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Rent</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.200,00</PriceHighlight>
              </td>
              <td>Others</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
};

export default Transaction;
