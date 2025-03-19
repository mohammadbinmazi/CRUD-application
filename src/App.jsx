// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { EmployeeData } from "./EmployeeData";

// function App() {
//   const [Data, setData] = useState([]);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [Age, setAge] = useState(0);
//   const [Id, setId] = useState(0);
//   const [isUpdate, setIsUpdate] = useState(false);

//   useEffect(() => {
//     setData(EmployeeData);
//   }, []);
//   const HandleEdit = (id) => {
//     const dt = Data.filter((item) => item.id === id);

//     if (dt !== undefined) {
//       setIsUpdate(true);
//       setId(id);
//       setFirstName(dt[0].firstName);
//       setLastName(dt[0].lastName);
//       setAge(dt[0].Age);
//     }
//   };
//   const HandleDelete = (id) => {
//     if (id > 0) {
//       if (window.confirm("Are you sure to Delete This item")) {
//         const dt = Data.filter((item) => item.id !== id);
//         setData(dt);
//       }
//     }
//   };
//   const HandleSave = () => {
//     let error = "";

//     if (!firstName.trim()) error += "First name is required. ";
//     if (!lastName.trim()) error += "Last name is required. ";
//     if (!Age || Age <= 0) error += "Valid age is required. ";

//     if (error !== "") {
//       alert(error); // Show validation message
//       return;
//     }

//     // Generate new ID dynamically based on Data state
//     const newId = Data.length > 0 ? Data[Data.length - 1].id + 1 : 1;

//     const newObject = {
//       id: newId,
//       firstName: firstName,
//       lastName: lastName,
//       age: Age,
//     };

//     setData([...Data, newObject]); // Update state with new data
//     HandleClear(); // Clear form after saving
//   };

//   const HandleUpdate = () => {
//     const index = Data.map((item) => {
//       return item.id;
//     }).indexOf(Id);
//     const dt = [...Data];
//     dt[index].firstName = firstName;
//     dt[index].lastName = lastName;
//     dt[index].Age = Age;
//     setData(dt);
//     HandleClear();
//   };
//   const HandleClear = () => {
//     setId(0);
//     setFirstName("");
//     setLastName("");
//     setAge("");
//     setIsUpdate(false);
//   };

//   return (
//     <div className="App">
//       <div className="flex items-center mt-[10px] mb-[10px]">
//         <div>
//           <label htmlFor="">
//             first Name
//             <input
//               type="text"
//               placeholder="Enter First Name"
//               onChange={(e) => setFirstName(e.target.value)}
//               value={firstName}
//             />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="">
//             Last Name
//             <input
//               type="text"
//               placeholder="Enter Last Name"
//               onChange={(e) => setLastName(e.target.value)}
//               value={lastName}
//             />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="">
//             Age
//             <input
//               type="text"
//               placeholder="Age"
//               onChange={(e) => setAge(e.target.value)}
//               value={Age}
//             />
//           </label>
//         </div>
//         <div>
//           {!isUpdate ? (
//             <button className="" onClick={(e) => HandleSave(e)}>
//               Save
//             </button>
//           ) : (
//             <button className="" onClick={() => HandleUpdate()}>
//               Update
//             </button>
//           )}
//           <button className="" onClick={() => HandleClear()}>
//             Clear
//           </button>
//         </div>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <td>Sr.No</td>
//             <td>ID</td>
//             <td>First Name</td>
//             <td>Last Name</td>
//             <td>Age</td>
//             <td>Actions</td>
//           </tr>
//         </thead>
//         <tbody>
//           {Data.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.id}</td>
//                 <td>{item.firstName}</td>
//                 <td>{item.lastName}</td>
//                 <td>{item.age}</td>
//                 <button className="" onClick={() => HandleEdit(item.id)}>
//                   Edit
//                 </button>
//                 <button className="" onClick={() => HandleDelete(item.id)}>
//                   Delete
//                 </button>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { EmployeeData } from "./EmployeeData";
import "./App.css";

function App() {
  const [Data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Age, setAge] = useState(0);
  const [Id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const HandleEdit = (id) => {
    const dt = Data.find((item) => item.id === id);
    if (dt) {
      setIsUpdate(true);
      setId(id);
      setFirstName(dt.firstName);
      setLastName(dt.lastName);
      setAge(dt.age);
    }
  };

  const HandleDelete = (id) => {
    if (window.confirm("Are you sure to Delete This item?")) {
      const dt = Data.filter((item) => item.id !== id);
      setData(dt);
    }
  };

  const HandleSave = () => {
    let error = "";
    if (!firstName.trim()) error += "First name is required. ";
    if (!lastName.trim()) error += "Last name is required. ";
    if (!Age || Age <= 0) error += "Valid age is required. ";

    if (error !== "") {
      alert(error);
      return;
    }

    const newId = Data.length > 0 ? Data[Data.length - 1].id + 1 : 1;

    const newObject = {
      id: newId,
      firstName,
      lastName,
      age: Age,
    };

    setData([...Data, newObject]);
    HandleClear();
  };

  const HandleUpdate = () => {
    const updatedData = Data.map((item) =>
      item.id === Id ? { ...item, firstName, lastName, age: Age } : item
    );

    setData(updatedData);
    HandleClear();
  };

  const HandleClear = () => {
    setId(0);
    setFirstName("");
    setLastName("");
    setAge("");
    setIsUpdate(false);
  };

  return (
    <div className="App p-5 bg-gray-100 min-h-screen flex flex-col items-center ">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">
        CRUD Application
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg border-1 border-gray-600">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Age</label>
          <input
            type="number"
            placeholder="Age"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setAge(e.target.value)}
            value={Age}
          />
        </div>

        <div className="flex gap-3">
          {!isUpdate ? (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
              onClick={HandleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition"
              onClick={HandleUpdate}
            >
              Update
            </button>
          )}
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
            onClick={HandleClear}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-8 w-full max-w-4xl border-1 border-gray-600 rounded-lg">
        <table className="w-full bg-white shadow-md rounded-lg border-gray-600 border-1  overflow-hidden">
          <thead className="bg-gray-200 border-gray-600 border-1">
            <tr className="text-left">
              <th className="py-2 px-4 border-1 border-gray-600">Sr.No</th>
              <th className="py-2 px-4 border-1 border-gray-600">ID</th>
              <th className="py-2 px-4 border-1 border-gray-600">First Name</th>
              <th className="py-2 px-4 border-1 border-gray-600">Last Name</th>
              <th className="py-2 px-4 border-1 border-gray-600">Age</th>
              <th className="py-2 px-4 border-1 border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 border-1">{index + 1}</td>
                <td className="py-2 px-4 border-1">{item.id}</td>
                <td className="py-2 px-4 border-1">{item.firstName}</td>
                <td className="py-2 px-4 border-1">{item.lastName}</td>
                <td
                  className={`py-2 px-4 border border-gray-600 font-bold 
          ${
            item.age > 30
              ? "text-yellow-500"
              : item.age > 20
              ? "text-red-500"
              : "text-black"
          }`}
                >
                  {item.age}
                </td>
                <td className="py-2 px-4 border-1flex gap-2">
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded transition"
                      onClick={() => HandleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition"
                      onClick={() => HandleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
