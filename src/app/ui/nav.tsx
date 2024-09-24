import Link from "next/link";
import NavLinks from "./nav-links";

export default function Nav() {
    return (
        <div>
            <Link href="/">
                <h1>Natasha Buckham</h1>
            </Link>
            <NavLinks />
        </div>
    )
}