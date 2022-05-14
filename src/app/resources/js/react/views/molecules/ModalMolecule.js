import React from "react";
import CreatableSelect from "react-select/creatable";

export default function ModalMolecule({ options }) {


    const handleChange = (newValue, actionMeta) => {
        console.group("Value Changed");
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    const handleInputChange = (inputValue, actionMeta) => {
        console.group("Input Changed");
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                New Article
            </button>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="url" className="form-label">
                                        Enter url
                                    </label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="url"
                                        placeholder="e.g https://www.youtube.com/watch?v=HE5vANeK2O0"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="Select or create category"
                                        className="form-label"
                                    >
                                        Select or create category
                                    </label>
                                    <CreatableSelect
                                        id="creatable-select2"
                                        isClearable
                                        onChange={handleChange}
                                        onInputChange={handleInputChange}
                                        options={options}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
