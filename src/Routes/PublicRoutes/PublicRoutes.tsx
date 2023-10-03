import { Route, Routes } from "react-router-dom";
import { ProductsScreen } from "../../Screens/ProductsScreen/ProductsScreen";
import { HomeScreen } from "../../Screens/HomeScreen/HomeScreen";
import { ProductDetailScreen } from "../../Screens/ProductDetailScreen/ProductDetailScreen";
import { CartAndCheckOutScreen } from "../../Screens/CartAndCheckOutScreen/CartAndCheckOutScreen";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route Component={HomeScreen} path="/" />
      <Route Component={ProductsScreen} path="/products/:title?" />
      <Route Component={ProductDetailScreen} path="/product/:productId" />
      <Route Component={CartAndCheckOutScreen} path="/cart"/>
    </Routes>
  );
};
