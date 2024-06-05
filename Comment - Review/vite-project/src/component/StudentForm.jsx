import React, { useState } from "react";

function StudentForm() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    select: "",
    radio: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter Your Name"
          onChange={handlechange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter Your Email"
          onChange={handlechange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter Your Password"
          onChange={handlechange}
        />
        <label htmlFor="select">City:</label>
        <select
          name="select"
          className="select"
          value={data.select}
          onChange={handlechange}
        >
          <option value="">Select Your City</option>
          <option value="pune">Pune</option>
          <option value="Nashik">Nashik</option>
          <option value="Surat">Surat</option>
          <option value="Dhule">Dhule</option>
          <option value="Mumbai">Mumbai</option>
        
        </select>
        <label>Gender:</label><br></br>
        <input
          type="radio"
          name="radio"
          value="male"
          onChange={handlechange}
        />
        <label>Male</label>
        <input
          type="radio"
          name="radio"
          value="female"
          onChange={handlechange}
        />
        <label>Female</label>
        <input
          type="radio"
          name="radio"
          value="other"
          onChange={handlechange}
        />
        <label>Other</label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default StudentForm;