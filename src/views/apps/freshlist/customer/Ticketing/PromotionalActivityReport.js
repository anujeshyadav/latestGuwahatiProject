import React, { useDebugValue, useRef } from "react";
import { Route } from "react-router-dom";
import {
  Card,
  CardBody,
  Input,
  Row,
  Modal,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ModalHeader,
  ModalBody,
  Badge,
  Table,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
  Button,
  Spinner,
  CustomInput,
} from "reactstrap";
import { ContextLayout } from "../../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Logo from "../../../../../assets/img/profile/pages/logomain.png";
import Papa from "papaparse";
import { Eye, Trash2, ChevronDown, Edit, CornerDownLeft } from "react-feather";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import "../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../../assets/scss/pages/users.scss";
import StockTrxInvoice from "../../subcategory/StockTrxInvoice";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaDownload,
  FaFilter,
  FaPlus,
} from "react-icons/fa";
import swal from "sweetalert";
import {
  _Get,
  createOrderhistoryview,
  Delete_targetINlist,
  PurchaseOrderList,
  View_PromotionList,
} from "../../../../../ApiEndPoint/ApiCalling";
import {
  BsCloudDownloadFill,
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import * as XLSX from "xlsx";
import UserContext from "../../../../../context/Context";
import { CheckPermission } from "../../house/CheckPermission";
import SuperAdminUI from "../../../../SuperAdminUi/SuperAdminUI";
import { ImDownload } from "react-icons/im";
import { WareahouseList_For_addProduct } from "../../../../../ApiEndPoint/Api";
import { B2B } from "./GSTR2Reportconst";
const SelectedColums = [];

class PromotionalActivityReport extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.gridApi = null;
    this.state = {
      isOpen: false,
      MasterShow: false,
      Arrindex: "",
      rowData: [],
      Dropdown: [],
      AllData: [],
      rowAllData: [],
      startDate: "",
      EndDate: "",
      ShowBill: false,
      modal: false,
      modalone: false,
      ViewData: {},
      InsiderPermissions: {},
      setMySelectedarr: [],
      SelectedCols: [],
      paginationPageSize: 5,
      currenPageSize: "",
      getPageSize: "",
      AllcolumnDefs: [],
      SelectedcolumnDefs: [],
      defaultColDef: {
        sortable: true,
        enablePivot: true,
        enableValue: true,
        resizable: true,
        suppressMenu: true,
      },
      columnDefs: [],
      // columnDefs: [
      //   {
      //     headerName: "UID",
      //     valueGetter: "node.rowIndex + 1",
      //     field: "node.rowIndex + 1",
      //     width: 80,
      //     filter: true,
      //   },

      //   // {
      //   //   headerName: "Actions",
      //   //   field: "transactions",
      //   //   width: 180,
      //   //   cellRendererFramework: (params) => {
      //   //     return (
      //   //       <div className="actions cursor-pointer">
      //   //         {this.state.InsiderPermissions &&
      //   //           this.state.InsiderPermissions?.View && (
      //   //             <Eye
      //   //               className="mr-50"
      //   //               size="25px"
      //   //               color="green"
      //   //               onClick={() => {
      //   //                 this.togglemodal();
      //   //                 this.handleChangeView(params.data, "readonly");
      //   //               }}
      //   //             />
      //   //           )}
      //   //       </div>
      //   //     );
      //   //   },
      //   // },
      //   // {
      //   //   headerName: "Status",
      //   //   field: "status",
      //   //   filter: true,
      //   //   width: 150,
      //   //   cellRendererFramework: (params) => {
      //   //     return params.value == "Active" ? (
      //   //       <div className="badge badge-pill badge-success">
      //   //         {params.data.status}
      //   //       </div>
      //   //     ) : params.value == "Deactive" ? (
      //   //       <div className="badge badge-pill badge-warning">
      //   //         {params.data.status}
      //   //       </div>
      //   //     ) : params.value == "return" ? (
      //   //       <div className="badge badge-pill badge-danger">
      //   //         {params.data.status}
      //   //       </div>
      //   //     ) : params.value == "InProcess" ? (
      //   //       <div className="badge badge-pill badge-secondary">
      //   //         {params.data.status}
      //   //       </div>
      //   //     ) : params.value == "cancelled" ? (
      //   //       <div className="badge badge-pill badge-danger">
      //   //         {params.data.status}
      //   //       </div>
      //   //     ) : null;
      //   //   },
      //   // },

      //   {
      //     headerName: "INVOICE Number",
      //     field: "invoiceId",
      //     filter: true,
      //     width: 200,
      //     cellRendererFramework: (params) => {
      //       console.log(params?.data);
      //       return (
      //         <div>
      //           <span>{params?.data?.invoiceId}</span>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "Purchase Date",
      //     field: "DateofDelivery",
      //     filter: true,
      //     width: 180,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div>
      //           <span>{params?.data?.DateofDelivery}</span>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "Supplier Name",
      //     field: "partyId.firstName",
      //     filter: true,
      //     width: 180,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div>
      //           <span>{params?.data?.partyId?.firstName}</span>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "Supplier Last Name",
      //     field: "partyId.lastName",
      //     filter: true,
      //     width: 180,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div>
      //           <span>{params?.data?.partyId?.lastName}</span>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "GST Number",
      //     field: "partyId.Gstnumber",
      //     filter: true,
      //     width: 250,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div>
      //           <span>{params?.data?.partyId?.Gstnumber}</span>
      //         </div>
      //       );
      //     },
      //   },

      //   {
      //     headerName: "SGST",
      //     field: "updatedAt",
      //     filter: true,
      //     width: 180,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div>
      //             <Badge color="primary">
      //               {params.data?.sgstTotal && params.data?.sgstTotal}
      //             </Badge>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "CGST",
      //     field: "updatedAt",
      //     filter: true,
      //     width: 180,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div>
      //             <Badge color="primary">
      //               {params.data?.cgstTotal && params.data?.cgstTotal}
      //             </Badge>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "IGST",
      //     field: "updatedAt",
      //     filter: true,
      //     width: 180,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div>
      //             <Badge color="primary">
      //               {params.data?.igstTotal && params.data?.igstTotal}
      //             </Badge>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "Amount",
      //     field: "amount",
      //     filter: true,
      //     width: 150,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div>
      //             <Badge color="primary">
      //               {params.data?.amount?.toFixed(2)}
      //             </Badge>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "RoundOff",
      //     field: "roundOff",
      //     filter: true,
      //     width: 150,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div>
      //             <Badge color="primary">{params.data?.roundOff}</Badge>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "Grand Total",
      //     field: "grandTotal",
      //     filter: true,
      //     width: 150,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div>
      //             <Badge color="primary">{params.data?.grandTotal}</Badge>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      // ],
    };
  }
  toggleModal = () => {
    this.setState((prevState) => ({
      modalone: !prevState.modalone,
    }));
  };
  LookupviewStart = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  handleChangeView = (data, types) => {
    let type = types;
    if (type == "readonly") {
      console.log("ResponseData", data.orderItems);
      this.setState({ ViewOneUserView: true });
      this.setState({ ViewOneData: data });
    } else {
      this.setState({ EditOneUserView: true });
      this.setState({ EditOneData: data });
    }
  };

  async Apicalling(id, db) {
    this.setState({ Loading: true });
    await View_PromotionList(id, db)
      .then((res) => {
        this.setState({ Loading: false });

        let keys = Object.keys(res?.Promotion[0]);
        let myarr = keys.filter(
          (item) =>
            item !== "_id" &&
            item !== "__v" &&
            item !== "created_by" &&
            item !== "status" &&
            item !== "database"
        );
        let unique = [...new Set(myarr)];
        this.setState({ Dropdown: unique });
        this.setState({ AllData: res?.Promotion });

        // this.setState({ rowData: res?.Promotion });
        // this.setState({ rowAllData: res?.Promotion });
        // }

        // this.setState({ AllcolumnDefs: this.state.columnDefs });
        // this.setState({ SelectedCols: this.state.columnDefs });

        // let userHeading = JSON.parse(
        //   localStorage.getItem("PromotionalActivityList")
        // );
        // if (userHeading?.length) {
        //   this.setState({ columnDefs: userHeading });
        //   this.gridApi.setColumnDefs(userHeading);
        //   this.setState({ SelectedcolumnDefs: userHeading });
        // } else {
        //   this.setState({ columnDefs: this.state.columnDefs });
        //   this.setState({ SelectedcolumnDefs: this.state.columnDefs });
        // }
      })
      .catch((err) => {
        this.setState({ Loading: false });
        this.setState({ Dropdown: [] });
        this.setState({ AllData: [] });
        this.setState({ Loading: false });
        console.log(err);
      });
  }
  async componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    const UserInformation = this.context?.UserInformatio;
    if (userInfo?.rolename?.roleName === "MASTER") {
      this.setState({ MasterShow: true });
    }
    const InsidePermissions = CheckPermission("Promotional Activity Report");
    this.setState({ InsiderPermissions: InsidePermissions });
    await this.Apicalling(userInfo?._id, userInfo?.database);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modalone: !prevState.modalone,
    }));
    this.setState({ ShowBill: false });
  };
  handleStockTrxInvoiceShow = () => {
    this.setState({ ShowBill: true });
  };
  toggleDropdown = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  runthisfunction(id) {
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          Delete_targetINlist(id)
            .then((res) => {
              let selectedData = this.gridApi.getSelectedRows();
              this.gridApi.updateRowData({ remove: selectedData });
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        default:
      }
    });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridRef.current = params.api;

    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  handleChangeHeader = (e, value, index) => {
    let check = e.target.checked;
    if (check) {
      SelectedColums?.push(value);
    } else {
      const delindex = SelectedColums?.findIndex(
        (ele) => ele?.headerName === value?.headerName
      );

      SelectedColums?.splice(delindex, 1);
    }
  };
  parseCsv(csvData) {
    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          if (result.data && result.data.length > 0) {
            resolve(result.data);
          } else {
            reject(new Error("No data found in the CSV"));
          }
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
  generatePDF(parsedData) {
    let pdfsize = [Object.keys(parsedData[0])][0].length;
    let size = pdfsize > 15 ? "a1" : pdfsize < 14 > 10 ? "a3" : "a4";

    const doc = new jsPDF("landscape", "mm", size, false);
    doc.setTextColor(5, 87, 97);
    const tableData = parsedData.map((row) => Object.values(row));
    doc.addImage(Logo, "JPEG", 10, 10, 50, 30);
    let date = new Date();
    doc.setCreationDate(date);
    doc.text("UserAccount", 14, 51);
    doc.autoTable({
      head: [Object.keys(parsedData[0])],
      body: tableData,
      startY: 60,
    });

    doc.save("UserList.pdf");
  }

  exportToPDF = async () => {
    const csvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    try {
      const parsedData = await this.parseCsv(csvData);
      this.generatePDF(parsedData);
    } catch (error) {
      console.error("Error parsing CSV:", error);
    }
  };
  processCell = (params) => {
    return params.value;
  };

  convertCsvToExcel(csvData) {
    return new Promise((resolve) => {
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function (result) {
          const worksheet = XLSX.utils.json_to_sheet(result.data);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
          const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
          });
          const blob = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          resolve(blob);
        },
      });
    });
  }
  downloadExcelFile(blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Userlist.xlsx";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  exportToExcel = async (e) => {
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    const blob = await this.convertCsvToExcel(CsvData);
    this.downloadExcelFile(blob);
  };

  convertCSVtoExcel = () => {
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    Papa.parse(CsvData, {
      complete: (result) => {
        const ws = XLSX.utils.json_to_sheet(result.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const excelType = "xls";
        XLSX.writeFile(wb, `UserList.${excelType}`);
      },
    });
  };

  shiftElementUp = () => {
    let currentIndex = this.state.Arrindex;
    if (currentIndex > 0) {
      const myArrayCopy = [...this.state.SelectedcolumnDefs];
      const elementToMove = myArrayCopy.splice(currentIndex, 1)[0];
      this.setState({ Arrindex: currentIndex - 1 });
      myArrayCopy.splice(currentIndex - 1, 0, elementToMove);
      this.setState({ SelectedcolumnDefs: myArrayCopy });
    }
  };

  shiftElementDown = () => {
    let currentIndex = this.state.Arrindex;
    if (currentIndex < this.state.SelectedcolumnDefs.length - 1) {
      const myArrayCopy = [...this.state.SelectedcolumnDefs];
      const elementToMove = myArrayCopy.splice(currentIndex, 1)[0];
      this.setState({ Arrindex: currentIndex + 1 });
      myArrayCopy.splice(currentIndex + 1, 0, elementToMove);
      this.setState({ SelectedcolumnDefs: myArrayCopy });
    }
  };
  handleDate = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitDate = () => {
    const filteredItems = this.state.rowAllData?.filter((item) => {
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      const onlyDate = startDate.toISOString().split("T")[0];
      const onlyEndDate = endDate.toISOString().split("T")[0];

      return (
        onlyDate >= this.state.startDate && onlyEndDate <= this.state.EndDate
      );
    });
    this.setState({ rowData: filteredItems });
  };
  convertCsvToXml = () => {
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    Papa.parse(CsvData, {
      complete: (result) => {
        const rows = result.data;

        let xmlString = "<root>\n";

        rows.forEach((row) => {
          xmlString += "  <row>\n";
          row.forEach((cell, index) => {
            xmlString += `    <field${index + 1}>${cell}</field${index + 1}>\n`;
          });
          xmlString += "  </row>\n";
        });

        xmlString += "</root>";
        const blob = new Blob([xmlString], { type: "text/xml" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "output.xml";
        link.click();
      },
    });
  };

  HandleSetVisibleField = (e) => {
    e.preventDefault();

    this.gridApi.setColumnDefs(this.state.SelectedcolumnDefs);
    this.setState({ columnDefs: this.state.SelectedcolumnDefs });
    this.setState({ SelectedcolumnDefs: this.state.SelectedcolumnDefs });
    this.setState({ rowData: this.state.rowData });
    localStorage.setItem(
      "Promotional Activity Report",
      JSON.stringify(this.state.SelectedcolumnDefs)
    );
    this.LookupviewStart();
  };

  HeadingRightShift = () => {
    const updatedSelectedColumnDefs = [
      ...new Set([
        ...this.state.SelectedcolumnDefs.map((item) => JSON.stringify(item)),
        ...SelectedColums.map((item) => JSON.stringify(item)),
      ]),
    ].map((item) => JSON.parse(item));
    this.setState({
      SelectedcolumnDefs: [...new Set(updatedSelectedColumnDefs)], // Update the state with the combined array
    });
  };
  handleLeftShift = () => {
    let SelectedCols = this.state.SelectedcolumnDefs?.slice();
    let delindex = this.state.Arrindex; /* Your delete index here */

    if (SelectedCols && delindex >= 0) {
      const splicedElement = SelectedCols?.splice(delindex, 1); // Remove the element

      this.setState({
        SelectedcolumnDefs: SelectedCols, // Update the state with the modified array
      });
    }
  };

  handleFilter = (e) => {
    this.setState({ PromotionName: e.target.value });
    let headings;
    let maxKeys = 0;
    let elementWithMaxKeys = null;
    let AllMainData = [];
    let myHeadings = [];
    // console.log(this.state.AllData);
    if (e.target.value !== "NA") {
      let myarr = this.state.AllData?.filter(
        (ele, i) => ele[e.target.value]?.length
      );
      // console.log(myarr);
      myarr?.map((ele, i) => {
        AllMainData?.push(ele[e.target.value]);
      });
      console.log(AllMainData.flat());
      let flatarr = AllMainData?.flat();

      for (const element of flatarr) {
        const numKeys = Object.keys(element).length; // Get the number of keys in the current element
        if (numKeys > maxKeys) {
          maxKeys = numKeys; // Update the maximum number of keys
          elementWithMaxKeys = element; // Update the element with maximum keys
        }
      }
      if (elementWithMaxKeys) {
        let findheading = Object.keys(elementWithMaxKeys);
        let index = findheading.indexOf("_id");
        if (index > -1) {
          findheading.splice(index, 1);
        }
        let index1 = findheading.indexOf("status");
        if (index1 > -1) {
          findheading.splice(index1, 1);
        }
        // if(findheading.indexOf("productId")){

        let index2 = findheading.indexOf("productId");
        if (index2 > -1) {
          findheading.splice(index2, 1);
        }
        // }
        headings = findheading?.map((ele) => {
          if (ele == "freeOtherProducts") {
            return {
              headerName: "freeOtherProducts",
              field: "freeOtherProducts",
              filter: true,
              width: 180,
              cellRendererFramework: (params) => {
                return (
                  <>
                    <div className="d-flex justify-content-center">
                      <span>
                        {params.data?.freeOtherProducts?.length} Product
                      </span>
                    </div>
                  </>
                );
              },
            };
          }
          return {
            headerName: ele,
            field: ele,
            filter: true,
            sortable: true,
          };
        });
        myHeadings = [...headings];
      } else {
        myHeadings = [];
      }

      let Product = [
        // {
        //   headerName: "Actions",
        //   field: "sortorder",
        //   field: "transactions",
        //   width: 190,
        //   cellRendererFramework: (params) => {
        //     console.log(params?.data);
        //     return (
        //       <div className="actions cursor-pointer">
        //         {this.state.InsiderPermissions &&
        //           this.state.InsiderPermissions?.View && (
        //             <Route
        //               render={({ history }) => (
        //                 <Eye
        //                   className="mr-50"
        //                   size="25px"
        //                   color="green"
        //                   onClick={() => {
        //                     history.push({
        //                       pathname: `/app/ajgroup/account/EditPromotionalActivity/${params?.data?._id}`,
        //                       state: {
        //                         data: params?.data,
        //                         key: this.state.PromotionName,
        //                         type: "View",
        //                       },
        //                     });
        //                   }}
        //                 />
        //               )}
        //             />
        //           )}

        //         {this.state.InsiderPermissions &&
        //           this.state.InsiderPermissions?.Edit && (
        //             <Route
        //               render={({ history }) => (
        //                 <Edit
        //                   className="mr-50"
        //                   size="25px"
        //                   color="green"
        //                   onClick={() => {
        //                     history.push({
        //                       pathname: `/app/ajgroup/account/EditPromotionalActivity/${params?.data?._id}`,
        //                       state: {
        //                         data: params?.data,
        //                         key: this.state.PromotionName,
        //                         type: "Edit",
        //                       },
        //                     });
        //                   }}
        //                 />
        //               )}
        //             />
        //           )}

        //         {this.state.InsiderPermissions &&
        //           this.state.InsiderPermissions?.Delete && (
        //             <Route
        //               render={() => (
        //                 <Trash2
        //                   className="mr-50"
        //                   size="25px"
        //                   color="red"
        //                   onClick={() => {
        //                     this.runthisfunction(params?.data?._id);
        //                   }}
        //                 />
        //               )}
        //             />
        //           )}
        //       </div>
        //     );
        //   },
        // },

        ...myHeadings,
        {
          headerName: "Status",
          field: "status",
          filter: true,
          width: 150,
          cellRendererFramework: (params) => {
            return params.data?.status === "Active" ? (
              <div className="badge badge-pill badge-success">
                {params.data?.status}
              </div>
            ) : params.data?.status === "Deactive" ? (
              <div className="badge badge-pill badge-warning">
                {params.data?.status}
              </div>
            ) : null;
          },
        },
        // {
        //   headerName: "Created date",
        //   field: "createdAt",
        //   filter: true,
        //   sortable: true,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <>
        //         <div className="actions cursor-pointer"></div>
        //       </>
        //     );
        //   },
        // },
        // {
        //   headerName: "Updated date",
        //   field: "updatedAt",
        //   filter: true,
        //   sortable: true,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <>
        //         <div className="actions cursor-pointer"></div>
        //       </>
        //     );
        //   },
        // },
      ];
      if (flatarr) {
        this.setState({ rowData: flatarr });
        this.setState({ rowAllData: flatarr });
      } else {
        swal("No Data Found");
      }
      this.setState({ AllcolumnDefs: Product });

      let userHeading = JSON.parse(
        localStorage.getItem("Promotional Activity Report")
      );
      if (userHeading?.length) {
        this.setState({ columnDefs: userHeading });
        this.gridApi.setColumnDefs(userHeading);
        this.setState({ SelectedcolumnDefs: userHeading });
      } else {
        this.setState({ columnDefs: Product });
        this.setState({ SelectedcolumnDefs: Product });
      }
      this.setState({ SelectedCols: Product });
      if (myarr.length) {
        this.setState({ Table: true });
      } else {
        this.setState({ Table: false });
      }
    } else {
      this.setState({ Table: false });
    }
    this.setState({ SelectedFilter: e.target.value });
  };
  handleParentSubmit = (e) => {
    e.preventDefault();
    let SuperAdmin = JSON.parse(localStorage.getItem("SuperadminIdByMaster"));
    let id = SuperAdmin.split(" ")[0];
    let db = SuperAdmin.split(" ")[1];
    this.Apicalling(id, db);
  };
  handleDropdownChange = (selectedValue) => {
    localStorage.setItem("SuperadminIdByMaster", JSON.stringify(selectedValue));
  };
  render() {
    if (this.state.Loading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20rem",
          }}>
          <Spinner
            style={{
              height: "4rem",
              width: "4rem",
            }}
            color="primary">
            Loading...
          </Spinner>
        </div>
      );
    }
    const {
      rowData,
      columnDefs,
      defaultColDef,
      SelectedcolumnDefs,
      isOpen,
      InsiderPermissions,
      SelectedCols,
      AllcolumnDefs,
    } = this.state;
    return (
      <>
        <Col className="app-user-list">
          <Col sm="12">
            <Card>
              <Row className="ml-2 mt-2 mr-2">
                <Col lg="3" md="3" sm="12">
                  <h3 className="float-left " style={{ fontWeight: "600" }}>
                    Promotional Activity Report
                  </h3>
                </Col>
                {this.state.MasterShow && this.state.MasterShow ? (
                  <Col lg="4" md="4" sm="6">
                    <SuperAdminUI
                      onDropdownChange={this.handleDropdownChange}
                      onSubmit={this.handleParentSubmit}
                    />
                  </Col>
                ) : (
                  <Col></Col>
                )}
                {InsiderPermissions && InsiderPermissions?.View && (
                  <Col lg="2" md="2" sm="2" xs="2">
                    <CustomInput
                      type="select"
                      name="typeofpromotion"
                      className="float-right"
                      onChange={(e) => this.handleFilter(e)}>
                      <option value="NA">--Select Promotion Type--</option>
                      {this.state.Dropdown &&
                        this.state.Dropdown?.map((ele, i) => {
                          return (
                            <>
                              <option value={ele}>{ele}</option>
                            </>
                          );
                        })}
                    </CustomInput>
                  </Col>
                )}
                <Col lg="1" md="1" sm="6" xs="6">
                  {InsiderPermissions && InsiderPermissions?.View && (
                    <span className="">
                      <FaFilter
                        style={{ cursor: "pointer" }}
                        title="filter coloumn"
                        size="35px"
                        onClick={this.LookupviewStart}
                        color="#39cccc"
                        className="float-right mt-1"
                      />
                    </span>
                  )}
                  {InsiderPermissions && InsiderPermissions?.Download && (
                    <span
                      onMouseEnter={this.toggleDropdown}
                      onMouseLeave={this.toggleDropdown}
                      className="">
                      <div className="dropdown-container float-right">
                        <ImDownload
                          style={{ cursor: "pointer" }}
                          title="Download file"
                          size="35px"
                          className="dropdown-button mt-1"
                          color="#39cccc"
                        />
                        {isOpen && (
                          <div
                            style={{
                              position: "absolute",
                              zIndex: "1",
                            }}
                            className="dropdown-content dropdownmy">
                            <h5
                              onClick={() => this.exportToPDF()}
                              style={{ cursor: "pointer" }}
                              className=" mx-1 myactive mt-1">
                              .PDF
                            </h5>
                            <h5
                              onClick={() => this.gridApi.exportDataAsCsv()}
                              style={{ cursor: "pointer" }}
                              className=" mx-1 myactive">
                              .CSV
                            </h5>
                            <h5
                              onClick={this.convertCSVtoExcel}
                              style={{ cursor: "pointer" }}
                              className=" mx-1 myactive">
                              .XLS
                            </h5>
                            <h5
                              onClick={this.exportToExcel}
                              style={{ cursor: "pointer" }}
                              className=" mx-1 myactive">
                              .XLSX
                            </h5>
                            <h5
                              onClick={() => this.convertCsvToXml()}
                              style={{ cursor: "pointer" }}
                              className=" mx-1 myactive">
                              .XML
                            </h5>
                          </div>
                        )}
                      </div>
                    </span>
                  )}
                </Col>
              </Row>
              <CardBody style={{ marginTop: "-1.5rem" }}>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(5)}>
                              5
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}>
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}>
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}>
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}>
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-end mb-1">
                        <div className="table-input mr-1">
                          <Label>Start Date</Label>
                          <Input
                            type="date"
                            name="startDate"
                            value={this.state.startDate}
                            onChange={this.handleDate}
                          />
                        </div>
                        <div className="table-input mr-1">
                          <Label>End Date</Label>
                          <Input
                            type="date"
                            name="EndDate"
                            value={this.state.EndDate}
                            onChange={this.handleDate}
                          />
                        </div>
                        <div className="table-input mr-1">
                          <Button
                            type="submit"
                            className="mt-1"
                            color="primary"
                            onClick={this.handleSubmitDate}>
                            Submit
                          </Button>
                        </div>
                        <div className="table-input mr-1">
                          <Input
                            className="mt-1"
                            placeholder="search Item here..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer className="ag-theme-alpine">
                      {(context) => (
                        <AgGridReact
                          id="myAgGrid"
                          gridOptions={this.gridOptions}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                          ref={this.gridRef} // Attach the ref to the grid
                          domLayout="autoHeight" // Adjust layout as needed
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Col>

        <Modal
          isOpen={this.state.modal}
          toggle={this.LookupviewStart}
          className={this.props.className}
          style={{ maxWidth: "1050px" }}>
          <ModalHeader toggle={this.LookupviewStart}>Change Fileds</ModalHeader>
          <ModalBody className="modalbodyhead">
            <Row>
              <Col lg="4" md="4" sm="12" xl="4" xs="12">
                <h4>Available Columns</h4>
                <div className="mainshffling">
                  <div class="ex1">
                    {AllcolumnDefs &&
                      AllcolumnDefs?.map((ele, i) => {
                        return (
                          <>
                            <div
                              onClick={(e) =>
                                this.handleChangeHeader(e, ele, i)
                              }
                              key={i}
                              className="mycustomtag mt-1">
                              <span className="mt-1">
                                <h5
                                  style={{ cursor: "pointer" }}
                                  className="allfields">
                                  <input
                                    type="checkbox"
                                    // checked={check && check}
                                    className="mx-1"
                                  />

                                  {ele?.headerName}
                                </h5>
                              </span>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </Col>
              <Col lg="2" md="2" sm="12" xl="2" xs="12" className="colarrowbtn">
                <div className="mainarrowbtn">
                  <div style={{ cursor: "pointer" }}>
                    <FaArrowAltCircleRight
                      onClick={this.HeadingRightShift}
                      className="arrowassign"
                      size="30px"
                    />
                  </div>
                  <div style={{ cursor: "pointer" }} className="my-2">
                    <FaArrowAltCircleLeft
                      onClick={this.handleLeftShift}
                      className="arrowassign"
                      size="30px"
                    />
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6" sm="12" xl="6" xs="12">
                <Row>
                  <Col lg="8" md="8" sm="12" xs="12">
                    <h4>Visible Columns</h4>
                    <div className="mainshffling">
                      <div class="ex1">
                        {SelectedcolumnDefs &&
                          SelectedcolumnDefs?.map((ele, i) => {
                            return (
                              <>
                                <div key={i} className="mycustomtag mt-1">
                                  <span className="mt-1">
                                    <h5
                                      onClick={() =>
                                        this.setState({ Arrindex: i })
                                      }
                                      style={{
                                        cursor: "pointer",
                                        backgroundColor: `${
                                          this.state.Arrindex === i
                                            ? "#1877f2"
                                            : ""
                                        }`,
                                      }}
                                      className="allfields">
                                      <IoMdRemoveCircleOutline
                                        onClick={() => {
                                          const SelectedCols =
                                            this.state.SelectedcolumnDefs?.slice();
                                          const delindex =
                                            SelectedCols?.findIndex(
                                              (element) =>
                                                element?.headerName ==
                                                ele?.headerName
                                            );

                                          if (SelectedCols && delindex >= 0) {
                                            const splicedElement =
                                              SelectedCols?.splice(delindex, 1); // Remove the element
                                            // splicedElement contains the removed element, if needed

                                            this.setState({
                                              SelectedcolumnDefs: SelectedCols, // Update the state with the modified array
                                            });
                                          }
                                        }}
                                        style={{ cursor: "pointer" }}
                                        size="25px"
                                        color="red"
                                        className="mr-1"
                                      />

                                      {ele?.headerName}
                                    </h5>
                                  </span>
                                </div>
                              </>
                            );
                          })}
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" sm="12" xs="12">
                    <div className="updownbtn justify-content-center">
                      <div>
                        <BsFillArrowUpSquareFill
                          className="arrowassign mb-1"
                          size="30px"
                          onClick={this.shiftElementUp}
                        />
                      </div>
                      <div>
                        <BsFillArrowDownSquareFill
                          onClick={this.shiftElementDown}
                          className="arrowassign"
                          size="30px"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex justify-content-center">
                  {/* <Button onClick={this.HandleSetVisibleField} color="primary">
                    Submit
                  </Button> */}

                  <Badge
                    style={{ cursor: "pointer" }}
                    className=""
                    color="primary"
                    onClick={this.HandleSetVisibleField}>
                    Submit
                  </Badge>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.modalone}
          toggle={this.togglemodal}
          className={this.props.className}
          style={{ maxWidth: "1050px" }}>
          <ModalHeader toggle={this.togglemodal}>
            {this.state.ShowBill ? "Bill Download" : "All Products"}
          </ModalHeader>
          <ModalBody
            className={`${this.state.ShowBill ? "p-1" : "modalbodyhead"}`}>
            <Row className="p-2">
              <Col>
                <div className="d-flex justify-content-center">
                  <h4>Sales Order List</h4>
                </div>
              </Col>
            </Row>
            {this.state.ShowBill ? (
              <>
                <StockTrxInvoice ViewOneData={this.state.ViewOneData} />
              </>
            ) : (
              <>
                {this.state.ViewOneUserView ? (
                  <>
                    <Row>
                      <Col className="d-flex">
                        <div>
                          <span>UserName:</span>
                        </div>
                        <div>
                          <h5 className="">
                            {this.state.ViewOneData &&
                              this.state.ViewOneData?.fullName}
                          </h5>
                        </div>
                      </Col>

                      <Col className="d-flex">
                        <div>
                          <span>Grand Total :</span>
                        </div>
                        <div>
                          <strong>
                            {this.state.ViewOneData &&
                              this.state.ViewOneData?.grandTotal}
                          </strong>
                          Rs/-
                        </div>
                      </Col>
                      <Col>
                        {this.state.ViewOneData?.status == "completed" ? (
                          <>
                            <div className="d-flex justify-content-center">
                              <h5>
                                Status:
                                <Badge className="mx-2" color="primary">
                                  {this.state.ViewOneData?.status}
                                </Badge>
                              </h5>
                            </div>
                          </>
                        ) : (
                          <>
                            <h5>
                              status:
                              <Badge className="mx-2" color="primary">
                                {this.state.ViewOneData?.status}
                              </Badge>
                            </h5>
                          </>
                        )}
                      </Col>
                      {/* <Col>
                        <Label>Download Invoice :</Label>
                        <div className="d-flex justify-content-center">
                          <FaDownload
                            onClick={this.handleStockTrxInvoiceShow}
                            color="#00c0e"
                            fill="#00c0e"
                            style={{ cursor: "pointer" }}
                            size={20}
                          />
                        </div>
                      </Col> */}
                    </Row>

                    <Row>
                      <Col>
                        <Table style={{ cursor: "pointer" }} responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Product Name</th>
                              <th>Price</th>
                              <th>Size</th>
                              <th>Unit</th>
                              <th>HSN CODE</th>
                              <th>GST</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.ViewOneData?.orderItems &&
                              this.state.ViewOneData?.orderItems?.map(
                                (ele, i) => (
                                  <>
                                    <tr>
                                      <th scope="row">{i + 1}</th>
                                      <td>{ele?.productId?.Product_Title}</td>
                                      <td>{ele?.productId?.Product_MRP}</td>
                                      <td>{ele?.Size}</td>
                                      <td>{ele?.unitType}</td>
                                      <td>{ele?.productId?.HSN_Code}</td>
                                      <td>{ele?.productId["GSTRate"]}</td>
                                      <td>{ele?.qty}</td>
                                      <td>
                                        {ele?.productId?.Product_MRP *
                                          ele?.Size *
                                          ele?.qty}
                                      </td>
                                    </tr>
                                  </>
                                )
                              )}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </>
                ) : null}
              </>
            )}
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default PromotionalActivityReport;
