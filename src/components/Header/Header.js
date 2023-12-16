import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { HeaderNav, StyledHeader } from 'components/Header/Header.styled';

export const Header = () => {
   const { isLoggedIn } = useAuth();

   return <>
   
      <StyledHeader>
         <HeaderNav>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
         </HeaderNav>
      </StyledHeader>
   </>
}