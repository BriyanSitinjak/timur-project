import Image from 'next/image'
import React from 'react'

import homepageLogo from "@/assets/svg/homepage_timur_project.svg";

export default function Footer() {
  return (
    <footer className="w-screen h-48 fixed bottom-0 left-0">
      <div className="h-full w-full flex flex-col items-center justify-around ">
        <div className="flex flex-col items-center justify-center">
          <Image src={homepageLogo} alt="Timur Logo" width={30} height={30}/>
          <h2 className="font-semibold text-lg text-white tracking-menu mt-2 mb-2">OUR WEBSITE IS ON THE HORIZON, STAY TUNED</h2>
        </div>
        <div>
          <p className="pb-0 mb-0 text-white text-footer">Copyright © 2023 Timur</p>
        </div>
      </div>
    </footer>
  )
}
