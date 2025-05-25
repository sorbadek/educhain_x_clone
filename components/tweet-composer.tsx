"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Smile, Calendar, MapPin } from "lucide-react"

export function TweetComposer() {
  const [tweet, setTweet] = useState("")
  const maxLength = 280

  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <Textarea
            placeholder="What is happening?!"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            className="bg-transparent border-none text-xl placeholder-gray-500 resize-none focus:ring-0 focus:outline-none"
            rows={3}
          />

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4 text-blue-500">
              <ImageIcon className="w-5 h-5 cursor-pointer hover:bg-gray-900 rounded-full p-1 w-7 h-7" />
              <Smile className="w-5 h-5 cursor-pointer hover:bg-gray-900 rounded-full p-1 w-7 h-7" />
              <Calendar className="w-5 h-5 cursor-pointer hover:bg-gray-900 rounded-full p-1 w-7 h-7" />
              <MapPin className="w-5 h-5 cursor-pointer hover:bg-gray-900 rounded-full p-1 w-7 h-7" />
            </div>

            <div className="flex items-center space-x-3">
              <span className={`text-sm ${tweet.length > maxLength ? "text-red-500" : "text-gray-500"}`}>
                {tweet.length}/{maxLength}
              </span>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full disabled:opacity-50"
                disabled={tweet.length === 0 || tweet.length > maxLength}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
