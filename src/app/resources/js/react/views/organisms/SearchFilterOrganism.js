import React, { useState } from "react";
import Select from "react-select";
import ModalMolecule from "../molecules/ModalMolecule";

export default function SearchFilterOrganism() {

    const [toggleFilter, setToggleFilter] = useState(true)

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <>
            <div className="container pt-3">
                <div className="d-flex justify-content-between mb-3">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setToggleFilter(!toggleFilter)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-filter"
                        >
                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                        </svg>
                    </button>
                    <ModalMolecule />
                </div>
            </div>
            <div className={`container ${toggleFilter ? "d-none" : ""}`}>
                <form>
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Search article
                    </label>
                    <div className="mb-3 d-flex">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Search by name or description"
                        />
                        <button
                            type="type"
                            className="btn btn-secondary btn-sm ml-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-search"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                    x1="21"
                                    y1="21"
                                    x2="16.65"
                                    y2="16.65"
                                ></line>
                            </svg>
                        </button>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Filter by category
                        </label>
                        <Select
                            defaultValue={[options[2]]}
                            isMulti
                            name="colors"
                            options={options}
                            className="basic-multi-select bg-dark text-light"
                            classNamePrefix="select"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
