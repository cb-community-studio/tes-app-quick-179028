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

const HrAnalyticsAndReportingCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            various: _entity.various,
            hrff: _entity.hrff,
            metrics: _entity.metrics,
            custom: _entity.custom,
            reports: _entity.reports,
            data: _entity.data,
            visualization: _entity.visualization,
        };

        setLoading(true);
        try {
            
        const result = await client.service("hrAnalyticsAndReporting").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info hrAnalyticsAndReporting created successfully" });
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
            <div role="hrAnalyticsAndReporting-create-dialog-component">
            <div>
                <p className="m-0">Various:</p>
                <InputText className="w-full mb-3" value={_entity?.various} onChange={(e) => setValByKey("various", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Hr:</p>
                <InputText className="w-full mb-3" value={_entity?.hrff} onChange={(e) => setValByKey("hrff", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Metrics :</p>
                <InputText className="w-full mb-3" value={_entity?.metrics} onChange={(e) => setValByKey("metrics", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Custom:</p>
                <InputText className="w-full mb-3" value={_entity?.custom} onChange={(e) => setValByKey("custom", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Reports :</p>
                <InputText className="w-full mb-3" value={_entity?.reports} onChange={(e) => setValByKey("reports", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Data:</p>
                <InputText className="w-full mb-3" value={_entity?.data} onChange={(e) => setValByKey("data", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Visualization:</p>
                <InputText className="w-full mb-3" value={_entity?.visualization} onChange={(e) => setValByKey("visualization", e.target.value)}  />
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

export default connect(null, mapDispatch)(HrAnalyticsAndReportingCreateDialogComponent);
