import Link from "next/link";
import NavLinks from "./nav-links";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Image from "next/image";
import logo from "../images/logo.png"

export default function Nav() {
  return (
    <Navbar isBordered>
      <NavbarBrand className="flex items-start p-0 max-h-[175px] h-auto">
        <p className="font-bold text-inherit">Natasha Buckham</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavLinks />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}