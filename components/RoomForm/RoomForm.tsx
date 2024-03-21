// "use client";

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { db } from "../../database/firebaseConfig";
// import { query, collection, addDoc, where, getDocs } from "firebase/firestore";
// import { useRouter } from "next/router";

// const RoomForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     roomNo: "",
//     secretKey: "",
//   });

//   // const router = useRouter();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       // Check if the username and room number already exist
//       const querySnapshot = await getDocs(
//         query(
//           collection(db, "userData"),
//           where("username", "==", formData.username),
//           where("roomNo", "==", formData.roomNo)
//         )
//       );

//       if (!querySnapshot.empty) {
//         // If the document with the same username and room number exists
//         window.alert(
//           "You have already created a room with this username and room number."
//         );
//         window.location.href = `/Streaming/${formData.roomNo}`;
//       } else {
//         // Store form data in Firebase
//         const docRef = await addDoc(collection(db, "userData"), formData);
//         console.log("Document written with ID: ", docRef.id);
//         // Reset form fields
//         setFormData({
//           username: "",
//           roomNo: "",
//           secretKey: "",
//         });
//         window.alert("Room created successfully.");
//         // Redirect to the dynamic page under /Streaming using Next.js's navigation
//         window.location.href = `/Streaming/${formData.roomNo}`;
//       }
//     } catch (error) {
//       console.error("Error storing form data in Firebase:", error);
//       window.alert("Error creating the room. Please try again later.");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md"
//     >
//       <div className="mb-4">
//         <label htmlFor="username" className="block text-gray-700">
//           Username:
//         </label>
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
//         <label htmlFor="roomNo" className="block text-gray-700">
//           Room No:
//         </label>
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
//         <label htmlFor="secretKey" className="block text-gray-700">
//           Secret Key:
//         </label>
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
//       <button
//         type="submit"
//         className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default RoomForm;







"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { db } from "../../database/firebaseConfig";
import { query, collection, addDoc, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

const RoomForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    roomNo: "",
    secretKey: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Check if the username and room number already exist
      const querySnapshot = await getDocs(
        query(
          collection(db, "userData"),
          where("username", "==", formData.username),
          where("roomNo", "==", formData.roomNo)
        )
      );

      if (!querySnapshot.empty) {
        // If the document with the same username and room number exists
        window.alert(
          "You have already created a room with this username and room number."
        );
        window.location.href = `/Streaming/${formData.roomNo}`;
      } else {
        // Store form data in Firebase
        const docRef = await addDoc(collection(db, "userData"), {
          ...formData,
          roomId: formData.roomNo // Setting roomId as document ID
        });
        console.log("Document written with ID: ", docRef.id);
        // Reset form fields
        setFormData({
          username: "",
          roomNo: "",
          secretKey: "",
        });
        window.alert("Room created successfully.");
        // Redirect to the dynamic page under /Streaming using Next.js's navigation
        window.location.href = `/Streaming/${formData.roomNo}`;
      }
    } catch (error) {
      console.error("Error storing form data in Firebase:", error);
      window.alert("Error creating the room. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">
          Username:
        </label>
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
        <label htmlFor="roomNo" className="block text-gray-700">
          Room No:
        </label>
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
        <label htmlFor="secretKey" className="block text-gray-700">
          Secret Key:
        </label>
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
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default RoomForm;
