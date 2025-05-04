import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New transaction</Dialog.Title>
        <CloseButton>
          <X size={24} aria-label="Close" />
        </CloseButton>

        <form action="">
          <input type="text" name="description" id="description" placeholder="Description" required />
          <input type="number" name="price" id="price" placeholder="Price" required />
          <input type="text" name="category" id="category" placeholder="Category" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Create</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
