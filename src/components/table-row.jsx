import React from "react";

function TableRow({
    id,
    firstName,
    lastName,
    age,
    fullName,
    selected,
    onSelect,
}) {
    return ( <
        tr className = { `${selected ? "selectedRow" : "row"}` }
        key = { id } >
        <
        td >
        <
        input onChange = {
            () => onSelect(id) }
        type = "checkbox"
        checked = { selected }
        />{" "} <
        /td>{" "} <
        td > { id } < /td> <td> {firstName} </td > < td > { lastName } < /td>{" "} <
        td > { age } < /td> <td> {fullName} </td > { " " } <
        /tr>
    );
}

export default TableRow;