import React from "react";
import CreatableSelect from "react-select/creatable";

export default function CreatableSelect2({
    id = "creatable-select2",
    handleChange,
    options,
}) {
    return (
        <CreatableSelect
            id={id}
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
                        cursor: isDisabled ? "not-allowed" : "default",

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
                placeholder: (styles) => ({
                    ...styles,
                }),
                singleValue: (styles, { data }) => ({
                    ...styles,
                }),
            }}
        />
    );
}
