import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDataToTable1, addDataToTable2, addDataToTable3, editDataInTable1, editDataInTable2, editDataInTable3 } from './tableSlice';

const Modal = ({ isOpen, onClose, onAdd, onEdit, editData, activeTab }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    description: "",
    price: "",
    remaining: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name,
        product: editData.product,
        description: editData.description,
        price: editData.price,
        remaining: editData.remaining,
      });
    }
  }, [editData]);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const updatedData = { ...formData };
  
    if (editData) {
      // Update existing data
      if (activeTab === "table1") {
        dispatch(editDataInTable1({ id: editData.id, ...updatedData }));
      } else if (activeTab === "table2") {
        dispatch(editDataInTable2({ id: editData.id, ...updatedData }));
      } else if (activeTab === "table3") {
        dispatch(editDataInTable3({ id: editData.id, ...updatedData }));
      }
    } else {
      // Add new data
      const newId = Date.now(); // Generate a unique ID using the current timestamp
      if (activeTab === "table1") {
        dispatch(addDataToTable1({ ...updatedData, id: newId }));
      } else if (activeTab === "table2") {
        dispatch(addDataToTable2({ ...updatedData, id: newId }));
      } else if (activeTab === "table3") {
        dispatch(addDataToTable3({ ...updatedData, id: newId }));
      }
    }
  
    onClose();
    setFormData({
      name: "",
      product: "",
      description: "",
      price: "",
      remaining: "",
    });
  };
  

  if (!isOpen) return null;

  return (
    <div
      className="uk-modal uk-open"
      uk-modal="true"
      style={{ display: "block" }}
    >
      <div className="uk-modal-dialog uk-modal-body">
      <h2>{editData ? "Edit Data" : "Add New Data"}</h2>
        <form>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              placeholder="Product"
              name="product"
              value={formData.product}
              onChange={handleChange}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="number"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="number"
              placeholder="Remaining"
              name="remaining"
              value={formData.remaining}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="uk-button uk-button-primary"
            onClick={handleSubmit}
          >
            {editData ? "Update" : "Submit"}
          </button>
        </form>
        <button
          className="uk-modal-close-default"
          type="button"
          uk-close="true"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Modal;