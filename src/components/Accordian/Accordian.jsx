import React, { useState } from "react";
import { FaqsData } from "../../data/FaqsData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1420px;
  height: 500px;
  // margin: 0 auto;
  padding-top: 50px;
  background-color: #fcfff2;
`;

const Container = styled.div`
  overflow-x: hidden;
  height: 320px;
  max-width: 700px;
  margin-bottom: -40px;
  @media (max-width: 750px) {
    width: 80vw;
  } ;
`;

const Wrap = styled.div`
  background: #fffffa;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #a3a3a3;
  h1 {
    padding: 22px;
    font-size: clamp(12px, 5px + 3vw, 17px);
  }

  span {
    margin-right: 1.5rem;
  }
  @media (max-width: 750px) {
    width: 80vw;
  } ;
`;

const Dropdown = styled.div`
  background: #fffffa;
  color: black;
  width: 700px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 22px;
  border-bottom: 1px solid #a3a3a3;

  p {
    width: 60%;
    font-size: clamp(10px, 4px + 3vw, 15px);
  }
  @media (max-width: 750px) {
    width: 80vw;
  } ;
`;
const Head = styled.h2`
  margin: -150px 0 40px 0;
  font-size: 26px;
  color: rgb(0, 65, 0);
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#116530", size: "25px" }}>
      <AccordionSection>
        <Head>FAQ</Head>
        <Container>
          {FaqsData.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={item.id}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown key={item.id}>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
