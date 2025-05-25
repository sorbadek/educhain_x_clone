import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function RightSidebar() {
  const trends = [
    { category: "Trending in Technology", hashtag: "#AI", posts: "125K posts" },
    { category: "Trending", hashtag: "#NextJS", posts: "45.2K posts" },
    { category: "Technology · Trending", hashtag: "#WebDev", posts: "89.1K posts" },
    { category: "Trending in Programming", hashtag: "#React", posts: "156K posts" },
  ]

  const suggestions = [
    { name: "Sui-on-campus", username: "sui", verified: true },
    { name: "Educhain", username: "educhain.sui", verified: true },
    { name: "Michadek23", username: "michadek23.sui", verified: true },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <Input
          placeholder="Search"
          className="bg-gray-900 border-gray-700 rounded-full pl-12 py-3 focus:bg-gray-800 focus:border-blue-500"
        />
      </div>

      {/* What's happening */}
      <div className="bg-gray-900 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">What's happening</h2>
        <div className="space-y-3">
          {trends.map((trend, index) => (
            <div key={index} className="hover:bg-gray-800 p-2 rounded cursor-pointer">
              <div className="text-gray-500 text-sm">{trend.category}</div>
              <div className="font-bold">{trend.hashtag}</div>
              <div className="text-gray-500 text-sm">{trend.posts}</div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="text-blue-500 mt-2 p-0 h-auto">
          Show more
        </Button>
      </div>

      {/* Who to follow */}
      <div className="bg-gray-900 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Who to follow</h2>
        <div className="space-y-3">
          {suggestions.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-bold flex items-center">
                    {user.name}
                    {user.verified && <div className="w-4 h-4 bg-blue-500 rounded-full ml-1"></div>}
                  </div>
                  <div className="text-gray-500">@{user.username}</div>
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 font-bold py-1 px-4 rounded-full">Follow</Button>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="text-blue-500 mt-2 p-0 h-auto">
          Show more
        </Button>
      </div>
    </div>
  )
}
