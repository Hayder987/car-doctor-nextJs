"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const CheckOutForm = ({ data }) => {
  const { data: session } = useSession();
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_HTTP;

  const formHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const bookingPayload = {
      name,
      address,
      phone,
      email,
      amount,
      date,
      service_id: data?._id,
      serviceName: data?.title,
      service_img: data?.img,
      service_price: data?.price,
    };
    try {
      await axios.post(`${serverUrl}/api/service`, bookingPayload);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Booking has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    } catch (err) {
      Swal.fire(`${err?.message}`);
    }
  };

  return (
    <div className="container rounded-lg mb-20 mx-auto ">
      <div className="p-8 md:p-12 lg:p-20 bg-gray-200">
        <form onSubmit={formHandler} className="flex flex-col gap-8">
          {/* Name */}
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={session?.user?.name}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* phone Email */}
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <input
                type="email"
                name="email"
                defaultValue={session?.user?.email}
                readOnly
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* amount & Date */}
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Amount"
                name="amount"
                defaultValue={data?.price}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* message */}
          <textarea
            className="textarea textarea-bordered resize-none"
            rows={8}
            cols={20}
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            className="bg-red-600 font-semibold cursor-pointer text-white py-3 px-6 rounded-lg"
            value="Confirm Order"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
