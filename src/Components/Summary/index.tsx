import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './styles';

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>entries</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>withdrawal</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};

export default Summary;
