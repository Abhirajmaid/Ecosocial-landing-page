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
      <div className="partners-container p-title">
        <h3>OUR PARTNERS</h3>
        <div className="partner-section">{PartnerLogo}</div>
      </div>
    </>
  );
};
