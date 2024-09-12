import Header2 from "@/components/Header2";
import Hero2 from "@/components/Hero2";

export default function GarageLayout({ children }) {
  return (
    <div>
      <Header2 />
      <div className="flex">
      <Hero2 />
      <div className="w-3/4"></div>
      </div>
    </div>
  );
}
