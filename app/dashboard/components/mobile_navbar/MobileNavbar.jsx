"use client";
import React, { useRef, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "@/app/components/home/sections/navbar/Icons.jsx";

import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { Button } from "@/components/ui/button";
import { BsChevronDown } from "react-icons/bs";
import NavLink from "../manu/NavLink.jsx";
import Header from "../Header/Header.jsx";
import logoback from "@/public/logoblack.png";
import icon1 from "@/public/dashboard/manu/icon1.png";
import icon2 from "@/public/dashboard/manu/icon2.png";
import icon3 from "@/public/dashboard/manu/icon3.png";
import icon4 from "@/public/dashboard/manu/icon4.png";
import icon5 from "@/public/dashboard/manu/icon5.png";
import logout from "@/public/dashboard/manu/logout.png";
import Image from "next/image.js";
export default function MobileNavbar() {
  const navRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [ishide, setIsHide] = useState(false);
  const usepath = usePathname();

  const GetNavStatus = () => {
    // Accessing the 'id' attribute of the nav element
    if (navRef.current) {
      const navId = navRef.current.getAttribute("data-menu-open");
      console.log("Nav element ID:", navId);
    }
  };

  GetNavStatus();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const menuItems = [
    "Home",
    "Rent",
    "Buy",
    "Sell",
    "Manage Property",
    "Login",
    "Signup",
  ];

  const handleHideManu = () => {
    setIsMenuOpen(true);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  if (usepath.includes("dashboardfff")) null;
  else
    return (
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        useRef={navRef}
        maxWidth="xl"
        className="bg-white  pt-4 border-b-[1px] border-[#E4E3F3]"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand className="items-center">
            <Link className="items-center relative" href={"/"}></Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-6 text-graylight"
          justify="center"
        >
          <NavbarItem>
            <NavLink href={"/"} src={icon1} text={"Home"} />
          </NavbarItem>
          <NavbarItem>
            <NavLink href={"/rent"} text={"Customer"} />
          </NavbarItem>
          <NavbarItem>
            <NavLink href={"/buy"} text={"Property"} />
          </NavbarItem>
          <NavbarItem>
            <NavLink href={"/sell"} text={"Reports"} />
          </NavbarItem>
          <NavbarItem>
            <NavLink href={"/sell"} text={"Settings"} />
          </NavbarItem>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  className="p-0 focus:outline-red  border-none text-graylight "
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Manage Property
                  <BsChevronDown className="mt-[3px] ml-[2px]" />
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarContent className="w-full flex justify-end" justify="end">
          <NavbarItem className="flex justify-end w-full">
            <Header mobile={true} />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className={`pb-[50px] `}>
          <NavbarMenuItem className="bg-primary h-2 w-full -px-8">
            <hr className="h-[2px] -px-10 bg-grayline w-full" />
            <div className="w-full h-[5px] bg-primary"></div>
          </NavbarMenuItem>

          <NavbarMenuItem className="py-5">
            <Image src={logoback} alt="" />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink
              line={true}
              href={"/dashboard"}
              src={icon1}
              text={"Dashboard"}
            />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink
              line={true}
              href={"/customer"}
              src={icon2}
              text={"Customer"}
            />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink
              line={true}
              src={icon3}
              href={"/property"}
              text={"Property"}
            />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink
              line={true}
              src={icon4}
              href={"/reports"}
              text={"Reports"}
            />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink
              src={icon5}
              line={true}
              href={"/settings"}
              text={"Settings"}
            />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink
              line={true}
              href={"/logout"}
              text={"Logout"}
              src={logout}
            />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
}
