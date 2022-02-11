import "./App.css";
// import ReactDOM from "react-dom";
// import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./styles/Theme";
// import SingleProductPage from "./structure/singleProduct/SingleProductPage";

import ShopPage from "./structure/shop/ShopPage";
import HomePage from "./structure/homepage/HomePage";
import AboutUs from "./structure/about/AboutUs";
import ContactUs from "./structure/contact/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import SingleProductPage from "./structure/singleProduct/SingleProductPage";
import CartPage from "./structure/cart/CartPage";
import CreateAccount from "./structure/account/CreateAccount";
// import { ThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import SignIn from "./structure/account/SignIn";
import AccountPage from "./structure/account/AccountPage";
import { UserContextProvider } from "./globalstate/UserContextProvider";
import { CartContextProvider } from "./globalstate/CartContextProvider";
import CheckoutPage from "./structure/checkout/CheckoutPage";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <Routes>
                {/* <Route path="/" element={<App />} /> */}
                <Route index element={<HomePage />} />
                <Route path="shop" element={<ShopPage />} />
                {/* <Route path=":teamId" element={<Team />} /> */}
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="account" element={<AccountPage />} />
                <Route path="createaccount" element={<CreateAccount />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                {/* <Route index element={<LeagueStandings />} /> */}
                <Route
                  path="product/:productId"
                  element={<SingleProductPage />}
                />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
