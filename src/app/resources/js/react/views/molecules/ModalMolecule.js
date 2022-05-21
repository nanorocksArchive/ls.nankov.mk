import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { storeApiCall } from "../../services/CRUDService";
import { X } from "react-feather";

export default function ModalMolecule({ options, setUrlCategories }) {
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");

    const handleChange = (newValue, actionMeta) => {
        if (actionMeta.action === "clear") {
            setCategory(null);
            return;
        } else {
            console.log("newValue.label", newValue.label);
            setCategory(newValue.label);
        }
    };

    const storeArticle = (e) => {
        e.preventDefault();
        console.log(url, category);
        storeApiCall("/articles/store", "POST", {
            url,
            category: category.toLowerCase(),
        }).then((data) => {
            alert("New article added ...");
            setUrlCategories(`/categories?newArticle=${data.id}`);
            setUrl("");
        }).catch((err) => alert(err.toString()));
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
                                New Article
                            </h5>
                            <div
                                className="pointer"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <X size={16} />
                            </div>
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
                                        value={url}
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
                                        styles={{
                                            control: (styles) => ({
                                                ...styles,
                                                backgroundColor: "black",
                                            }),
                                            option: (
                                                styles,
                                                {
                                                    data,
                                                    isDisabled,
                                                    isFocused,
                                                    isSelected,
                                                }
                                            ) => {
                                                return {
                                                    ...styles,
                                                    backgroundColor: isDisabled
                                                        ? undefined
                                                        : isSelected
                                                        ? data.color
                                                        : isFocused
                                                        ? "black"
                                                        : undefined,
                                                    color: isDisabled
                                                        ? "#ccc"
                                                        : isSelected
                                                        ? "black"
                                                        : data.color,
                                                    cursor: isDisabled
                                                        ? "not-allowed"
                                                        : "default",

                                                    ":active": {
                                                        ...styles[":active"],
                                                        backgroundColor:
                                                            !isDisabled
                                                                ? isSelected
                                                                    ? data.color
                                                                    : "black"
                                                                : undefined,
                                                    },
                                                };
                                            },
                                            input: (styles) => ({ ...styles }),
                                            placeholder: (styles) => ({
                                                ...styles,
                                            }),
                                            singleValue: (
                                                styles,
                                                { data }
                                            ) => ({
                                                ...styles,
                                            }),
                                        }}
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
