import Banner from "@/components/Banner";
import BodyTopSection from "@/components/BodySection";
import BottomBodySection from "@/components/BottomBodySection";
import MidBodySection from "@/components/MidBodySection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05070a]">
      <main className="flex-grow">
        <Banner />
        <BodyTopSection/>
        <MidBodySection/>
        <BottomBodySection/>
      </main>
    </div>
  );
}