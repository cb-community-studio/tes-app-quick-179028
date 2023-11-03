
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ComplianceAndDocumentsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.employee}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.contracts}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.hrff}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.policies}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.and}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.procedures}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.compliance}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.documentation}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.employee1}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.handbooks}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="employee" header="Employee" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="contracts" header="Contracts " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="hrff" header="Hr" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="policies" header="Policies" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="and" header="And" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="procedures" header="Procedures " body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="compliance" header="Compliance" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="documentation" header="Documentation " body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="employee1" header="Employee 1" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="handbooks" header="Handbooks" body={pTemplate9} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ComplianceAndDocumentsDataTable;