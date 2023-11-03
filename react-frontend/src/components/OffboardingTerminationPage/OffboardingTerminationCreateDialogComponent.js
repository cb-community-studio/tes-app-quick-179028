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

const OffboardingTerminationCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            exit: _entity.exit,
            interviews: _entity.interviews,
            termination: _entity.termination,
            checklist: _entity.checklist,
        };

        setLoading(true);
        try {
            
        const result = await client.service("offboardingTermination").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info offboardingTermination created successfully" });
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
            <div role="offboardingTermination-create-dialog-component">
            <div>
                <p className="m-0">Exit:</p>
                <InputText className="w-full mb-3" value={_entity?.exit} onChange={(e) => setValByKey("exit", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Interviews :</p>
                <InputText className="w-full mb-3" value={_entity?.interviews} onChange={(e) => setValByKey("interviews", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Termination:</p>
                <InputText className="w-full mb-3" value={_entity?.termination} onChange={(e) => setValByKey("termination", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Checklist:</p>
                <InputText className="w-full mb-3" value={_entity?.checklist} onChange={(e) => setValByKey("checklist", e.target.value)}  />
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

export default connect(null, mapDispatch)(OffboardingTerminationCreateDialogComponent);
