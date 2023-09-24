import React, { useState } from 'react';
import { foodData } from '../data';

function CollapsableTable() {
  const [foodDataState, setFoodDataState] = useState(foodData);

  const handleToggleRow = (id) => {
    const selectedRow = foodDataState.find((data) => data.id === id);
    selectedRow.selected = !selectedRow.selected;

    setFoodDataState([...foodDataState]);
  };
  return (
    <div className="collapsable-table-container">
      <h1> Collapsable Table </h1>
      <div className="table-container">
        <table className="table">
          <thead className="table-head">
            <tr className="table-row">
              <th></th>
              <th>Dessert</th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {foodDataState.map((data) => (
              <>
                <tr style={{ padding: '1em', margin: '1em' }} key={data.id}>
                  <td
                    className={`toggle-icon ${data.selected ? 'selected' : ''}`}
                    onClick={() => handleToggleRow(data.id)}
                  >
                    ↓
                  </td>
                  <td>{data.desert}</td>
                  <td>{data.calories}</td>
                  <td>{data.fat}</td>
                  <td>{data.carbs}</td>
                  <td>{data.protein}</td>
                </tr>
                {data.selected && (
                  <tr>
                    <td style={{ padding: '1em', margin: '1em' }} colSpan="6">
                      <h5 style={{ textAlign: 'left', margin: 0 }}>History</h5>
                      <table style={{ border: 'none' }}>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Total Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.details.map((bill) => (
                            <tr
                              style={{
                                borderBottom: '1px solid gray',
                              }}
                            >
                              <td>{bill.date}</td>
                              <td>{bill.customer}</td>
                              <td>{bill.amount}</td>
                              <td>{bill.totalPrice}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CollapsableTable;
