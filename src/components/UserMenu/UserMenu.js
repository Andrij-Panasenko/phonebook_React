import { useAuth } from "hooks/useAuth";
import { useDispatch, useSelector } from "react-redux"

export const UserMenu = () => {
   const dispatch = useDispatch();
   const { user } = useSelector(useAuth);
   
   return (
      <div>
         <p>Welcome, {user.name}</p>
         <button type="button">Logout</button>
      </div>
   )


}