import SectionBanner from "@/components/HomeComonents/SectionBanner";
import SectionDivider from "@/components/SectionDivider";
import axios from "axios";
import CheckOutForm from "../CheckOutForm";

const page =async ({params}) => {
    const { id } = await params;
    const {data} =await axios.get(`${process.env.SERVER_HTTP}/api/service/${id}`)
  return (
    <div>
     <SectionBanner title={"Check Out"}></SectionBanner>
     <SectionDivider></SectionDivider>
     <h1 className="text-3xl font-bold text-center mb-6">Booking For {data?.title}</h1>
     <CheckOutForm data={data}></CheckOutForm>
    </div>
  )
}

export default page