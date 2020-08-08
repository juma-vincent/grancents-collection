import styled from "styled-components";
import CustomButton from "./../customButton/customButton";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
    height: 295px;
    width: 90vw;
  }
  @media screen and (max-width: 400px) {
    height: 250px;
  }
`;
export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    min-width: unset;
    top: unset;
    bottom: 28px;
    font-size: 14px;
    opacity: 0.7;
    padding: 0px 10px;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
    bottom: 23px;
  }
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
