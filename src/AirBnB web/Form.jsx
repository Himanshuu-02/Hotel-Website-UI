import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center items-center py-5 m-5">
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-10">
        <legend className="fieldset-legend font-bold text-xl">Person Details</legend>

        <label className="label font-bold ">Email or Phone number</label>
        <input type="text" className="input p-2" placeholder="Enter your E-mail" />

        <label className="label font-bold">Password</label>
        <input type="password" className="input p-2" placeholder="Password.." />

        <label className="label font-bold">Author</label>
        <input type="text" className="input p-2" placeholder="Name" />
      </fieldset>
    </div>
  );
};

export default Form;
