import React, { useState } from "react";
import SearchBar from "./search-bar";
import { tableData } from "../data";

function DataTable() {
    const [tableDataState, setTableDataState] = useState(tableData);

    const onSort = (sortBy) => {
        console.log(sortBy);
        const sortedData = tableDataState.sort((a, b) =>
            a[sortBy] > b[sortBy] ? -1 : 0
        );

        setTableDataState(sortedData);
    };

    const onSearch = (search) => {
        console.log(search);
        const filteredArr = tableData.filter((data) => {
            if (data.firstName.toLowerCase().includes(search.toLowerCase())) {
                return data;
            } else if (data.lastName.toLowerCase().includes(search.toLowerCase())) {
                return data;
            } else if (data.fullName.toLowerCase().includes(search.toLowerCase())) {
                return data;
            } else {
                return [];
            }
        });

        setTableDataState(filteredArr);
    };

    return ( <
        div className = "table-container" >
        <
        SearchBar onSearch = { onSearch }
        />{" "} <
        table >
        <
        tr >
        <
        th >
        <
        input type = "checkbox" / >
        <
        /th>{" "} <
        th >
        <
        div className = "idTitle" >
        <
        p > Id < /p> <button onClick={() => onSort("id")}> ⬇️ </button > { " " } <
        /div>{" "} < /
        th > { " " } <
        th >
        <
        div className = "idTitle" >
        <
        p > First Name < /p>{" "} <
        button onClick = {
            () => onSort("firstName")
        } > ⬇️ < /button>{" "} < /
        div > { " " } <
        /th>{" "} <
        th >
        <
        div className = "idTitle" > { " " } <
        p > Second Name < /p>{" "} <
        button onClick = {
            () => onSort("lastName")
        } > ⬇️ < /button>{" "} < /
        div > { " " } <
        /th>{" "} <
        th > { " " } <
        div className = "idTitle" >
        <
        p > Age < /p> <button onClick={() => onSort("age")}> ⬇️ </button > { " " } <
        /div>{" "} < /
        th > { " " } <
        th > Full Name < /th>{" "} < /
        tr > { " " } {
            tableDataState.map(({ id, firstName, lastName, age, fullName }) => ( <
                tr key = { id } >
                <
                td >
                <
                input type = "checkbox" / >
                <
                /td>{" "} <
                td > { id } < /td> <td> {firstName} </td > < td > { lastName } < /td>{" "} <
                td > { age } < /td> <td> {fullName} </td > { " " } <
                /tr>
            ))
        } { " " } <
        /table>{" "} < /
        div >
    );
}

export default DataTable;