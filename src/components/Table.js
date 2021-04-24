import React from "react";

const Table = ({ objects }) => {
  let displayTableData = objects.map((item) => {
    return (
      <tr>
        <td>
          <h4 className="ui image header">
            <div className="content">
              {item.name}
              <div className="sub header">{item.parent}</div>
            </div>
          </h4>
        </td>
        <td>{(item.confidence * 100).toFixed(2)}%</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="ui very basic collapsing celled table segment">
        <thead>
          <tr>
            <th>Detect</th>
            <th>Confidence</th>
          </tr>
        </thead>
        <tbody>{displayTableData}</tbody>
      </table>
    </div>
  );
};

export default Table;

<div>
  <div class="ui active indicating progress" data-percent="33">
    <div class="bar" style="width:33%"></div>
  </div>
</div>;
