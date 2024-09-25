import { Link, NavbarItem } from "@nextui-org/react"

const links = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Projects', href: '/projects'},
    {name: 'Technical skills', href: '/technical-skills'},
    {name: 'Blog', href: '/blog'},
]

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <NavbarItem>
                        <Link href={link.href}>
                            <p>{link.name}</p>
                        </Link>
                    </NavbarItem>
                )
            })}
        </>
    )
}