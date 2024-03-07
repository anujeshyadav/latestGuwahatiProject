import React from "react";
import { Text, View } from "@react-pdf/renderer";

const TransporterDetails = ({ invoiceData, backGround }) => {
  return (
    <>
      <View
        style={{
          borderTop: "1px solid black",
        }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: backGround,
            }}>
            <Text
              style={{
                fontSize: "12px",
                marginTop: "5px",
                fontWeight: "bold",
                fontWeight: "1000",
                width: "100%",
              }}>
              Transporter Details
            </Text>{" "}
          </View>
          <View style={{ marginTop: "2px", padding: "2px 2px" }}>
            <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
              <Text
                style={{
                  fontSize: "9px",
                  width: "30%",
                  fontWeight: "bold",
                }}>
                Name
              </Text>{" "}
              <Text style={{ fontSize: "9px", fontWeight: "bold" }}>
                :{" "}
                {invoiceData?.transporter?.firstName && (
                  <>{`${invoiceData?.transporter?.firstName} ${invoiceData?.transporter?.lastName}`}</>
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
              <Text
                style={{
                  fontSize: "9px",
                  fontWeight: "bold",
                  width: "30%",
                }}>
                Contact No
              </Text>{" "}
              <Text style={{ fontSize: "9px", fontWeight: "bold" }}>
                :
                {invoiceData?.transporter?.Contact_Details &&
                  invoiceData?.transporter?.Contact_Details}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
              <Text
                style={{
                  fontSize: "9px",
                  fontWeight: "bold",
                  width: "30%",
                }}>
                Address
              </Text>{" "}
              <Text
                style={{ fontSize: "9px", fontWeight: "bold", width: "100%" }}>
                :
                {invoiceData?.transporter?.Address &&
                  invoiceData?.transporter?.Address}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
              <Text
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}>
                GST Number
              </Text>{" "}
              <Text style={{ fontSize: "8px", fontWeight: "bold" }}>
                :{" "}
                {invoiceData?.transporter?.Gstnumber &&
                  invoiceData?.transporter?.Gstnumber}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TransporterDetails;
