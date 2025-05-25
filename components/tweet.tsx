"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, CheckCircle } from "lucide-react"

interface TweetProps {
  tweet: {
    id: string
    user: {
      name: string
      username: string
      avatar: string
      verified: boolean
    }
    content: string
    timestamp: string
    likes: number
    retweets: number
    replies: number
    image?: string
  }
}

export function Tweet({ tweet }: TweetProps) {
  const [liked, setLiked] = useState(false)
  const [retweeted, setRetweeted] = useState(false)
  const [likesCount, setLikesCount] = useState(tweet.likes)
  const [retweetsCount, setRetweetsCount] = useState(tweet.retweets)

  const handleLike = () => {
    setLiked(!liked)
    setLikesCount(liked ? likesCount - 1 : likesCount + 1)
  }

  const handleRetweet = () => {
    setRetweeted(!retweeted)
    setRetweetsCount(retweeted ? retweetsCount - 1 : retweetsCount + 1)
  }

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        <Image
          src={tweet.user.avatar || "/placeholder.svg"}
          alt={tweet.user.name}
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="flex-1">
          {/* User Info */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-bold hover:underline">{tweet.user.name}</span>
            {tweet.user.verified && <CheckCircle className="w-5 h-5 text-blue-500 fill-current" />}
            <span className="text-gray-500">@{tweet.user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{tweet.timestamp}</span>
            <div className="ml-auto">
              <MoreHorizontal className="w-5 h-5 text-gray-500 hover:bg-gray-800 rounded-full p-1 w-8 h-8 cursor-pointer" />
            </div>
          </div>

          {/* Tweet Content */}
          <div className="mb-3">
            <p className="text-white leading-relaxed">{tweet.content}</p>
          </div>

          {/* Tweet Image */}
          {tweet.image && (
            <div className="mb-3 rounded-2xl overflow-hidden">
              <Image
                src={tweet.image || "/placeholder.svg"}
                alt="Tweet image"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between max-w-md">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 rounded-full p-2"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">{tweet.replies}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleRetweet}
              className={`hover:bg-green-500/10 rounded-full p-2 ${
                retweeted ? "text-green-500" : "text-gray-500 hover:text-green-500"
              }`}
            >
              <Repeat2 className="w-5 h-5 mr-2" />
              <span className="text-sm">{retweetsCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`hover:bg-red-500/10 rounded-full p-2 ${
                liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart className={`w-5 h-5 mr-2 ${liked ? "fill-current" : ""}`} />
              <span className="text-sm">{likesCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 rounded-full p-2"
            >
              <Share className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
