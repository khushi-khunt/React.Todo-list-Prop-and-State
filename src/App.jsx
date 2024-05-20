import { useState } from 'react';
import Adduser from './AddUser'
import ViewUser from './ViewUser';
function App() {
  const [alldata, setAllData] = useState([]);
  const [single, setSingle] = useState("");
  const [editid, setEditid] = useState("");

  const addUser = (data) => {
    setAllData([...alldata, data]);
  };

  const deleteUser = (id) => {
    setAllData(alldata.filter((val) => val.id !== id));
    alert("User deleted successfully...");
  };

  const editUser = (id) => {
    setSingle(alldata.find(val => val.id === id));
    setEditid(id);
  };

  const updateUser = (data) => {
    let up = alldata.map((val) => {
      if (val.id === editid) {
        val.name = data.name;
        val.phone = data.phone;
      }
      return val;
    });
    setAllData(up);
    alert("Record updated sucessfully...");
    setEditid("");
  };

  return (
    <>
      <Adduser
        addUser={addUser}
        single={single}
        editid={editid}
        updateUser={updateUser}
      />
      <ViewUser
        viewrecord={alldata}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </>
  );
}

export default App;