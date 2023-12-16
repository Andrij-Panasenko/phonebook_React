import { AuthWrapp, NavLink } from './AuthNav.styled';
export const AuthNav = () => {
   return (
      <AuthWrapp>
         <NavLink to="/register">Register</NavLink>
         <NavLink to="/login">Log In</NavLink>
      </AuthWrapp>
   )
}