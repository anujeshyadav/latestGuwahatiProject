import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Rect,
} from "@react-pdf/renderer";

const TermsConditionWords = ({ BilData }) => {
  return (
    <>
      <View
        style={{
          width: "55%",
          padding: "10px 10px",
          borderRight: "1px solid black",
          //   height: "250px",
        }}>
        <View style={{ flexDirection: "", paddingBottom: "3px" }}>
          <Text
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}>
            Total In Words
          </Text>
          <Text
            style={{
              fontSize: "12px",
              width: "95%",
              fontWeight: "bold",
            }}>
            {BilData?.wordsNumber && BilData?.wordsNumber}
          </Text>{" "}
        </View>
        {/* <View style={{ margingTop: "50px" }}>
                  <Text style={{ fontSize: "8px", marginTop: "15px" }}>
                    Pay To: Jupitech Management Pvt Ltd.
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    Bank: Kotak Mahindra
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    A/c No.: 54623465
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: Kotak0001251
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: MAROLI , ANDHERI EAST
                  </Text>
                  </View> */}
        <View
          style={
            {
              // margingTop: "50px",
              // marginBottom: "40px",
            }
          }>
          <Text style={{ fontSize: "10px", marginTop: "15px" }}>
            Terms and Conditions
          </Text>
          <Text style={{ fontSize: "9px", marginTop: "3px" }}>
            1. Paid Amount/Payment are not refundable in any case.
          </Text>
          <Text style={{ fontSize: "9px", marginTop: "3px" }}>
            2. Pay Payment under 30 days.
          </Text>
        </View>
      </View>
    </>
  );
};

export default TermsConditionWords;
