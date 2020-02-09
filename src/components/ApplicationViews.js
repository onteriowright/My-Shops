import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./providers/MainProvider";
import BarberList from "./barbers/BarberList";
import FavoriteBarberList from "./favoriteBarbers/FavoriteBarberList";
import BarberForm from "./barbers/BarberForm";
import BarberShopReviewForm from "./barberReviews/BarberShopReviewForm";
import "./barbers/Barber.css";
import BarberShopReviewsList from "./barberReviews/BarberShopReviewsList";

export default props => {
  return (
    <MainProvider>
      <Route
        exact
        path="/"
        render={props => {
          return (
            <>
              <section className="barberShopView">
                <div className="barbershopListContainer">
                  <BarberForm {...props} />
                </div>
                <div className="barberShopContainer">
                  <BarberList {...props} />
                </div>
              </section>
            </>
          );
        }}
      />
      <Route exact path="/favoriteBarberShops" render={props => <FavoriteBarberList {...props} />} />
      <Route exact path="/shopReviews" render={props => <BarberShopReviewsList {...props} />} />
      <Route exact path="/shopReviews/:shopId(\d+)" render={props => <BarberShopReviewsList {...props} />} />
      <Route exact path="/favoriteBarberShops/create" render={props => <BarberShopReviewForm {...props} />} />
      <Route exact path="/favoriteBarberShops/edit/:shopId(\d+)" render={props => <BarberShopReviewForm {...props} />} />
    </MainProvider>
  );
};
