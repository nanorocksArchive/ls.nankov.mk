import React, { useEffect, useState } from "react";
import Select from "react-select";
import ModalMolecule from "../molecules/ModalMolecule";
import { capitalizeFirstLetter } from "./../../util/index";

export default function SearchFilterOrganism({
    categories,
    setUrlCategories,
    setUrlArticles,
    urlArticles,
}) {
    const [toggleFilter, setToggleFilter] = useState(true);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(
            categories.map((item) => ({
                value: item.id,
                label: capitalizeFirstLetter(item.name),
            }))
        );
    }, [categories]);

    const [loadingFilter, setLoadingFilter] = useState(false);

    const url = document
        .querySelector('meta[name="app-url"]')
        .getAttribute("content");

    const filterByCategories = (options) => {
        setLoadingFilter(!loadingFilter);

        const categoryIds = [...options.map((item) => item.value)];

        const inCategoryParam =
            categoryIds.length === 0 ? "" : `inCategory=${categoryIds}`;

        setUrlArticles(`${url}/articles?${inCategoryParam}`);

        setTimeout(() => {
            setLoadingFilter(false);
        }, 1000);
    };

    const [loadingFilterSearch, setLoadingFilterSearch] = useState(false);

    const [searchWord, setSearchWord] = useState("");

    const filterByWord = (clear = false) => {
        setLoadingFilterSearch(!loadingFilter);

        const wordParam = clear
            ? searchWord.length === 0
                ? ""
                : `word=${searchWord}`
            : "";

        setUrlArticles(`${url}/articles?${wordParam}`);

        setTimeout(() => {
            setLoadingFilterSearch(false);
        }, 1000);
    };

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
                    <ModalMolecule
                        options={options}
                        setUrlCategories={setUrlCategories}
                    />
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
                    <div className="mb-0 d-flex">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Search by name or description"
                            defaultValue={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm ml-2"
                            onClick={filterByWord}
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
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm ml-2"
                            onClick={() => {
                                filterByWord(false);
                                setSearchWord("");
                            }}
                        >
                            Clear
                        </button>
                    </div>
                    {loadingFilterSearch && (
                        <small className="text-light">Loading...</small>
                    )}
                    <div className="mt-3 mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Filter by category
                        </label>
                        <Select
                            isMulti
                            name="colors"
                            options={options}
                            className="basic-multi-select bg-dark text-light"
                            classNamePrefix="select"
                            onChange={(e) => filterByCategories(e)}
                            styles={{
                                control: (styles) => ({
                                    ...styles,
                                    backgroundColor: "black",
                                }),
                                option: (
                                    styles,
                                    { data, isDisabled, isFocused, isSelected }
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
                                            backgroundColor: !isDisabled
                                                ? isSelected
                                                    ? data.color
                                                    : "black"
                                                : undefined,
                                        },
                                    };
                                },
                                input: (styles) => ({ ...styles }),
                                placeholder: (styles) => ({ ...styles }),
                                singleValue: (styles, { data }) => ({
                                    ...styles,
                                }),
                            }}
                        />
                        {loadingFilter && (
                            <small className="text-light">Loading...</small>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
