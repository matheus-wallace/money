import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logoImg from '../../assets/Logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionModal from '../NewTransactionModal';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
