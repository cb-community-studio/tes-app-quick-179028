import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const ComplianceAndDocumentsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            employee: _entity.employee,
            contracts: _entity.contracts,
            hrff: _entity.hrff,
            policies: _entity.policies,
            and: _entity.and,
            procedures: _entity.procedures,
            compliance: _entity.compliance,
            documentation: _entity.documentation,
            employee1: _entity.employee1,
            handbooks: _entity.handbooks,
        };

        setLoading(true);
        try {
            
        const result = await client.service("complianceAndDocuments").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info complianceAndDocuments created successfully" });
        props.onCreateResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };
    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="complianceAndDocuments-create-dialog-component">
            <div>
                <p className="m-0">Employee:</p>
                <InputText className="w-full mb-3" value={_entity?.employee} onChange={(e) => setValByKey("employee", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Contracts :</p>
                <InputText className="w-full mb-3" value={_entity?.contracts} onChange={(e) => setValByKey("contracts", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Hr:</p>
                <InputText className="w-full mb-3" value={_entity?.hrff} onChange={(e) => setValByKey("hrff", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Policies:</p>
                <InputText className="w-full mb-3" value={_entity?.policies} onChange={(e) => setValByKey("policies", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">And:</p>
                <InputText className="w-full mb-3" value={_entity?.and} onChange={(e) => setValByKey("and", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Procedures :</p>
                <InputText className="w-full mb-3" value={_entity?.procedures} onChange={(e) => setValByKey("procedures", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Compliance:</p>
                <InputText className="w-full mb-3" value={_entity?.compliance} onChange={(e) => setValByKey("compliance", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Documentation :</p>
                <InputText className="w-full mb-3" value={_entity?.documentation} onChange={(e) => setValByKey("documentation", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Employee 1:</p>
                <InputText className="w-full mb-3" value={_entity?.employee1} onChange={(e) => setValByKey("employee1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Handbooks:</p>
                <InputText className="w-full mb-3" value={_entity?.handbooks} onChange={(e) => setValByKey("handbooks", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(ComplianceAndDocumentsCreateDialogComponent);
