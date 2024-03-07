export const Roles = [
  {
    title: "Dashboard",
    TabName: [
      {
        title: "Dashboard",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Users",
    TabName: [
      {
        title: "Create User",
        permission: [
          "View",
          "Create",
          "Edit",
          "Delete",
          "Download",
          "BulkUpload",
        ],
      },
      {
        title: "Roles and Persmissions",
        permission: ["View", "Create", "Edit", "Delete", "Download", , "NA"],
      },
      {
        title: "Create Customer",
        permission: [
          "View",
          "Create",
          "Edit",
          "Delete",
          "Download",
          "BulkUpload",
        ],
      },
      {
        title: "Create Transporter",
        permission: [
          "View",
          "Create",
          "Edit",
          "Delete",
          "Download",
          "BulkUpload",
        ],
      },
    ],
  },

  {
    title: "Sales",
    TabName: [
      {
        title: "Sales Invoice",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },

      {
        title: "Sales Order",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Place Order",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },

      {
        title: "Pending Order",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Complete Order",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Dispatch details",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Sales Return",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Target Creation",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Promotional Activity",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Auto Billing Lock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Achievement",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "CreditNote",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Purchase",
    TabName: [
      {
        title: "Purchase Order",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Purchase Pending",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Purchase Complete",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Purchase Invoice",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Purchase Damage",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Debit Notes",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },

      {
        title: "Purchase Return",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Transaction",
    TabName: [
      {
        title: "Receipt",
        permission: [
          "View",
          "Create",
          "Edit",
          "Delete",
          "Download",
          "BulkUpload",
        ],
      },
      {
        title: "Payment",
        permission: [
          "View",
          "Create",
          "Edit",
          "Delete",
          "Download",
          "BulkUpload",
        ],
      },
      {
        title: "Cashbook",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Party Ledger",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Vendor Ledger",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },

  {
    title: "Report",
    TabName: [
      {
        title: "Party List",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Receipt and Payment Customized",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Stock Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Order Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      // {
      //   title: "Overdue Report",
      //  permission: ["View", "Create", "Edit", "Delete","Download"],
      // },
      // {
      //   title: "Sales Report and Amount",
      //  permission: ["View", "Create", "Edit", "Delete","Download"],
      // },
      {
        title: "Purchase Report and Amount",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Team and Target Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },

      {
        title: "Partywise ledger",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Transportor Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Target Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },

      {
        title: "HSN Wise sale Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Product List with HSN and GST",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Out Standing Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Overdue Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },

      {
        title: "Cashbook Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },

  {
    title: "All GSTR",
    TabName: [
      {
        title: "GSTR 1",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "GSTR 3B",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "GSTR 2B",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "GSTR 9",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Purchase Reports",
    TabName: [
      {
        title: "Purchase Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Purchase Return Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Low Stock Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Stock Reports",
    TabName: [
      {
        title: "Dead Stock Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Closing Stock Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "WareHouse Stock Shortage",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Damage Reports",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Stock Reconcilation Monthly",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "WareHouse Stock Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "WareHouse Reports",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Sales Reports",
    TabName: [
      {
        title: "Dead Parties Reports",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "SalesOrder Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "SalesPending Order Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "SalesComplete Order Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Delivered Order Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Sales Report and Amount",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Sales Return Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "SalesTarget Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Target Achieved Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Target Pending Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "SalesDispatch Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Finance Reports",
    TabName: [
      {
        title: "Lock Party Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Overdue Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Party Ledger Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "cashbook Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "receipt Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Payment Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Due Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "sales Report and Amount",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "sales Return Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Bank Statement",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "PartywiseLedger Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Profit and Loss Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "BalanceSheet",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Promotional Activity Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },

  {
    title: "Order Report List",
    TabName: [
      {
        title: "Order Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Pending Order Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Sales Report and Amount",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Overdue Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Lock In Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Dispatch Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "WareHouse Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Stock",
    TabName: [
      {
        title: "Inward Stock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Outward Stock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Closing Stock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Opening Stock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Low Stock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Damaged Stock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "OverDue Stock",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Dead Party",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Product",
    TabName: [
      {
        title: "Category List",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "subCategory List",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Product Creation",
        permission: [
          "View",
          "Create",
          "Edit",
          "Delete",
          "Download",
          "BulkUpload",
        ],
      },
    ],
  },

  {
    title: "Warehouse",
    TabName: [
      {
        title: "WarehouseList",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Item Inward",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Item Outward",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Stock Transfer",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Damage Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Stock Storage",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Wastage Detail",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Dispatch Detail",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Production",
    TabName: [
      {
        title: "Items",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Production Process",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Wastage Material",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Material Return",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Price Calculater",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Others",
    TabName: [
      {
        title: "Product",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
      {
        title: "Warehouse",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
      {
        title: "Production",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
      {
        title: "Setting",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
      {
        title: "HRM",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
      {
        title: "Price Calculation",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
      {
        title: "UnitList",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
      {
        title: "Add Charges",
        permission: ["View", "Create", "Edit", "Delete", "NA"],
      },
    ],
  },

  {
    title: "HRM",
    TabName: [
      {
        title: "Recruitment and Placement",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Time Sheet",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Performance",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Target,Collection,Party,Activation",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Set-Rule",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Payroll",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Termination",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Recruitment and Placement",
    TabName: [
      {
        title: "Job Create",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Job Applied/Result",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Practice & skill Test",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Interview",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Offer Letter",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Create Employee",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Training",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Time Sheet",
    TabName: [
      {
        title: "Attendance",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Leave",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Performance",
    TabName: [
      {
        title: "Indicator",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Incentive",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Bonus",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Goal Tracking",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Target,Collection,Party,Activation",
    TabName: [
      {
        title: "Incentive",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Bonus",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Goal Tracking",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Set-Rule",
    TabName: [
      {
        title: "Rules",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Payroll",
    TabName: [
      {
        title: "Set Salary",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Terminations",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Reports ",
    TabName: [
      {
        title: "Admin Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Customer Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Staff Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Transaction Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Product Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Earning Report",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Promotion Management",
    TabName: [
      {
        title: "Promotion",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "Discount&Coupon",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
  {
    title: "Media Status Management",
    TabName: [
      {
        title: "LivestreamStatus",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
      {
        title: "ChatStatus",
        permission: ["View", "Create", "Edit", "Delete", "Download", "NA"],
      },
    ],
  },
];

export const NormalRoles = [
  {
    title: "Dashboard",
    TabName: [
      {
        title: "Dashboard",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
  {
    title: "Users",
    TabName: [
      {
        title: "Create User",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Roles and Persmissions",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Create Customer",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Create Transporter",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },

  {
    title: "Sales",
    TabName: [
      // {
      //   title: "Sales Invoice",
      //   permission: ["View", "Create", "Edit", "Delete"],
      // },

      {
        title: "Sales Order",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Place Order",
        permission: ["View", "Create", "Edit", "Delete"],
      },

      {
        title: "Pending Order",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Complete Order",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Dispatch details",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Sales Return",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Target Creation",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Promotional Activity",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Auto Billing Lock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Achievement",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "CreditNote",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
  {
    title: "Purchase",
    TabName: [
      {
        title: "Purchase Order",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Purchase Pending",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Purchase Complete",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Purchase Invoice",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Purchase Damage",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Debit Notes",
        permission: ["View", "Create", "Edit", "Delete"],
      },

      {
        title: "Purchase Return",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
  // {
  //   title: "Transaction",
  //   TabName: [
  //     {
  //       title: "Receipt",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Payment",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Cashbook",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //   ],
  // },

  // {
  //   title: "Report",
  //   TabName: [
  //     {
  //       title: "Party List",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Receipt and Payment Customized",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Stock Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Order Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     // {
  //     //   title: "Overdue Report",
  //     //  permission: ["View", "Create", "Edit", "Delete","Download"],
  //     // },
  //     // {
  //     //   title: "Sales Report and Amount",
  //     //  permission: ["View", "Create", "Edit", "Delete","Download"],
  //     // },
  //     {
  //       title: "Purchase Report and Amount",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Team and Target Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },

  //     {
  //       title: "Partywise ledger",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Transportor Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Target Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     // {
  //     //   title: "Dispatch Report",
  //     //  permission: ["View", "Create", "Edit", "Delete","Download"],
  //     // },
  //     {
  //       title: "HSN Wise sale Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Product List with HSN and GST",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Out Standing Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Overdue Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     // {
  //     //   title: "Lock In Report",
  //     //  permission: ["View", "Create", "Edit", "Delete","Download"],
  //     // },
  //     {
  //       title: "Cashbook Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     // {
  //     //   title: "Pending Order Report",
  //     //  permission: ["View", "Create", "Edit", "Delete","Download"],
  //     // },
  //   ],
  // },

  // {
  //   title: "All GSTR",
  //   TabName: [
  //     {
  //       title: "GSTR 1",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "GSTR 3B",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "GSTR 9",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //   ],
  // },

  // {
  //   title: "Order Report List",
  //   TabName: [
  //     {
  //       title: "Order Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Pending Order Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Sales Report and Amount",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Overdue Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Lock In Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Dispatch Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "WareHouse Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //   ],
  // },
  {
    title: "Stock",
    TabName: [
      {
        title: "Inward Stock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Outward Stock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Closing Stock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Opening Stock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Low Stock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Damaged Stock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "OverDue Stock",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Dead Party",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
  {
    title: "Product",
    TabName: [
      {
        title: "Category List",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "subCategory List",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Product Creation",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },

  {
    title: "Warehouse",
    TabName: [
      {
        title: "WarehouseList",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Item Inward",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Item Outward",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Stock Transfer",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Damage Report",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Stock Storage",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Wastage Detail",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Dispatch Detail",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
  {
    title: "Production",
    TabName: [
      {
        title: "Items",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Production Process",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Wastage Material",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Material Return",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Price Calculater",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },

  {
    title: "Others",
    TabName: [
      {
        title: "Setting",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Price Calculation",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "UnitList",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Add Charges",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
  // {
  //   title: "Reports Management",
  //   TabName: [
  //     {
  //       title: "Admin Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Customer Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Staff Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Transaction Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Product Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //     {
  //       title: "Earning Report",
  //       permission: ["View", "Create", "Edit", "Delete"],
  //     },
  //   ],
  // },
  {
    title: "Promotion Management",
    TabName: [
      {
        title: "Promotion",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "Discount&Coupon",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
  {
    title: "Media Status Management",
    TabName: [
      {
        title: "LivestreamStatus",
        permission: ["View", "Create", "Edit", "Delete"],
      },
      {
        title: "ChatStatus",
        permission: ["View", "Create", "Edit", "Delete"],
      },
    ],
  },
];
