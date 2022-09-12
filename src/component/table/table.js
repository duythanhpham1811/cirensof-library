

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "./styles.scss"
import { useSelector } from 'react-redux';
import { MyPagination } from '../pagination';


export function MyTable({
  autofit,
  resizable,
  rowDragEntireRow,
  suppressMovable,
  autoHeight = true,
  rowHeight,
  checkPagination = true,
  offScrollHorizontal = true,
  getRowChange,
  handleCellEditingStopped,
  onCellValueChanged,
  rowClassRules,
  getRowStyle,
  setGridApiProp,
  singleClickEdit = false,
  onRowClicked,
  tableSelector,
  data,
  ...props
}) {
  const gridRef = useRef();
  const [gridApi, setGridApi] = React.useState(null)
  const tableReducer = useSelector(tableSelector)  

  useEffect(() => {
    if (autofit === true) {
      setTimeout(
      function() {
        if(gridRef.current !== null){
          gridRef.current.api.sizeColumnsToFit();
        }
      },
      400
    );
    }
  }, [tableReducer.autofit]);


  function onGridReady(params) {
    setGridApi(params.api);
    if(setGridApiProp != null){
      setGridApiProp(params.api)
    }
    if (autofit === true) {
      params.api.sizeColumnsToFit();
    }
  }

  // const sizeToFit = useCallback(() => {
  //   if (autofit === true) {
  //     setTimeout(
  //     function() {
  //       gridRef.current.api.sizeColumnsToFit();
  //     },
  //     300
  //   );
  //   }
  // }, []);

  const onDragStopped = (value) => {
    const rows = [];
    gridApi.forEachNodeAfterFilterAndSort((node) => rows.push(node.data));
    getRowChange(rows);
  }

  const onCellEditingStopped = useCallback((event) => {
    if(handleCellEditingStopped != null){
      handleCellEditingStopped(event)
    }
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      resizable: resizable ? resizable : false,
      editable: false,
      suppressMovable: suppressMovable ? suppressMovable : true,
      filter: false,
      wrapText: true,
      autoHeight: autoHeight,
      minWidth: 50,
      cellStyle: { fontSize:"13px", fontWeight: "400",fontFamily:"", color:"#344767", lineHeight: "1.5", display: "flex", alignItems: "center", paddingTop: '8px', paddingBottom: '8px' },
      headerClass: 'my-header-class',
      ...props
    };
  }, []);

  return (
    <div className="example-wrapper">
      <div className="ag-theme-alpine" style={{ borderColor: "1px solid red" }}>
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={props.columns}
          defaultColDef={defaultColDef}
          groupSelectsChildren={true}
          enableRangeSelection={true}
          rowDragManaged={true}
          rowHeight={rowHeight ? rowHeight : 41}
          onDragStopped={onDragStopped}
          rowDragEntireRow={rowDragEntireRow ? rowDragEntireRow : false}
          animateRows={true}
          // getRowStyle={ (params) => {
          //   if (params.node.rowIndex % 2 === 0) {
          //       return { background: "#f1f6f987" };
          //   }
          // }}
          getRowStyle={getRowStyle}
          overlayLoadingTemplate="Đang tải dữ liệu"
          overlayNoRowsTemplate="Không có dữ liệu"
          onGridReady={onGridReady}
          // onGridColumnsChanged = {sizeToFit}
          onCellEditingStopped={onCellEditingStopped}
          domLayout="autoHeight"
          suppressHorizontalScroll={offScrollHorizontal}
          onCellValueChanged={onCellValueChanged}
          singleClickEdit={true}
          rowClassRules={rowClassRules}
          stopEditingWhenCellsLoseFocus={true}
          onRowClicked={onRowClicked}
        ></AgGridReact>
        {data.length !== 0 && checkPagination === true ?
          <MyPagination
            page={props.page}
            count={props.count}
            total={props.total}
            onChangePage={props.onChangePage}
            onChangeSize={props.onChangeSize}
          /> : ""
        }
      </div>
    </div>
  )
}
