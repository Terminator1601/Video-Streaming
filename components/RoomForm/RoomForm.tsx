
"use client"

// import React, { useState } from "react";
// import firebase from "../../database/firebaseConfig";

// const RoomForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     roomNo: "",
//     secretKey: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Store form data in Firebase
//       await firebase.database().ref("userData").push(formData);
//       console.log("Form data stored in Firebase:", formData);
//       // Reset form fields
//       setFormData({
//         username: "",
//         roomNo: "",
//         secretKey: ""
//       });
//     } catch (error) {
//       console.error("Error storing form data in Firebase:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
//       <div className="mb-4">
//         <label htmlFor="username" className="block text-gray-700">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//           className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="roomNo" className="block text-gray-700">Room No:</label>
//         <input
//           type="text"
//           id="roomNo"
//           name="roomNo"
//           value={formData.roomNo}
//           onChange={handleChange}
//           required
//           className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="secretKey" className="block text-gray-700">Secret Key:</label>
//         <input
//           type="password"
//           id="secretKey"
//           name="secretKey"
//           value={formData.secretKey}
//           onChange={handleChange}
//           required
//           className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//       </div>
//       <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default RoomForm;



import React, { useState, ChangeEvent, FormEvent } from "react";
import app from "../../database/firebaseConfig";

const RoomForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    roomNo: "",
    secretKey: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Store form data in Firebase
      await app.database().ref("userData").push(formData);
      console.log("Form data stored in Firebase:", formData);
      // Reset form fields
      setFormData({
        username: "",
        roomNo: "",
        secretKey: ""
      });
    } catch (error) {
      console.error("Error storing form data in Firebase:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="roomNo" className="block text-gray-700">Room No:</label>
        <input
          type="text"
          id="roomNo"
          name="roomNo"
          value={formData.roomNo}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="secretKey" className="block text-gray-700">Secret Key:</label>
        <input
          type="password"
          id="secretKey"
          name="secretKey"
          value={formData.secretKey}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
        Submit
      </button>
    </form>
  );
};

export default RoomForm;
