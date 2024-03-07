import React, { useRef } from "react";
import { Route } from "react-router-dom";
import xmlJs from "xml-js";
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
  Button,
  ModalHeader,
  ModalBody,
  Badge,
  Spinner,
} from "reactstrap";
import { FaPencilAlt } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import EditAccount from "../accounts/EditAccount";
import ViewAccount from "../accounts/ViewAccount";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Logo from "../../../../assets/img/profile/pages/logomain.png";
import Papa from "papaparse";
import { Eye, Trash2, ChevronDown, Edit } from "react-feather";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFilter,
  FaPlus,
} from "react-icons/fa";
import swal from "sweetalert";
import {
  CreateAccountList,
  CreateAccountView,
  DeleteAccount,
} from "../../../../ApiEndPoint/ApiCalling";
import {
  BsCloudDownloadFill,
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import * as XLSX from "xlsx";
import UserContext from "../../../../context/Context";
import { CheckPermission } from "./CheckPermission";
import SuperAdminUI from "../../../SuperAdminUi/SuperAdminUI";

const SelectedColums = [];

class AccounSearch extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.gridApi = null;
    this.state = {
      isOpen: false,
      MasterShow: false,
      InsiderPermissions: {},
      Arrindex: "",
      rowData: [],
      setMySelectedarr: [],
      SelectedCols: [],
      paginationPageSize: 5,

      currenPageSize: "",
      getPageSize: "",
      columnDefs: [
        {
          headerName: "UID",
          valueGetter: "node.rowIndex + 1",
          field: "node.rowIndex + 1",
          width: 80,
          filter: true,
        },
        {
          headerName: "Actions",
          field: "sortorder",
          field: "transactions",
          width: 190,
          cellRendererFramework: (params) => {
            return (
              <div className="actions cursor-pointer">
                {this.state.InsiderPermissions &&
                  this.state.InsiderPermissions?.View && (
                    <Route
                      render={({ history }) => (
                        <span
                          style={{
                            border: "1px solid white",
                            padding: "10px",
                            borderRadius: "30px",
                            backgroundColor: "#39cccc",
                          }}>
                          <Eye
                            className=""
                            size="20px"
                            color="white"
                            onClick={() =>
                              history.push(
                                `/app/SoftNumen/account/ViewAccount/${params?.data?._id}`
                              )
                            }
                          />
                        </span>
                      )}
                    />
                  )}
                {this.state.InsiderPermissions &&
                  this.state.InsiderPermissions?.Edit && (
                    <Route
                      render={({ history }) => (
                        <span
                          style={{
                            border: "1px solid white",
                            padding: "10px",
                            borderRadius: "30px",
                            backgroundColor: "rgb(212, 111, 16)",
                            marginLeft: "3px",
                          }}>
                          <FaPencilAlt
                            className=""
                            size="20px"
                            color="white"
                            onClick={() =>
                              history.push(
                                `/app/SoftNumen/account/CreateAccount/${params?.data?._id}`
                              )
                            }
                            // onClick={() => {
                            //   this.handleChangeEdit(params?.data, "Editable");
                            // }}
                          />
                        </span>
                      )}
                    />
                  )}
                {this.state.InsiderPermissions &&
                  this.state.InsiderPermissions?.Delete && (
                    <Route
                      render={() => (
                        <span
                          style={{
                            border: "1px solid white",
                            padding: "10px",
                            borderRadius: "30px",
                            backgroundColor: "rgb(236, 24, 9)",
                            marginLeft: "3px",
                          }}>
                          <Trash2
                            className=""
                            size="20px"
                            color="white"
                            onClick={() => {
                              this.runthisfunction(params?.data?._id);
                            }}
                          />
                        </span>
                      )}
                    />
                  )}
              </div>
            );
          },
        },
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

        {
          headerName: "Created by",
          field: "created_by.firstName",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.created_by?.firstName}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Role Id",
          field: "rolename._id",
          filter: true,
          sortable: true,
          editable: true,

          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.rolename?._id}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "First Name",
          field: "firstName",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.firstName}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "last Name",
          field: "lastName",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.lastName}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Email",
          field: "email",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.email}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Mobile Number",
          field: "mobileNumber",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.mobileNumber}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Pin code",
          field: "pincode",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.pincode}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Aadhar No",
          field: "Aadhar_No",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.Aadhar_No}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Account Name",
          field: "Account_Name",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.Account_Name}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Account No",
          field: "Account_No",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.Account_No}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "IFSC code",
          field: "Ifsc_code",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.Ifsc_code}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "City",
          field: "City",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.City}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "State",
          field: "State",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.State}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Driving license Num",
          field: "DL_Num",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.DL_Num}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Date of Birth",
          field: "DOB",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.DOB?.split("T")[0]}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Father Name",
          field: "Father_name",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.Father_name}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Pan No",
          field: "Pan_No",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.Pan_No}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Passport No",
          field: "PassportNo",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.PassportNo}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Address",
          field: "address",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.address}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Salary",
          field: "last_job_Salary",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.last_job_Salary}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "last job Profile",
          field: "last_job_Profile",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.last_job_Profile}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "last job Address",
          field: "last_job_address",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.last_job_address}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Firm Name",
          field: "last_job_firm_name",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.last_job_firm_name}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "RoleName",
          field: "rolename.roleName",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            console.log(params.data);
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.rolename?.roleName}</span>
                </div>
              </>
            );
          },
        },

        {
          headerName: "Created date",
          field: "createdAt",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <span>{params?.data?.createdAt?.split("T")[0]}</span>
                </div>
              </>
            );
          },
        },
        {
          headerName: "Updated date",
          field: "updatedAt",
          filter: true,
          sortable: true,
          cellRendererFramework: (params) => {
            return (
              <>
                <div className="actions cursor-pointer">
                  <div className="actions cursor-pointer">
                    <span>{params?.data?.updatedAt?.split("T")[0]}</span>
                  </div>
                </div>
              </>
            );
          },
        },
      ],
      AllcolumnDefs: [],
      SelectedcolumnDefs: [],
      defaultColDef: {
        sortable: true,
        enablePivot: true,
        enableValue: true,
        resizable: true,
        suppressMenu: true,
      },
    };
  }

  LookupviewStart = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  handleChangeEdit = (data, types) => {
    let type = types;
    if (type == "readonly") {
      this.setState({ ViewOneUserView: true });
      this.setState({ ViewOneData: data });
    } else {
      this.setState({ EditOneUserView: true });
      this.setState({ EditOneData: data });
    }
  };

  async Apicalling(id, db) {
    this.setState({ Loading: true });
    this.setState({ AllcolumnDefs: this.state.columnDefs });

    let userHeading = JSON.parse(localStorage.getItem("AccountSearch"));
    if (userHeading?.length) {
      this.setState({ columnDefs: userHeading });
      this.gridApi.setColumnDefs(userHeading);
      this.setState({ SelectedcolumnDefs: userHeading });
    } else {
      this.setState({ columnDefs: this.state.columnDefs });
      this.setState({ SelectedcolumnDefs: this.state.columnDefs });
    }
    this.setState({ SelectedCols: this.state.columnDefs });
    await CreateAccountList(id, db)
      .then((res) => {
        this.setState({ Loading: false });

        let value = res?.adminDetails;
        if (value.length) {
          this.setState({ rowData: value });
        }
      })
      .catch((err) => {
        this.setState({ Loading: false });
        this.setState({ rowData: [] });

        console.log(err);
      });
  }

  async componentDidMount() {
    const UserInformation = this.context?.UserInformatio;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    if (pageparmission?.rolename?.roleName === "MASTER") {
      this.setState({ MasterShow: true });
    }
    const InsidePermissions = CheckPermission("Create User");
    this.setState({ InsiderPermissions: InsidePermissions });
    await this.Apicalling(pageparmission?._id, pageparmission?.database);
  }

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
          DeleteAccount(id)
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
    // console.log(this.state.columnDefs);
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    const blob = await this.convertCsvToExcel(CsvData);
    this.downloadExcelFile(blob);
  };

  formatHeader = (propertyPath) => {
    return propertyPath
      .split(".")
      .pop()
      .split(/(?=[A-Z])/)
      .join(" ");
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

  HandleSampleDownload = () => {
    let headings;
    let maxKeys = 0;
    let elementWithMaxKeys = null;
    for (const element of this.state.rowData) {
      const numKeys = Object.keys(element).length; // Get the number of keys in the current element
      if (numKeys > maxKeys) {
        maxKeys = numKeys; // Update the maximum number of keys
        elementWithMaxKeys = element; // Update the element with maximum keys
      }
    }
    let findheading = Object.keys(elementWithMaxKeys);
    let index = findheading.indexOf("_id");
    if (index > -1) {
      findheading.splice(index, 1);
    }
    let index1 = findheading.indexOf("__v");
    if (index1 > -1) {
      findheading.splice(index1, 1);
    }
    headings = findheading?.map((ele) => {
      return {
        headerName: ele,
        field: ele,
        filter: true,
        sortable: true,
      };
    });

    let CCvData = headings?.map((ele, i) => {
      return ele?.field;
    });
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    const formattedHeaders = CCvData.join(",");
    // console.log(CsvData);
    // console.log(formattedHeaders);
    let myrow = CsvData?.slice();

    const rows = CsvData.split("\n");
    rows?.splice(0, 1, formattedHeaders);
    const headers = rows[0].split(",");
    let mydata = rows.join(",");
    // Extract headers from the first row
    Papa.parse(mydata, {
      complete: (result) => {
        const ws = XLSX.utils.json_to_sheet(result.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const excelType = "xlsx";
        XLSX.writeFile(wb, `CreateUserSample.${excelType}`);
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
  convertCsvToXml = () => {
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    Papa.parse(CsvData, {
      complete: (result) => {
        const rows = result.data;

        // Create XML
        let xmlString = "<root>\n";

        rows.forEach((row) => {
          xmlString += "  <row>\n";
          row.forEach((cell, index) => {
            xmlString += `    <field${index + 1}>${cell}</field${index + 1}>\n`;
          });
          xmlString += "  </row>\n";
        });

        xmlString += "</root>";

        // setXmlData(xmlString);

        // Create a download link
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
      "AccountSearch",
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
    let SelectedCols = this.state.SelectedcolumnDefs.slice();
    let delindex = this.state.Arrindex; /* Your delete index here */

    if (SelectedCols && delindex >= 0) {
      const splicedElement = SelectedCols.splice(delindex, 1); // Remove the element

      this.setState({
        SelectedcolumnDefs: SelectedCols, // Update the state with the modified array
      });
    }
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
      SelectedCols,
      InsiderPermissions,
      AllcolumnDefs,
    } = this.state;
    return (
      <>
        <Row className="app-user-list">
          {this.state.EditOneUserView && this.state.EditOneUserView ? (
            <Row className="card">
              <Col>
                <div className="d-flex justify-content-end p-1">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ EditOneUserView: false });
                      this.componentDidMount();
                    }}
                    color="danger">
                    Back
                  </Button>
                </div>
              </Col>

              <EditAccount EditOneData={this.state.EditOneData} />
            </Row>
          ) : (
            <>
              {this.state.ViewOneUserView && this.state.ViewOneUserView ? (
                <>
                  <Row className="card">
                    <Col>
                      <h1 className="float-left">View User</h1>
                    </Col>
                    <Col>
                      <div className="d-flex justify-content-end p-1">
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ ViewOneUserView: false });
                          }}
                          color="danger">
                          Back
                        </Button>
                      </div>
                    </Col>
                    <ViewAccount ViewOneData={this.state.ViewOneData} />
                  </Row>
                </>
              ) : (
                <>
                  <Col sm="12">
                    <Card>
                      <Row className="mt-2 ml-2 mr-2 ">
                        <Col lg="2" md="2" sm="12">
                          <h1
                            className="float-left "
                            style={{ fontWeight: "600" }}>
                            User list
                          </h1>
                        </Col>
                        {this.state.MasterShow && (
                          <Col>
                            <SuperAdminUI
                              onDropdownChange={this.handleDropdownChange}
                              onSubmit={this.handleParentSubmit}
                            />
                          </Col>
                        )}
                        <Col>
                          {InsiderPermissions &&
                            InsiderPermissions.Download && (
                              <>
                                <span
                                  onMouseEnter={this.toggleDropdown}
                                  onMouseLeave={this.toggleDropdown}
                                  className="mx-1">
                                  <div className="dropdown-container float-right">
                                    <ImDownload
                                      style={{ cursor: "pointer" }}
                                      title="download file"
                                      size="35px"
                                      className="dropdown-button mb-1"
                                      color="#39cccc"
                                    />
                                    {isOpen && (
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "1",
                                          border: "1px solid #39cccc",
                                          backgroundColor: "white",
                                        }}
                                        className="dropdown-content dropdownmy">
                                        <h5
                                          onClick={() => this.exportToPDF()}
                                          style={{ cursor: "pointer" }}
                                          className=" mx-1 myactive mt-1">
                                          .PDF
                                        </h5>
                                        <h5
                                          onClick={() =>
                                            this.gridApi.exportDataAsCsv()
                                          }
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

                                        {InsiderPermissions &&
                                          InsiderPermissions?.BulkUpload && (
                                            <h5
                                              onClick={
                                                this.HandleSampleDownload
                                              }
                                              style={{ cursor: "pointer" }}
                                              className=" mx-1 myactive">
                                              Format
                                            </h5>
                                          )}
                                      </div>
                                    )}
                                  </div>
                                </span>
                              </>
                            )}
                          {InsiderPermissions && InsiderPermissions.View && (
                            <>
                              <span className="mx-1">
                                <FaFilter
                                  style={{ cursor: "pointer" }}
                                  title="filter coloumn"
                                  size="35px"
                                  onClick={this.LookupviewStart}
                                  color="#39cccc"
                                  className="float-right mb-1"
                                />
                              </span>
                            </>
                          )}
                          {InsiderPermissions && InsiderPermissions.Create && (
                            <>
                              <span className="">
                                <Route
                                  render={({ history }) => (
                                    <Button
                                      style={{
                                        cursor: "pointer",
                                        backgroundColor: "#39cccc",
                                        color: "white",
                                        fontWeight: "600",
                                      }}
                                      className="float-right mr-1 mb-2"
                                      color="#39cccc"
                                      onClick={() =>
                                        history.push(
                                          "/app/SoftNumen/account/CreateAccount/0"
                                        )
                                      }>
                                      <FaPlus size={15} /> User
                                    </Button>
                                  )}
                                />
                              </span>
                              <span>
                                <Route
                                  render={({ history }) => (
                                    <Button
                                      style={{
                                        cursor: "pointer",
                                        backgroundColor: "#39cccc",
                                        color: "white",
                                        fontWeight: "600",
                                      }}
                                      className="float-right mr-1 "
                                      color="#39cccc"
                                      onClick={() =>
                                        history.push(
                                          "/app/Ajgroup/account/AssignTeamMember"
                                        )
                                      }>
                                      Assign Team
                                    </Button>
                                  )}
                                />
                              </span>
                            </>
                          )}
                        </Col>
                      </Row>
                      <Row></Row>
                      {InsiderPermissions && InsiderPermissions?.View && (
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
                                      <ChevronDown
                                        className="ml-50"
                                        size={15}
                                      />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                      <DropdownItem
                                        tag="div"
                                        onClick={() => this.filterSize(8)}>
                                        8
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
                                    <Input
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
                                    gridOptions={{
                                      enableRangeSelection: true, // Allows copying ranges of cells
                                      enableClipboard: true, // Enables clipboard functionality
                                    }}
                                    // gridOptions={this.gridOptions}
                                    rowSelection="multiple"
                                    defaultColDef={defaultColDef}
                                    columnDefs={columnDefs}
                                    rowData={rowData}
                                    onGridReady={this.onGridReady}
                                    colResizeDefault={"shift"}
                                    animateRows={true}
                                    floatingFilter={false}
                                    pagination={true}
                                    paginationPageSize={
                                      this.state.paginationPageSize
                                    }
                                    pivotPanelShow="always"
                                    enableRtl={
                                      context.state.direction === "rtl"
                                    }
                                    ref={this.gridRef} // Attach the ref to the grid
                                    domLayout="autoHeight" // Adjust layout as needed
                                  />
                                )}
                              </ContextLayout.Consumer>
                            </div>
                          )}
                        </CardBody>
                      )}
                    </Card>
                  </Col>
                </>
              )}
            </>
          )}
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.LookupviewStart}
          className={this.props.className}
          style={{ maxWidth: "1050px" }}>
          <ModalHeader toggle={this.LookupviewStart}>Change Fileds</ModalHeader>
          <ModalBody className="modalbodyhead">
            <Row>
              <Col lg="4" md="4" sm="12" xl="4" xs="12">
                <h4>Avilable Columns</h4>
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
                                            this.state.SelectedcolumnDefs.slice();
                                          const delindex =
                                            SelectedCols.findIndex(
                                              (element) =>
                                                element?.headerName ==
                                                ele?.headerName
                                            );

                                          if (SelectedCols && delindex >= 0) {
                                            const splicedElement =
                                              SelectedCols.splice(delindex, 1); // Remove the element
                                            // splicedElement contains the removed element, if needed

                                            this.setState({
                                              SelectedcolumnDefs: SelectedCols, // Update the state with the modified array
                                            });
                                          }
                                          // const delindex =
                                          //   SelectedCols.findIndex(
                                          //     (element) =>
                                          //       element?.headerName ==
                                          //       ele?.headerName
                                          //   );

                                          // SelectedCols?.splice(delindex, 1);
                                          // this.setState({
                                          //   SelectedcolumnDefs: SelectedCols,
                                          // });
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
                  <Button onClick={this.HandleSetVisibleField} color="primary">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default AccounSearch;
