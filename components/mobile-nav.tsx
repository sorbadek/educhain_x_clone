import Link from "next/link"
import { Home, Search, Bell, Mail } from "lucide-react"

export function MobileNav() {
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Mail, label: "Messages", href: "/messages" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 lg:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="flex flex-col items-center p-3">
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  )
}
