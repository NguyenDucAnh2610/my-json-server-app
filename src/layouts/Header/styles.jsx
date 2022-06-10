import styled from "styled-components";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
export const HeaderContainer = styled.div`
  position: fixed;
  top: ${({ showHeader }) => (showHeader ? "-81px" : "0")};
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
  transition: all 0.2s;
  background-color: #ff2459;
`;

export const HeaderTopBar = styled.div`
  background-color: #ff2459;
  color: #fff;
  text-align: center;
  height: 30px;
  &:hover {
    background-color: #d9d9d9;
    color: black;
  }
`;
export const styleLink = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
  font-size: 13px;
  line-height: 30px;
  font-weight: 700;
  font-family: Roboto;
  &:hover {
    color: black;
  }
`;
export const HeaderBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  transition: all 0.3s;
  &:hover {
    background-color: #f9f86c;
  }
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;
export const Logo = styled.div`
  height: 36px;
`;
export const LogoImg = styled.img`
  width: auto;
  height: 100%;
`;
export const Menu = styled.div``;
export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0 30px;
  height: 50px;
`;
export const MenuItemLink = styled.a`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  padding: 0;
  white-space: nowrap;
  &:hover {
    color: #8e8e8e;
  }
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin: 0 6px;
  &:hover {
    color: #8e8e8e;
  }
`;

export const CartNumber = styled.span`
  top: -2px;
  right: -5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13x;
  width: 13px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background-color: #2f5acf;
  border-radius: 100px;
  pointer-events: none;
`;