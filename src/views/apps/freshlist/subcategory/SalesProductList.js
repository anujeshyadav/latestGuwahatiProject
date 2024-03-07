import React from "react";
import { Text, View } from "@react-pdf/renderer";

const SalesProductList = ({ invoiceData }) => {
  debugger;
  console.log(invoiceData);
  return (
    <>
      {invoiceData?.orderItems?.map((ele, i) => (
        <View
          key={i}
          style={{
            flexDirection: "row",
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
            height: "20px",
          }}>
          <View
            style={{
              width: "3%",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "8px",
                fontWeight: "1000",
                marginLeft: "5px",
              }}>
              {i + 1}
            </Text>
          </View>

          <View
            style={{
              width: "20%",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "8px",
                fontWeight: "1000",
                marginLeft: "5px",
              }}>
              {ele?.productId?.Product_Title}
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              padding: "2px 2px",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text
              style={{
                fontSize: "10px",

                fontWeight: "1000",
                marginLeft: "3px",
              }}>
              {ele?.productId?.HSN_Code}
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              marginRight: "2px",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "10px",
                fontWeight: "1000",
                marginLeft: "5px",
              }}>
              {ele?.qty}
            </Text>
          </View>
          <View
            style={{
              width: "8%",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "10px",
                fontWeight: "1000",
                paddingRight: "20px",

                // justifyContent: "flex-start",
              }}>
              {ele?.discountPercentage}
            </Text>
          </View>
          <View
            style={{
              width: "8%",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "10px",
                justifyContent: "flex-start",
                fontWeight: "1000",
                marginLeft: "5px",
              }}>
              {ele?.productId["GSTRate"]}
            </Text>
          </View>
          <View
            style={{
              width: "15%",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "8px",
                fontWeight: "1000",
                marginLeft: "3px",
              }}>
              {ele?.unitType}
            </Text>
          </View>
          {/* <View
            style={{
              width: "10%",
              marginRight: "2px",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "10px",
                fontWeight: "1000",
                marginLeft: "5px",
              }}>
              {ele?.Size}
            </Text>
          </View> */}
          <View
            style={{
              width: "15%",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "10px",
                justifyContent: "flex-end",
                fontWeight: "1000",
                marginLeft: "5px",
              }}>
              {ele?.price}
            </Text>
          </View>
          <View
            style={{
              width: "17%",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2px 2px",
            }}>
            <Text
              style={{
                fontSize: "10px",

                fontWeight: "1000",
                marginLeft: "5px",
              }}>
              {ele?.discountPercentage > 0 ? (
                <>
                  {Number(
                    (
                      ele?.totalPrice *
                      ((100 - ele?.discountPercentage) / 100)
                    ).toFixed(2)
                  )}
                </>
              ) : (
                <>{ele?.Size * ele?.price * ele?.qty}</>
              )}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default SalesProductList;
