import React, { useContext } from "react";
import { BarberReviewContext } from "../barberReviews/BarberShopReviewProvider";
import BarberShopReview from "../barberReviews/BarberShopReviews";

export default props => {
  const { barberReviews } = useContext(BarberReviewContext);

  return (
    <>
      <h3 className="shop-title">Barber Shop Reviews</h3>
      <button className="btn btn-primary btn-sm create-review-btn-position" onClick={() => props.history.push("/favoriteBarberShops/create")}>
        Create Review
      </button>
      <section className="barberShopList">
        <div className="listOfBarbers">
          {barberReviews.map(barbershop => (
            <BarberShopReview key={barbershop.id} props={props} favoriteBarberShopsReviews={barbershop} />
          ))}
        </div>
      </section>
    </>
  );
};
