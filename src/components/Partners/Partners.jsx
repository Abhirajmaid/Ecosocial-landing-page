import React from "react";
import { Partner } from "../../data/PartnersData";
import { Icon } from "@iconify/react";
import "./style.css";
export const Partners = () => {
  const PartnerLogo = Partner.map((p) => {
    return (
      <a href={p.link}>
        <Icon icon={p.imgSrc} className="partner-logo" key={p.id} />
      </a>
    );
  });
  return (
    <>
      <div className="partners-container">
        <div
          className="flex-container "
          style={{ marginTop: "50px", marginRight: "80px" }}
        >
          {PartnerLogo}
        </div>
      </div>
    </>
  );
};
