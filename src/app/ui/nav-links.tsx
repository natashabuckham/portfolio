const links = [
    {name: 'About', href: '/about'},
    {name: 'Projects', href: '/projects'},
    {name: 'Technical skills', href: '/technical-skills'},
    {name: 'Blog', href: '/blog'},
    {name: 'Contact', href: '/contact'}
]

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <a key={link.name} href={link.href}>
                        <p>{link.name}</p>
                    </a>
                )
            })}
        </>
    )
}