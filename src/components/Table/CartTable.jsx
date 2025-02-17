"use client";
import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartTable = ({data}) => {
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-red-100">
            <tr className="text-base">
              <th>Sl</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td><Image src={item?.service_img} alt="photoImage" width={80} height={80}></Image></td>
                <td>{item?.serviceName}</td>
                <td>{item?.date}</td>
                <td><button className={`px-5 py-1 font-semibold rounded-full ${item?.status==='pending'?'bg-red-600 text-white ':'bg-green-500 text-white'}`}>{item?.status}</button></td>
                <td className="text-2xl text-red-600 cursor-pointer"><RiDeleteBin5Fill /></td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
