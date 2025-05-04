import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logoImg from '../../assets/Logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo" />
        <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
