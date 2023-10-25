import React from "react";
import InputField from "./InputField";
import { useState } from "react";
import { saveData } from "../services/api";

const defaultData = {
  title: "",
  company: "",
  location: "",
  description: "",
};
const JobForm = () => {
  const [formData, setFormData] = useState(defaultData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    await saveData(formData);
  };
  return (
    <div>
      <h2 className="mt-3 mb-4">Add a Job Listing</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          label="Job title"
          name="title"
          id="title"
          onChange={handleChange}
          value={formData.title}
        />
        <InputField
          type="text"
          label="Company"
          name="company"
          id="company"
          onChange={handleChange}
          value={formData.company}
        />
        <InputField
          type="text"
          label="Location"
          name="location"
          id="location"
          onChange={handleChange}
          value={formData.location}
        />
        <InputField
          type="text"
          label="Job Description"
          name="description"
          id="description"
          onChange={handleChange}
          value={formData.description}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
