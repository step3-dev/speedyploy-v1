import Footer from "@/components/footer";
import HomeComponent from "@/components/homePage";
import Navbar from "@/components/navbar";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-[1120px] mx-auto px-4">
        <HomeComponent />
      </div>
      <Footer />
    </main>
  );
}