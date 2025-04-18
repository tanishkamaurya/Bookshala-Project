import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from "react-hot-toast";

function AddBookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const colInfo = {
      name: data.name,
      bookname: data.bookname,
      pdf: data.pdf
    };

    await axios.post("http://localhost:4001/col/submit", colInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
        toast.success("Submitted Successfully");
        document.getElementById("my_modal_2").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Col", JSON.stringify(res.data.user));
        }, 1000); 
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
        setTimeout(() => {}, 2000);
      
      });
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_2').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Hello Writer!</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('name', { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Name of Book</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Book's name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('bookname', { required: true })}
              />
              <br />
              {errors.bookname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Upload Book</span>
              <br />
              <input
                type="text"
                placeholder="Enter PDF Link"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('pdf', { required: true })}
              />
              <br />
              {errors.pdf && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default AddBookForm;
