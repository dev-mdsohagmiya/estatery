"use client";
import React from "react";
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
import NavLink from "./sections/NavLink.jsx";

export default function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const usepath = usePathname();

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
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  // onMenuOpenChange={setIsMenuOpen}

  if (usepath.includes("user")) null;
  else
    return (
      <Navbar
        maxWidth="xl"
        className="bg-white  pt-4 border-b-[1px] border-[#E4E3F3]"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="items-center">
            <Link className="items-center relative" href={"/"}>
              <AcmeLogo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-6 text-graylight"
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
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              href="/user/dashboard"
              as={Link}
              className="text-primary text-[16px] h-[48px] rounded-[8px] font-normal mr-[16px] px-7"
              variant="outline"
            >
              Login
            </Button>
            <Button
              href="/user/dashboard"
              as={Link}
              className="bg-primary text-white text-[16px] h-[48px] rounded-[8px] font-normal px-7"
              variant="flat"
            >
              <span className="py-5">Sign up</span>
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
}
