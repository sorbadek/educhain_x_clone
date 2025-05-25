import { Sidebar } from "@/components/sidebar"
import { MainFeed } from "@/components/main-feed"
import { RightSidebar } from "@/components/right-sidebar"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="w-64 xl:w-80 fixed h-full">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 xl:ml-80 mr-80 xl:mr-96">
          <MainFeed />
        </div>

        {/* Right Sidebar */}
        <div className="w-80 xl:w-96 fixed right-0 h-full">
          <RightSidebar />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MainFeed />
        <MobileNav />
      </div>
    </div>
  )
}
