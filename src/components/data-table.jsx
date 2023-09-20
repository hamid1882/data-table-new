import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import { tableData } from "../data";
import TableRow from "./table-row";

function DataTable() {
    const [tableDataState, setTableDataState] = useState([]);
    const [reRender, setReRender] = useState(false);
    const [toggleSort, setToggleSort] = useState(false);
    const [currentCount, setcurrentCount] = useState(5);

    const onSort = (sortBy) => {
        setToggleSort(!toggleSort);
        const sortedData = tableDataState.sort((a, b) => {
            if (toggleSort) {
                return a[sortBy] > b[sortBy] ? -1 : 0;
            }
            return a[sortBy] < b[sortBy] ? -1 : 0;
        });

        setTableDataState(sortedData);
    };

    const onSearch = (search) => {
        const filteredArr = tableData.filter((data) => {
            if (data.firstName.toLowerCase().includes(search.toLowerCase())) {
                return data;
            } else if (data.lastName.toLowerCase().includes(search.toLowerCase())) {
                return data;
            } else if (data.fullName.toLowerCase().includes(search.toLowerCase())) {
                return data;
            } else if (data.age.toString().includes(search)) {
                return data;
            } else if (data.id.toString().includes(search)) {
                return data;
            }
        });

        setTableDataState(filteredArr);
    };

    const onSelect = (e) => {
        const selectedUser = tableDataState.find((user) => user.id === e);
        selectedUser.selected = !selectedUser.selected;
        setTableDataState((prev) => {
            return [...tableDataState];
        });
    };

    const onSelectAll = (checked) => {
        const updatedData = tableDataState.map((data) => {
            return {
                ...data,
                selected: checked,
            };
        });

        setTableDataState(updatedData);
    };

    const onNextPage = () => {
        const updatedData = tableData.slice(currentCount, currentCount + 5);
        setcurrentCount(currentCount + 5);
        setTableDataState(updatedData);
    };

    const onGoBack = () => {
        const updatedData = tableData.slice(currentCount - 5, currentCount);

        setcurrentCount(currentCount - 5);
        setTableDataState(updatedData);
    };

    useEffect(() => {
        setReRender(!reRender);
    }, [toggleSort, currentCount]);

    useEffect(() => {
        const slicedData = tableData.slice(0, 5);
        setTableDataState(slicedData);
    }, []);

    return ( <
        div className = "table-container" >
        <
        SearchBar onSearch = { onSearch }
        />{" "} <
        table >
        <
        thead >
        <
        tr >
        <
        th >
        <
        input onChange = {
            (e) => onSelectAll(e.target.checked) }
        type = "checkbox" /
        >
        <
        /th>{" "} <
        th >
        <
        div className = "idTitle" >
        <
        p > Id < /p> <button onClick={() => onSort("id")}> ⬇️ </button > { " " } <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "idTitle" >
        <
        p > First Name < /p>{" "} <
        button onClick = {
            () => onSort("firstName") } > ⬇️ < /button>{" "} <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "idTitle" > { " " } <
        p > Second Name < /p>{" "} <
        button onClick = {
            () => onSort("lastName") } > ⬇️ < /button>{" "} <
        /div>{" "} <
        /th>{" "} <
        th > { " " } <
        div className = "idTitle" >
        <
        p > Age < /p> <button onClick={() => onSort("age")}> ⬇️ </button > { " " } <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "idTitle" >
        <
        p > Full Name < /p>{" "} <
        button onClick = {
            () => onSort("fullName") } > ⬇️ < /button>{" "} <
        /div>{" "} <
        /th>{" "} <
        /tr>{" "} <
        /thead>{" "} <
        tbody > { " " } {
            tableDataState.map(
                ({ id, firstName, lastName, age, fullName, selected }) => ( <
                    TableRow id = { id }
                    firstName = { firstName }
                    lastName = { lastName }
                    age = { age }
                    fullName = { fullName }
                    selected = { selected }
                    onSelect = { onSelect }
                    />
                )
            )
        } { " " } <
        /tbody>{" "} <
        tfoot className = "table-footer" >
        <
        button disabled = { currentCount === 0 }
        onClick = { onGoBack } > { " " }
        Go Back { " " } <
        /button>{" "} <
        p > { " " } { currentCount }
        /15{" "} <
        /p>{" "} <
        button disabled = { currentCount === 15 }
        onClick = { onNextPage } > { " " }
        Go Next { " " } <
        /button>{" "} <
        /tfoot>{" "} <
        /table>{" "} <
        /div>
    );
}

export default DataTable;