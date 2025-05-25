import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from "lucide-react"

export function Sidebar() {
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Explore", href: "/explore" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Mail, label: "Messages", href: "/messages" },
    { icon: Bookmark, label: "Bookmarks", href: "/bookmarks" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: MoreHorizontal, label: "More", href: "/more" },
  ]

  return (
    <div className="h-full p-4 flex flex-col">
      {/* X Logo */}
      <div className="mb-8">
        <Link href="/" className="block w-8 h-8">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">𝕏</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <div className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
              <item.icon className="w-6 h-6" />
              <span className="text-xl hidden xl:block">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Post Button */}
      <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full mb-4 w-full xl:w-auto">
        <span className="hidden xl:block">Post</span>
        <span className="xl:hidden">+</span>
      </Button>

      {/* User Profile */}
      <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors cursor-pointer">
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        <div className="hidden xl:block flex-1">
          <div className="font-bold">Educhain</div>
          <div className="text-gray-500">@educhain.sui</div>
        </div>
        <MoreHorizontal className="w-5 h-5 hidden xl:block" />
      </div>
    </div>
  )
}
