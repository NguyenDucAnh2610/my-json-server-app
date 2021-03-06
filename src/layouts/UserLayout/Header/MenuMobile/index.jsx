/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Input, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import * as S from "./styles";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductListAction } from "../../../../redux/actions";

const { TabPane } = Tabs;

export const MenuMobile = ({
  isShowMenuMobile,
  showProductSearchMobile,
  setShowProductSearchMobile,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productList } = useSelector((state) => state.product);

  function handleSearchHead(e) {
    setShowProductSearchMobile(true);
    dispatch(
      getProductListAction({
        page: 1,
        limit: 5,
        keyword: e.target.value,
      })
    );
  }
  const renderProducts = productList.data.map((product) => {
    return (
      <div key={product.id}>
        <S.Row
          onClick={() => {
            const newPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: product.id,
            });
            navigate(newPath);
          }}
        >
          <S.Image>
            <S.Img src={product.productImages[0].url} />
          </S.Image>
          <S.Content>
            <S.Name>{product.name}</S.Name>
            <S.Price>
              {product.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </S.Price>
          </S.Content>
        </S.Row>
      </div>
    );
  });
  return (
    <S.MenuContainer isShowMenuMobile={isShowMenuMobile}>
      <S.MenuWrapper>
        <S.MenuInner>
          <S.SearchWrapper>
            <S.SearchMobile>
              <Form>
                <Form.Item>
                  <Input
                    onInput={() => {}}
                    onChange={(e) => {
                      handleSearchHead(e);
                    }}
                    placeholder="T??m ki???m s???n ph???m..."
                    prefix={<SearchOutlined />}
                    style={{
                      width: "100%",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
              </Form>
            </S.SearchMobile>
          </S.SearchWrapper>

          {!showProductSearchMobile ? (
            <>
              <S.MenuMainWrapper>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="S???n ph???m" key="1">
                    <p
                      onClick={() => {
                        const newPath = generatePath(ROUTES.USER.COLLECTION);
                        navigate(newPath);
                      }}
                      style={{
                        borderBottom: "1px solid #aaa",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                    >
                      T???t c??? s???n ph???m
                    </p>
                    {/* ??o nam */}
                    <S.Lists>
                      <S.ListHead>
                        <p>??o nam</p>
                      </S.ListHead>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "tanktop",
                            }
                          );
                          navigate(newPath, { state: 7 });
                        }}
                      >
                        <a>??o Tank top</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "t-shirt",
                            }
                          );
                          navigate(newPath, { state: 6 });
                        }}
                      >
                        <a>??o T-shirt</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "polo",
                            }
                          );
                          navigate(newPath, { state: 1 });
                        }}
                      >
                        <a>??o polo</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "shirt",
                            }
                          );
                          navigate(newPath, { state: 2 });
                        }}
                      >
                        <a>??o s?? mi</a>
                      </li>

                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "sportjacket",
                            }
                          );
                          navigate(newPath, { state: 8 });
                        }}
                      >
                        <a>??o kho??c th??? thao</a>
                      </li>
                    </S.Lists>
                    {/* qu???n nam */}
                    <S.Lists>
                      <S.ListHead>
                        <p>Qu???n nam</p>
                      </S.ListHead>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "shorts",
                            }
                          );
                          navigate(newPath, { state: 3 });
                        }}
                      >
                        <a>Qu???n shorts</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "jeans",
                            }
                          );
                          navigate(newPath, { state: 5 });
                        }}
                      >
                        <a>Qu???n jeans</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "pants",
                            }
                          );
                          navigate(newPath, { state: 4 });
                        }}
                      >
                        <a>Qu???n pants</a>
                      </li>
                    </S.Lists>
                  </TabPane>
                </Tabs>
              </S.MenuMainWrapper>
              <S.NavList>
                <S.Nav>
                  <a>Ch???n size</a>
                </S.Nav>
                <S.Nav>
                  <a>V??? coolmate</a>
                </S.Nav>
              </S.NavList>
            </>
          ) : productList.data.length === 0 ? (
            <h3 style={{ color: "#151515", textAlign: "center" }}>
              ch??a t??m th???y s???n ph???m
            </h3>
          ) : (
            renderProducts
          )}
        </S.MenuInner>
      </S.MenuWrapper>
    </S.MenuContainer>
  );
};
