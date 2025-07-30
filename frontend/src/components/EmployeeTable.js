import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

// Styles
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "react-bootstrap";

import { AllCommunityModule, ModuleRegistry   } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeTable = ({ rowData, onEdit, onDelete }) => {
 const gridRef = useRef(null);
  const [gridApi, setGridApi] = useState(null);

  const columnDefs = [
     { field: "id", headerName: "ID",  },
  { field: "name", headerName: "Name", width: 200, },
  { field: "email", headerName: "Email", width: 250, },
  { field: "department", headerName: "Department",  },
    {
      headerName: "Actions",
      field: "actions",
      width: 250,
      cellRenderer: (params) => (
        <>
          <Button size="sm" onClick={() => onEdit(params.data)} style={{ marginRight: 10 }}>
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => onDelete(params.data.id)}>Delete</Button>
        </>
      ),
      filter: false,
      sortable: false,
    },
  ];

  const onGridReady = (params) => {
  setGridApi(params.api); // ✅ assign it when ready
};


 const handleFilterChange = (e) => {
  const value = e.target.value;
  if (gridApi?.setQuickFilter) {
    gridApi.setQuickFilter(value);
  } else {
    console.error("Grid API or setQuickFilter not available.");
  }
};


  return (
    <>
      <input
        type="text"
        placeholder="Filter by name..."
        onChange={handleFilterChange}
        style={{ marginBottom: "30px", padding: "5px", width: "250px" }}
      />
      <div className="ag-theme-alpine mb-5" style={{ height: 400, width: "100%" ,border: '2px solid grey' }}>
        <AgGridReact
          theme='legacy'
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          // rowHeight={40}
           onGridReady={onGridReady}
          headerHeight={40}
          pagination={true}
          defaultColDef={{
            sortable: true,
            resizable: true,
            filter: true,
          }}
        />
      </div>
    </>
  );
};

export default EmployeeTable;