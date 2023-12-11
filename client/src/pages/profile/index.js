import Navbar from "@/components/Navbar";
import { useState } from "react";

const index = () => {
  const [name, setName] = useState("Punyakon Patchkaew");

  return (
    <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center">
      <Navbar />
      <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
        <h2 className="text-3xl mb-2 font-bold">Profile</h2>
        <div className="mb-2">
          <label>Name : </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-2">
          <label>Desciption : </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default index;
