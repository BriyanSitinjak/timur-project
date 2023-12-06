import Image from "next/image";
// import { useState } from "react";

import timurLogo from "@/assets/svg/timur_project_logo.svg";
import searchLogo from "@/assets/svg/magnifier_timur_project.svg";
import facebookLogo from "@/assets/svg/facebook_timur_project.svg";
import linkedinLogo from "@/assets/svg/linkedin_timur_project.svg";
import homepageLogo from "@/assets/svg/homepage_timur_project.svg";
import othersLogo from "@/assets/svg/others_icon_timur_project.svg";
import instagramLogo from "@/assets/svg/instagram_timur_project.svg";

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
      <div className="w-screen h-auto min-h-2/5">
        <div className="w-100 h-auto flex flex-row px-16 py-14 bg-header-transparan">
          {/* List Social Media Logo */}
          <div className="w-1/3 flex flex-row items-center justify-start gap-7">
            <Image className="" src={facebookLogo} alt="Facebook Timur Logo" width={20} height={20}/>
            <Image className="" src={instagramLogo} alt="Instagram Timur Logo" width={35} height={35}/>
            <Image className="" src={linkedinLogo} alt="Linkedin Timur Logo" width={35} height={35}/>
          </div>
          {/* Logo Image */}
          <div className="w-1/3 flex flex-row items-center justify-center">
            <Image src={timurLogo} alt="Timur Logo" className="" width={375} height={190}/>
          </div>
          {/* Search and Others Logo */}
          <div className="w-1/3 flex flex-row items-center justify-end gap-7">
            <Image src={searchLogo} alt="Timur Logo" className="" width={35} height={35}/>
            <Image src={othersLogo} alt="Timur Logo" className="" width={35} height={35}/>
          </div>
        </div>
        <div className="w-100 h-28 flex flex-row justify-center items-end py-5 bg-header-transparan">
          {/* Four Menu on Timur Project */}
          <ul className="list-none flex gap-20 text-white font-menu tracking-menu font-thin text-2xl">
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      {/* Homepage Content */}
      <div className="">
        {/* Text Middle Homepage */}
        <div className="pt-40">
          <h5 className="font-menu text-white tracking-menu px-80 text-center font-thin text-2xl">Timur seamlessly blends hospitality, branding, event management, and social media marketing. Our commitment to timeless elegance crafts unique experiences, elevates brands, and engages audiences with creativity and sophistication.</h5>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="w-screen h-48 fixed bottom-0 left-0">
        <div className="h-full w-full flex flex-col items-center justify-around ">
          <div className="flex flex-col items-center justify-center">
            <Image src={homepageLogo} alt="Timur Logo" width={30} height={30}/>
            <h2 className="font-semibold text-lg text-white tracking-menu mt-2">OUR WEBSITE IS ON THE HORIZON, STAY TUNED</h2>
          </div>
          <div>
            <p className="pb-0 mb-0 text-white text-footer">Copyright © 2023 Timur</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
