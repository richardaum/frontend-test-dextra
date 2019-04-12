import React from "react";
import { Observer } from "mobx-react";
import green from "@material-ui/core/colors/green";
import detailsStore from "../../../infrastructure/stores/detailsStore";
import { MEAT_OFFER } from "../../../infrastructure/services/meatOffer";
import Offer, { OfferDiscount, OfferTitle, OfferSubtitle } from "./Offer";

export default function MeatOffer() {
  return (
    <Observer>
      {() => {
        const offer = detailsStore.activeOffers.get(MEAT_OFFER);
        return (
          !!offer && (
            <Offer>
              <OfferTitle
                text="Promoção Muita Carne"
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
