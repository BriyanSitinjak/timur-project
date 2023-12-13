import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  // const [openMenu, setOpenMenu] = useState(false);
  return (
    <main className="flex w-screen flex-col items-center justify-between relative">
      {/* Video Background */}
      <video
        src={require("@/assets/home_bg_timur_project.mp4")}
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-screen h-100 bg-cover -z-10"
      />
      {/* Header Section */}
      <Header />
      {/* Homepage Content */}
      <div className="">
        {/* Text Middle Homepage */}
        <div className="pt-40">
          <h5 className="font-menu text-white tracking-menu px-80 text-center font-thin text-2xl">Timur seamlessly blends hospitality, branding, event management, and social media marketing. Our commitment to timeless elegance crafts unique experiences, elevates brands, and engages audiences with creativity and sophistication.</h5>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
