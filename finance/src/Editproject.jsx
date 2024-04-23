import { useState } from "react"
export default function Editproject() {

    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
      id: "",
      name: "",
      matricule: "",
      phoneNumber: "",
      automaticHour: "",
      salary: "",
      site: "",
    });
    const [file, setFile] = useState();
    const [imageList, setImageList] = useState([]);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.id !== "") {
        const updatedEmployees = employees.map((employee) => {
          if (employee.id === formData.id) {
            return formData;
          }
          return employee;
        });
        setEmployees(updatedEmployees);
      } else {
        setEmployees([...employees, { ...formData, id: Date.now().toString() }]);
      }
      setFormData({
        id: "",
        name: "",
        matricule: "",
        phoneNumber: "",
        automaticHour: "",
        salary: "",
        site: "",
      });
    };
  
    const handleEdit = (employee) => {
      setFormData({ ...employee });
    };
  
    const handleDelete = (id) => {
      const updatedEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(updatedEmployees);
    };
  
    const handleImageChange = (e) => {
      setFile(URL.createObjectURL(e.target.files[0]));
    };
  
    const handleSend = () => {
      if (file) {
        setImageList((prevList) => [...prevList, file]);
        setFile(null); 
      }
    };

    return (
        <div className="p-4 flex justify-between h-screen ml-[20%] ">
            <div className=" w-auto ">
                <div className="bg-white rounded-3xl p-8 items-center">
                    <div className="">
                        <img src="./src/assets/Foto.svg" alt="" />
                        <div className="">
                            <p className="font-bold mt-2 flex justify-center">Yash Ghori</p>
                            <p className="flex justify-center">Ahmedabad, Gujarat</p>
                            <p className="flex justify-center">Lubumbashi</p>
                        </div>
                        <div className="border-y gap-2">
                            <div className="mt-4 flex gap-2 justify-center">
                                <img src="./src/assets/Vector.svg" alt="" />
                                <p>UI-Intern</p>
                            </div>
                            <div className="flex justify-center gap-2 mt-4">
                                <img src="./src/assets/block.svg" alt="" />
                                <p>on-teak</p>
                            </div>
                        </div>
                        <div className="flex mt-2 gap-2">
                            <img src="./src/assets/add.svg" alt="" />
                            <p>+2437048144030</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <img src="./src/assets/scraps.svg" alt="" />
                            <p>yghori@asite.com</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <img src="./src/assets/gallery.svg" alt="" />
                            <p>PDT-I</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white  mt-4 rounded-3xl p-2">
                    <div className="flex justify-between">
                        <p>Total work done</p>
                        <div className="bg-gray-500">
                            <p>This Week</p>
                        </div>
                    </div>
                    <img src="./src/assets/level.svg" alt="" />
                </div>
            </div>
            <div className="">
                <div className="w-5/7 justify-between rounded-3xl p-2 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <p className="text-2xl mt-5">Edit Profile</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <div className="border">
                                <p>First Name</p>
                                <input value={formData.name} name="name" onChange={handleChange} className="focus:outline-none " placeholder="First Name" type="text" />
                            </div>
                            <div className="border">
                                <p>Last Name</p>
                                <input value={formData.lastname} name="lastname" onChange={handleChange} className="focus:outline-none " placeholder="Last Name" type="text" />
                            </div>
                        </div>
                        <div className="mt-4 gap-2 flex">
                            <div className="border">
                                <p>Email</p>
                                <input value={formData.phoneNumber} name="phoneNumber" onChange={handleChange} className="focus:outline-none " placeholder="0990777367" type="text" />
                            </div>
                            <div className="flex gap-2">
                                <div className="border w-45">
                                    <p>Phone Number</p>
                                    <input value={formData.automaticHour} name="automaticHour" onChange={handleChange} className="focus:outline-none w-40" placeholder="Date" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 gap-4 flex">
                            <div className="border">
                                <p>Matricule</p>
                                <input value={formData.matricule} onChange={handleChange} name="matricule" className="focus:outline-none" placeholder="Matricule" type="text" />
                            </div>
                            <div className="border">
                                <p>Site</p>
                                <input value={formData.site} onChange={handleChange} name="site" className="focus:outline-none" placeholder="Site" type="text" />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="mt-4 w-60 border">
                                <p className="flex justify-center">Salary</p>
                                <input value={formData.salary} onChange={handleChange} name="salary" className="focus:outline-none flex justify-center" placeholder="Salary" type="text" />
                            </div>
                            <label htmlFor="fileInput" className="border mt-4 w-60">
                                <p className="p-4">Upload Image here +</p>
                                <input id="fileInput" className="hidden" value={formData.name} type="file" onChange={handleImageChange} />
                                <img className="hidden" src={file} />
                            </label>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button type="submit" className="bg-blue-500 mt-4 w-40 p-3 rounded-3xl text-white">{formData.id !== '' ? 'Update' : 'Add'}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-auto p-4 rounded-3xl bg-white">
                <div className="flex justify-between">
                    <p className="font-bold">Project</p>
                    <p>View All</p>
                </div>
                <div>
                    {employees.map((item, index) => (
                        <ul key={index}>
                            <li className="w-auto gap-6 mt-5 justify-between">
                                {/* <img src="./src/assets/profil.svg" alt="" /> */}
                                <li className="">
                                    <p>Name: {item.name}</p>
                                    <p>Matricule: {item.matricule}</p>
                                    <p>Phone Number: {item.phoneNumber}</p>
                                    <p>Automatic Hour: {item.automaticHour}</p>
                                    <p>Salary: {item.salary}</p>
                                    <p>Site: {item.site}</p>
                                    {item.file && <img src={item.file} alt="Selected Image" />}
                                </li>
                                <div className="flex gap-2">
                                    <button className="bg-green-500 p-2 rounded-2xl w-20" onClick={() => handleEdit(item)}>Edit</button>
                                    <button className="bg-red-500 p-2 rounded-2xl w-20" onClick={() => handleDelete(item.id)}>Delete</button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}