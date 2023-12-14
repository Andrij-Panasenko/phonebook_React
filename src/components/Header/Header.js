import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";

export const Header = () => {
   const { isLoggedIn } = useAuth();

   return <>
   
      <header>
         <nav>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
         </nav>
      </header>
   </>
}