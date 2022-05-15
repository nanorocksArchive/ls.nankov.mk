import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { storeApiCall } from "../../services/CRUDService";

export default function ModalMolecule({ options, setUrlCategories }) {
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");

    const handleChange = (newValue, actionMeta) => {
        setCategory(newValue.label);
    };

    const storeArticle = (e) => {
        e.preventDefault();
        storeApiCall("/articles/store", "POST", {
            url,
            category: category.toLowerCase(),
        }).then((data) => {
            console.log(data);
            setUrlCategories(
                `/categories?new=${new Date().getUTCMilliseconds()}`
            );
            // document.getElementById("articleModal").style.display = "none";
            // document.getElementsByClassName("modal-backdrop")[0].remove();
            // document
            //     .getElementsByClassName("modal-open")[0]
            //     .classList.remove("modal-open");
        });
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#articleModal"
            >
                New Article
            </button>
            <div
                className="modal fade"
                id="articleModal"
                tabIndex="-1"
                aria-labelledby="articleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="articleModalLabel">
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
                            <form onSubmit={storeArticle}>
                                <div className="mb-3">
                                    <label htmlFor="url" className="form-label">
                                        Enter url
                                    </label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="url"
                                        placeholder="e.g https://www.youtube.com/watch?v=HE5vANeK2O0"
                                        onChange={(e) => setUrl(e.target.value)}
                                        required
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
                                        options={options}
                                        required
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-secondary mt-1 mr-1"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary mr-1 mt-1 ml-1"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
