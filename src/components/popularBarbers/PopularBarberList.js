import React, { useContext } from "react";
import { PopularBarberShopContext } from "./PopularBarbersDataProvider";
import Loading from "../loading/Loading";
import PopularBarber from "./PopularBarber";

export default props => {
  const { popularShops } = useContext(PopularBarberShopContext);

  const popularArray = popularShops.businesses;

  if (popularArray === undefined) {
    return (
      <>
        <div className="loading">
          <Loading />
        </div>
      </>
    );
  } else {
    return (
      <>
        <h4 className="popularShopHeading">Here are the top shops in your area</h4>
        <section className="listOfBarbers">
          {popularArray.map(shop => (
            <PopularBarber key={shop.id} props={props} locations={shop} />
          ))}
        </section>
      </>
    );
  }
};
