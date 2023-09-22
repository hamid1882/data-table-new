import React, { useEffect, useState } from 'react';
import { tableData, tableHeaders } from '../data';
import SearchBar from './search-bar';

function DataTable() {
  const [tableDataState, setTableData] = useState([]);
  const [isRender, setIsRender] = useState(false);
  const [toggleSort, SetToggleSort] = useState(false);
  const [currentCount, setCurrentCount] = useState({
    start: 0,
    end: 5,
  });

  const handleSelectRow = (id) => {
    const selectedRow = tableDataState.find((user) => user.id === id);
    selectedRow.selected = !selectedRow.selected;
    setTableData(tableDataState);
    setIsRender(!isRender);
  };

  const handleSelectAll = (e) => {
    const updatedData = tableDataState.map((data) => {
      return {
        ...data,
        selected: e.target.checked,
      };
    });

    setTableData(updatedData);
  };

  const handleSortData = (sortBy) => {
    SetToggleSort(!toggleSort);
    const sortedData = tableDataState.sort((a, b) => {
      if (toggleSort) {
        return a[sortBy] > b[sortBy] ? 0 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 0 : -1;
      }
    });
    setIsRender(!isRender);
    setTableData(sortedData);
  };

  const handleGoBack = () => {
    setCurrentCount({
      start: currentCount.start - 5,
      end: currentCount.end - 5,
    });
  };

  const handleGoNext = () => {
    setCurrentCount({
      start: currentCount.start + 5,
      end: currentCount.end + 5,
    });
  };

  const handleSearch = (query) => {
    const filteredData = tableData.filter((user) => {
      if (user.id.toString().includes(query)) {
        return user;
      } else if (user.firstName.toLowerCase().includes(query)) {
        return user;
      } else if (user.lastName.toLowerCase().includes(query)) {
        return user;
      } else if (user.fullName.toLowerCase().includes(query)) {
        return user;
      } else if (user.age.toString().toLowerCase().includes(query)) {
        return user;
      } else {
        return null;
      }
    });

    handlePagination(filteredData);
  };

  const handlePagination = (data) => {
    const slicedData = data.slice(currentCount.start, currentCount.end);
    setTableData(slicedData);
  };

  useEffect(() => {
    handlePagination(tableData);
    // eslint-disable-next-line
  }, [currentCount]);

  useEffect(() => {
    setIsRender(!isRender);
  }, [isRender]);

  return (
    <div className="table-container">
      <SearchBar handleSearch={handleSearch} />{' '}
      <table>
        <thead className="table-head">
          <tr className="table-head-row">
            <th>
              <input onChange={handleSelectAll} type="checkbox" />
            </th>{' '}
            {tableHeaders.map(({ id, name, key }) => (
              <th key={id}>
                <div className="header-container">
                  <p> {name.toUpperCase()} </p>{' '}
                  <button onClick={() => handleSortData(key)}> ⬇️ </button>{' '}
                </div>{' '}
              </th>
            ))}{' '}
          </tr>{' '}
        </thead>{' '}
        <tbody>
          {' '}
          {tableDataState.map(
            ({ id, firstName, lastName, age, fullName, selected }) => (
              <tr className={`row ${selected ? 'selected-row' : ''}`}>
                {' '}
                <td>
                  <input
                    checked={selected}
                    onChange={() => handleSelectRow(id)}
                    type="checkbox"
                  />
                </td>{' '}
                <td>
                  <p> {id} </p>{' '}
                </td>{' '}
                <td>
                  <p> {firstName} </p>{' '}
                </td>{' '}
                <td>
                  <p> {lastName} </p>{' '}
                </td>{' '}
                <td>
                  <p> {age} </p>{' '}
                </td>{' '}
                <td>
                  <p> {fullName} </p>{' '}
                </td>{' '}
              </tr>
            )
          )}{' '}
        </tbody>{' '}
        <tfoot>
          <tr>
            <th> </th> <th> </th> <th> </th> <th> </th> <th> </th>{' '}
            <th>
              <div className="pagination-container">
                <button
                  disabled={currentCount.start === 0}
                  onClick={handleGoBack}
                >
                  {' '}
                  Back{' '}
                </button>
                1{' '}
                <button
                  disabled={currentCount.end === tableData.length}
                  onClick={handleGoNext}
                >
                  {' '}
                  Next{' '}
                </button>{' '}
              </div>{' '}
            </th>{' '}
          </tr>{' '}
        </tfoot>{' '}
      </table>{' '}
    </div>
  );
}

export default DataTable;
