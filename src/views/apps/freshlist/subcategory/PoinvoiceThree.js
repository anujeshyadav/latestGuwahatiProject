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

import logo from "../../../../assets/img/logo/logowithoutback.png";
import signature from "../../../../assets/img/logo/signature.png";
import { Image_URL } from "../../../../ApiEndPoint/Api";
import InvoiceCharges from "./InvoiceCharges";
import GstCalculation from "./GstCalculation";
import TransporterDetails from "./TransporterDetails";
import SalesProductList from "./SalesProductList";
import TermsConditionWords from "./TermsConditionWords";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 30,
    backgroundColor: "white",
  },
  header: {
    fontSize: "8px",
    marginTop: "1px",
    marginBottom: "2px",
  },
  GSTIN: {
    fontSize: "10px",
    fontWeight: "bold",
    marginTop: "1px",
    marginBottom: "2px",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  customername: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: 70,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    padding: 5,
  },
  itemName: {
    flex: 1,
  },
  itemQuantity: {
    flex: 1,
  },
  itemPrice: {
    flex: 1,
  },
  total: {
    marginTop: 20,
    fontSize: 15,
  },
});

const PoinvoiceThree = ({
  UserChoice,
  invoiceData,
  subTotal,
  grandTotal,
  CurrentWords,
  BilData,
  tableList,
  AllCharges,
}) => {
  console.log("BilData", BilData);

  const curentDate = new Date();
  console.log(curentDate.toTimeString().split(" ")[0]);
  let day = curentDate.getDate();
  let month = curentDate.getMonth() + 1;
  let year = curentDate.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  border: "1px solid black",
                  height: "100px",
                }}>
                {UserChoice?.imagePosition &&
                UserChoice?.imagePosition == "Left" ? (
                  <>
                    {/* <Image
                      style={{ width: "230px", padding: "25px 10px" }}
                      src={logo}></Image> */}
                    {BilData?.CompanyDetails?.logo &&
                    BilData?.CompanyDetails?.logo ? (
                      <>
                        <Image
                          style={{ width: "230px", padding: "25px 10px" }}
                          src={`${Image_URL}/Images/${BilData?.CompanyDetails?.logo}`}></Image>
                      </>
                    ) : (
                      <>
                        <Image
                          style={{ width: "230px", padding: "25px 10px" }}
                          src={logo}></Image>
                      </>
                    )}

                    <View style={{ padding: "10px" }}>
                      <Text style={{ fontSize: "13px", fontWeight: "bold" }}>
                        {BilData?.CompanyDetails?.name &&
                          BilData?.CompanyDetails?.name}
                      </Text>

                      <Text
                        style={{
                          fontSize: "8px",
                          marginTop: "5px",
                          marginBottom: "2px",
                        }}>
                        {BilData?.CompanyDetails?.address &&
                          BilData?.CompanyDetails?.address}
                      </Text>
                      <Text style={styles.header}></Text>
                      <Text style={styles.header}>
                        Email :
                        {BilData?.CompanyDetails?.email &&
                          BilData?.CompanyDetails?.email}
                      </Text>
                      <Text style={styles.header}>
                        MobileNo :
                        {BilData?.CompanyDetails?.mobileNo &&
                          BilData?.CompanyDetails?.mobileNo}
                      </Text>
                      <Text style={styles.GSTIN}>
                        GSTIN :
                        {BilData?.CompanyDetails?.gstNo &&
                          BilData?.CompanyDetails?.gstNo}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={{ padding: "10px" }}>
                      <Text style={{ fontSize: "13px", fontWeight: "bold" }}>
                        {BilData?.CompanyDetails?.name &&
                          BilData?.CompanyDetails?.name}
                      </Text>

                      <Text
                        style={{
                          fontSize: "8px",
                          marginTop: "5px",
                          marginBottom: "2px",
                        }}>
                        {BilData?.CompanyDetails?.address &&
                          BilData?.CompanyDetails?.address}
                      </Text>
                      <Text style={styles.header}></Text>
                      <Text style={styles.header}>
                        Email :
                        {BilData?.CompanyDetails?.email &&
                          BilData?.CompanyDetails?.email}
                      </Text>
                      <Text style={styles.header}>
                        MobileNo :
                        {BilData?.CompanyDetails?.mobileNo &&
                          BilData?.CompanyDetails?.mobileNo}
                      </Text>
                      <Text style={styles.GSTIN}>
                        GSTIN :
                        {BilData?.CompanyDetails?.gstNo &&
                          BilData?.CompanyDetails?.gstNo}
                      </Text>
                    </View>
                    {BilData?.CompanyDetails?.logo &&
                    BilData?.CompanyDetails?.logo ? (
                      <>
                        <Image
                          style={{ width: "230px", padding: "25px 10px" }}
                          src={`${Image_URL}/Images/${BilData?.CompanyDetails?.logo}`}></Image>
                      </>
                    ) : (
                      <>
                        <Image
                          style={{ width: "230px", padding: "25px 10px" }}
                          src={logo}></Image>
                      </>
                    )}
                  </>
                )}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  //   backgroundColor: "#00c0ef",
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                  height: "20px",
                }}>
                <View
                  style={{
                    padding: "2px",
                    width: "33%",
                    borderRight: "1px solid black",
                  }}>
                  <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                    {UserChoice?.billTo == "right" && (
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                          width: "50%",
                        }}>
                        invoice Detail
                      </Text>
                    )}
                    {UserChoice?.shipto == "right" && (
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                          width: "50%",
                        }}>
                        Invoice Detail
                      </Text>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    width: "33%",
                    padding: "2px 2px",
                    borderRight: "1px solid black",
                  }}>
                  <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                    {UserChoice?.billTo == "Left" && (
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                          width: "50%",
                        }}>
                        Bill To
                      </Text>
                    )}
                    {UserChoice?.shipto == "Left" && (
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                          width: "50%",
                        }}>
                        Ship To
                      </Text>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    padding: "2px",
                    width: "33%",
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingBottom: "3px",
                    }}>
                    {UserChoice?.billTo == "right" && (
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                          width: "50%",
                        }}>
                        Bill To
                      </Text>
                    )}
                    {UserChoice?.shipto == "right" && (
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                          width: "50%",
                        }}>
                        Ship To
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                  height: "150px",
                }}>
                <View
                  style={{
                    padding: "4px",
                    width: "33%",
                    borderRight: "1px solid black",
                  }}>
                  <View
                    style={{
                      padding: "3px 3px",
                    }}>
                    <View
                      style={{ flexDirection: "row", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "9px",
                          fontWeight: "bold",
                          width: "50%",
                        }}>
                        InvoiceId
                      </Text>{" "}
                      <Text style={{ fontSize: "9px", fontWeight: "bold" }}>
                        : {invoiceData?.invoiceId}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "9px",
                          fontWeight: "bold",
                          width: "50%",
                        }}>
                        Receipt Date :
                      </Text>{" "}
                      <Text style={{ fontSize: "9px", fontWeight: "bold" }}>
                        : {currentDate && currentDate}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "9px",
                          fontWeight: "bold",
                          width: "50%",
                        }}>
                        Receipt Time :
                      </Text>{" "}
                      <Text style={{ fontSize: "9px", fontWeight: "bold" }}>
                        :{" "}
                        {currentDate && curentDate.toTimeString().split(" ")[0]}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "8px",
                          fontWeight: "bold",
                          width: "50%",
                        }}>
                        Term
                      </Text>{" "}
                      <Text style={{ fontSize: "8px", fontWeight: "bold" }}>
                        : Due on Receipt
                      </Text>
                    </View>
                  </View>
                  {invoiceData?.transporter && invoiceData?.transporter ? (
                    <View
                      style={{
                        height: "90px",
                      }}>
                      <TransporterDetails
                        invoiceData={invoiceData}
                        backGround="white"
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        height: "90px",
                      }}>
                      <Text>by Vehicle</Text>
                    </View>
                  )}
                </View>
                <View
                  style={{
                    width: "33%",
                    padding: "10px 10px",
                    borderRight: "1px solid black",
                  }}>
                  {UserChoice?.billTo == "Left" && (
                    <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}>
                        {BilData?.CompanyDetails?.name &&
                          BilData?.CompanyDetails?.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: "8px",
                          marginTop: "5px",
                          marginBottom: "2px",
                        }}>
                        {BilData?.CompanyDetails?.address &&
                          BilData?.CompanyDetails?.address}
                      </Text>
                      <Text style={styles.header}>
                        Email :
                        {BilData?.CompanyDetails?.email &&
                          BilData?.CompanyDetails?.email}
                      </Text>
                      <Text style={styles.header}>
                        MobileNo :
                        {BilData?.CompanyDetails?.mobileNo &&
                          BilData?.CompanyDetails?.mobileNo}
                      </Text>
                    </View>
                  )}
                  {UserChoice?.shipto == "Left" && (
                    <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "13px",
                          width: "98%",
                          fontWeight: "bold",
                        }}>
                        {`Name: ${BilData?.PrintData?.partyId?.OwnerName}`}
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          width: "98%",
                          fontWeight: "bold",
                        }}>
                        {`Address: ${BilData?.PrintData?.partyId?.OwnerAddress}
                        Mobile No.: ${BilData?.PrintData?.partyId?.Owner_Mobile_numer}
                        State.: ${BilData?.PrintData?.partyId?.State}
                        City.: ${BilData?.PrintData?.partyId?.City}`}
                      </Text>{" "}
                    </View>
                  )}
                </View>
                <View
                  style={{
                    padding: "10px",
                    width: "33%",
                    // borderRight: "1px solid black",
                  }}>
                  {UserChoice?.billTo == "right" && (
                    <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}>
                        {BilData?.CompanyDetails?.name &&
                          BilData?.CompanyDetails?.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: "8px",
                          marginTop: "5px",
                          marginBottom: "2px",
                        }}>
                        {BilData?.CompanyDetails?.address &&
                          BilData?.CompanyDetails?.address}
                      </Text>
                      <Text style={styles.header}>
                        Email :
                        {BilData?.CompanyDetails?.email &&
                          BilData?.CompanyDetails?.email}
                      </Text>
                      <Text style={styles.header}>
                        MobileNo :
                        {BilData?.CompanyDetails?.mobileNo &&
                          BilData?.CompanyDetails?.mobileNo}
                      </Text>
                    </View>
                  )}
                  {UserChoice?.shipto == "right" && (
                    <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                      <Text
                        style={{
                          fontSize: "13px",
                          width: "98%",
                          fontWeight: "bold",
                        }}>
                        {`Name: ${BilData?.PrintData?.partyId?.OwnerName}`}
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          width: "100%",
                          fontWeight: "bold",
                        }}>
                        {`Address: ${BilData?.PrintData?.partyId?.OwnerAddress}
                          Mobile No.: ${BilData?.PrintData?.partyId?.Owner_Mobile_numer}
                          State: ${BilData?.PrintData?.partyId?.State}
                           City: ${BilData?.PrintData?.partyId?.City}`}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // borderBottom: "1px solid black",
                  // borderRight: "1px solid black",
                  // borderLeft: "1px solid black",
                  // height: "20px",
                }}>
                {/* <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}> */}
                {/* <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",

                      width: "90%",
                    }}>
                    Client Code : &nbsp; {invoiceData?.partyId?.firstName}{" "}
                    {invoiceData?.partyId?.lastName}
                  </Text>
                </View> */}
                {/* </View> */}

                {/* <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",
                      width: "80%",
                    }}>
                    User Code : &nbsp;
                  </Text>
                </View>
              </View> */}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  //   backgroundColor: "#00c0ef",
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                  height: "23px",
                }}>
                <View
                  style={{
                    width: "3%",
                    padding: "5px 2px",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    #
                  </Text>
                </View>
                {/* <View
                style={{
                  width: "10%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "black",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  PO Number
                </Text>
              </View> */}
                {/* <View
                  style={{
                    width: "12%",
                    padding: "5px 2px",

                    borderRight: "1px solid black",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "1000",
                      color: "black",

                      marginLeft: "5px",
                    }}
                  >
                    PO No.
                  </Text>
                </View> */}
                {/* <View
                  style={{
                    width: "13%",
                    padding: "5px 2px",

                    borderRight: "1px solid black",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}
                  >
                    Client Code
                  </Text>
                </View> */}
                {/* <View
                  style={{
                    width: "13%",
                    padding: "5px 2px",

                    borderRight: "1px solid black",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}
                  >
                    State name
                  </Text>
                </View> */}
                <View
                  style={{
                    width: "20%",
                    padding: "5px 2px",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "8px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    Product Name
                  </Text>
                </View>
                <View
                  style={{
                    width: "10%",
                    padding: "5px 2px",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "8px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    HSN / SAC
                  </Text>
                </View>

                <View
                  style={{
                    width: "10%",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "5px 2px",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    Qty
                  </Text>
                </View>
                <View
                  style={{
                    width: "8%",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "5px 2px",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    Dis%
                  </Text>
                </View>
                <View
                  style={{
                    width: "8%",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "5px 2px",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "8px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    GST
                  </Text>
                </View>
                <View
                  style={{
                    width: "15%",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "5px 2px",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    Unit
                  </Text>
                </View>

                <View
                  style={{
                    width: "15%",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "5px 2px",
                    borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    Price
                  </Text>
                </View>
                <View
                  style={{
                    width: "17%",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "5px 2px",
                    //   borderRight: "1px solid black",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "black",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    Amount
                  </Text>
                </View>
              </View>
              <SalesProductList invoiceData={invoiceData} />

              <View
                style={{
                  flexDirection: "row",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                }}>
                <TermsConditionWords BilData={BilData} />
                <InvoiceCharges invoiceData={invoiceData} />
              </View>
            </View>
            <View>
              <GstCalculation invoiceData={invoiceData} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",

                // alignItems: "flex-end",
              }}>
              <View
                style={{
                  padding: "3px 3px ",
                  height: "180px",
                  borderBottom: "1px solid black",
                  borderLeft: "1px solid black",
                  borderRight: "1px solid black",
                  width: "45%",
                }}>
                <Text style={{ fontSize: "11px" }}> For</Text>
                <Text
                  style={{
                    fontSize: "12px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}>
                  {" "}
                  {BilData?.CompanyDetails?.name &&
                    BilData?.CompanyDetails?.name}
                </Text>
                <View>
                  {BilData?.CompanyDetails?.signature &&
                  BilData?.CompanyDetails?.signature ? (
                    <>
                      <Image
                        style={{ height: "50px", marginTop: "15px" }}
                        src={`${Image_URL}/Images/${BilData?.CompanyDetails?.signature}`}
                        width="200px"
                        height="200px"></Image>
                    </>
                  ) : (
                    <>
                      <Image
                        style={{ height: "50px", marginTop: "15px" }}
                        src={signature}
                        width="200px"
                        height="200px"></Image>
                    </>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: "2px",
                    marginTop: "20px",
                    justifyContent: "center",
                  }}>
                  <Text style={{ fontSize: "10px" }}>Authorized Signature</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PoinvoiceThree;
