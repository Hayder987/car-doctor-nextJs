import About from "@/components/HomeComonents/About";
import Banner from "@/components/HomeComonents/Banner";
import Service from "@/components/HomeComonents/Service";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <SectionDivider></SectionDivider>
      <About></About>
      <SectionDivider></SectionDivider>
      <Service></Service>
      <SectionDivider></SectionDivider>
    </div>
  );
}
