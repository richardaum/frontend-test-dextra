import React from "react";
import { Observer } from "mobx-react";
import green from "@material-ui/core/colors/green";
import detailsStore from "../../../infrastructure/stores/detailsStore";
import { LIGHT_OFFER } from "../../../infrastructure/services/lightOffer";
import Offer, { OfferTitle, OfferDiscount, OfferSubtitle } from "./Offer";

export default function LightOffer() {
  return (
    <Observer>
      {() =>
        detailsStore.activeOffers.has(LIGHT_OFFER) && (
          <Offer>
            <OfferTitle text="Promoção Light" quantity="1" />
            <OfferDiscount
              color={green[500]}
              prefix={<span>−&nbsp;</span>}
              price={detailsStore.activeOffers.get(LIGHT_OFFER).discount}
            />
            <OfferSubtitle text="Desconto de 10%" />
          </Offer>
        )
      }
    </Observer>
  );
}
