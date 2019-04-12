import React from "react";
import { Observer } from "mobx-react";
import green from "@material-ui/core/colors/green";
import detailsStore from "../../../infrastructure/stores/detailsStore";
import Offer, { OfferDiscount, OfferTitle, OfferSubtitle } from "./Offer";
import { CHEESE_OFFER } from "../../../infrastructure/services/cheeseOffer";

export default function CheeseOffer() {
  return (
    <Observer>
      {() => {
        const offer = detailsStore.activeOffers.get(CHEESE_OFFER);
        return (
          !!offer && (
            <Offer>
              <OfferTitle
                text="Promoção Muito Queijo"
                quantity={offer.offerQuantity}
              />
              <OfferDiscount
                color={green[500]}
                prefix={<span>−&nbsp;</span>}
                price={offer.discount}
              />
              <OfferSubtitle
                text={`Leve ${offer.quantity} e pague apenas ${
                  offer.paidQuantity
                }`}
              />
            </Offer>
          )
        );
      }}
    </Observer>
  );
}
