import Footer from "@/components/Common/Footer/Footer";
import Header from "@/components/Common/Header/Header";
import BoilerPlate from "@/components/temp/BoilerPlate";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
    <Header />
    <BoilerPlate />
    <Footer />
    </div>
  );
}
