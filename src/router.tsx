import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrdersPage from "./containers/OrdersPage/OrdersPage";
import ProductsPage from "./containers/ProductsPage/ProductsPage";
import Header from "./components/MainHeader/MainHeader";
import LeftSidebar from "./components/LeftMenu/LeftMenu";
import RouteAnime from "./components/RouteAnime/RouteAnime";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <LeftSidebar />
      <Routes>
        <Route
          path="/"
          element={
            <RouteAnime>
              <OrdersPage />
            </RouteAnime>
          }
        />
        <Route
          path="/products"
          element={
            <RouteAnime>
              <ProductsPage />
            </RouteAnime>
          }
        />
        <Route path="*" element={<div>Page is not found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
