import Link from "next/link";
import React from "react";
import Image from "next/image";
import {NAV_LINKS} from '@/constants/constants'
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/campLogo.png" alt="TrekTryst" width={74} height={29} className="cursor-pointer"/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((item)=>(
          <Link 
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          href={item.href}
          key={item.key}>{item.label}</Link>
        ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button 
          title="Login"
          type="button"
          icon="/userIcon.png"
          variant="btn_dark_green"/>
        </div>
        <Image className="inline-block cursor-pointer lg:hidden"
        src="/hambergurMenu.png" alt="sideMenu" height={32} width={32}/>
    </nav>
  );
};

export default Navbar;
