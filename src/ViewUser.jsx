
import React from "react";
import "./Style.css";

const ViewUser = ({ viewrecord, deleteUser, editUser }) => {
  return (
<div align="center">
<div className="view-user-container">
      <h1 className="view-user-heading">View Users</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {viewrecord.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.phone}</td>
              <td>
                <button className="delete-button" onClick={() => deleteUser(val.id)}>Delete</button>
                <button className="edit-button" onClick={() => editUser(val.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  );
};

export default ViewUser;