import { SetStateAction, useState } from "react";
import { selectData1, selectData2, selectData3, deleteDataFromTable1, deleteDataFromTable2, deleteDataFromTable3 } from "./tableSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";
import Modal from "./modal";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("table1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const data1 = useSelector(selectData1);
  const data2 = useSelector(selectData2);
  const data3 = useSelector(selectData3);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    if (activeTab === "table1") {
      dispatch(deleteDataFromTable1(id));
    } else if (activeTab === "table2") {
      dispatch(deleteDataFromTable2(id));
    } else if (activeTab === "table3") {
      dispatch(deleteDataFromTable3(id));
    }
  };

  const handleEditData = (item: SetStateAction<null>) => {
    setEditData(item);
    setIsModalOpen(true);
  }

  const renderTable = (mockData: any) => (
    <>
      <div className="menu">
        <label>{activeTab}</label>
        <button
          className="uk-button uk-button-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Add Data
        </button>
      </div>
      <table className="uk-table uk-table-divider uk-table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Remaining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item: any, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.product}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.remaining}</td>
              <td>
               <div className="action">
               <MdDelete 
                 onClick={() => handleDelete(item.id)}
                 />
                 <MdEdit
                 onClick={() => handleEditData(item)}
                 />
               </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  function handleAddData(newData: any) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="dashboard">
        <h3>Dashboard</h3>
        <div className="tabs">
          <button
            className={`uk-button ${
              activeTab === "table1" ? "uk-button-primary" : ""
            }`}
            onClick={() => setActiveTab("table1")}
          >
            Table 1
            <span>({data1.length})</span>
          </button>
          <button
            className={`uk-button ${
              activeTab === "table2" ? "uk-button-primary" : ""
            }`}
            onClick={() => setActiveTab("table2")}
          >
            Table 2
            <span>({data2.length})</span>
          </button>
          <button
            className={`uk-button ${
              activeTab === "table3" ? "uk-button-primary" : ""
            }`}
            onClick={() => setActiveTab("table3")}
          >
            Table 3
            <span>({data3.length})</span>
          </button>
        </div>
      </div>

      <div>
        {activeTab === "table1" && renderTable(data1)}
        {activeTab === "table2" && renderTable(data2)}
        {activeTab === "table3" && renderTable(data3)}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(newData: any) => handleAddData(newData)}
        activeTab={activeTab}
        editData={editData}
      />
    </>
  );
};

export default Dashboard;
