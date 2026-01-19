import Link from "next/link"

interface LogoProps {
  toggleDrawer?: () => void
}


export default function Logo({ toggleDrawer }:LogoProps) {
  return (
      <Link onClick={toggleDrawer} href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        <img src={"/logo.png"} width='100'/>
      </Link>
  )
}
