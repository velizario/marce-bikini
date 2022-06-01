import { useContext } from "react";
import { UserContext } from "../../globalstate/UserContextProvider";
import HeaderFooter from "../headerfooter/HeaderFooter";
import AccountDetails from "./AccountDetails";
import SignIn from "./SignIn";
import EmailForm from "../checkout/EmailForm";

const AccountPage = () => {
  // Navigate to login page if no user is logged in
  const context = useContext(UserContext);
  //   let navigate = useNavigate();
  //   console.log(context.isLoggedIn);
  //   if (!context.isLoggedIn) {
  //     navigate("/login");
  //   }

  return (
    <HeaderFooter>
      {context.isLoggedIn ? <AccountDetails /> : <SignIn />}
    </HeaderFooter>
  );
};

export default AccountPage;
