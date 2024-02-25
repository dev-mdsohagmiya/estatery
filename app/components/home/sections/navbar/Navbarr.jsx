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
} from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { Button } from "@/components/ui/button";
import { BsChevronDown } from "react-icons/bs";
import NavLink from "./NavLink.jsx";

export default function Navbarr() {
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

  if (
    usepath.includes("dashboard") ||
    usepath.includes("add-property") ||
    usepath.includes("auth")
  )
    null;
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
            <Link className="items-center relative" href={"/"}>
              <AcmeLogo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-6 text-graylight"
          justify="center"
        >
          <NavbarItem>
            <NavLink href={"/"} text={"Home"} />
          </NavbarItem>
          <NavbarItem>
            <NavLink href={"/rent"} text={"Rent"} />
          </NavbarItem>
          <NavbarItem>
            <NavLink href={"/buy"} text={"Buy"} />
          </NavbarItem>
          <NavbarItem>
            <NavLink href={"/sell"} text={"Sell"} />
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
        <NavbarContent className="flex" justify="end">
          <NavbarItem>
            <Link href="/auth/login">
              <Button
                as={Link}
                className="text-primary text-[16px] h-[48px] rounded-[8px] font-normal mr-[16px] px-7 hidden sm:block"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/auth/register">
              <Button
                as={Link}
                className="bg-primary text-white text-[16px] h-[48px] rounded-[8px] font-normal px-7"
                variant="flat"
              >
                <span className="py-5">Sign up</span>
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className={`pb-[50px] `}>
          <NavbarMenuItem className="bg-primary">
            <hr className="h-[2px] -px-10" />
            <div className="w-full h-[5px] bg-primary"></div>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <br />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink line={true} href={"/"} text={"Home"} />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink line={true} href={"/rent"} text={"Rent"} />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink line={true} href={"/buy"} text={"Buy"} />
          </NavbarMenuItem>
          <NavbarMenuItem onClick={() => handleHideManu()}>
            <NavLink line={true} href={"/sell"} text={"Sell"} />
          </NavbarMenuItem>
          <NavbarMenuItem>
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
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/auth/login">
              <Button
                onClick={() => handleHideManu()}
                as={Link}
                className="text-primary w-full text-[16px] h-[48px] rounded-[8px] font-normal mr-[16px] px-7"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/auth/register">
              <Button
                onClick={() => handleHideManu()}
                as={Link}
                className="bg-primary w-full text-white text-[16px] h-[48px] rounded-[8px] font-normal px-7"
                variant="flat"
              >
                <span className="py-5">Sign up</span>
              </Button>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
}
