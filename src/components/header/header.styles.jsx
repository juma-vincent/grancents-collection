import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 17px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  padding-left: 85px;

  .logo {
    padding-bottom: 30px;
    padding-right: 0px;
  }

  @media screen and (max-width: 800px) {
    width: 20px;
    padding: 0px;
    .logo {
      padding-bottom: 60px;
      padding-right: 60px;
    }
  }

  @media screen and (max-width: 400px) {
    width: 20px;
    padding: 0px;
    padding-bottom: 60px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
    font-size: 13px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 5px 15px;
  cursor: pointer;
  border-bottom: solid silver 1px;
  border-radius: 8px;
  margin-right: 4px;
  box-shadow: 0px 1px 0px silver;

  @media screen and (max-width: 400px) {
    padding: 3px 7px;
    margin-right: 4px;
    border-radius: 5px;
  }
`;
