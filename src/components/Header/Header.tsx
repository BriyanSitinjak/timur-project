import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import timurLogo from "@/assets/svg/timur_project_logo.svg";
import searchLogo from "@/assets/svg/magnifier_timur_project.svg";
import facebookLogo from "@/assets/svg/facebook_timur_project.svg";
import linkedinLogo from "@/assets/svg/linkedin_timur_project.svg";
import homepageLogo from "@/assets/svg/homepage_timur_project.svg";
import othersLogo from "@/assets/svg/others_icon_timur_project.svg";
import instagramLogo from "@/assets/svg/instagram_timur_project.svg";

export default function Header() {
  return (
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
            <li>
              <Link href="www.google.com">About</Link>
            </li>
            <li>
              <Link href="www.google.com">Services</Link>
            </li>
            <li>
              <Link href="www.google.com">Works</Link>
            </li>
            <li>
              <Link href="www.google.com">Contact Us</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}
