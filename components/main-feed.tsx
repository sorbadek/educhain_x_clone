import { TweetComposer } from "@/components/tweet-composer"
import { Tweet } from "@/components/tweet"

const mockTweets = [
  {
    id: "1",
    user: {
      name: "Michadek23.sui",
      username: "michadek23",
      avatar: "/qq.jpg?height=10&width=40",
      verified: true,
    },
    content: "Justshipp[ed in our version of x clone! When you got a team that got your back you are bound to do things",
    timestamp: "2h",
    likes: 42,
    retweets: 12,
    replies: 8,
    image: "/qq.jpg?height=300&width=500",
  },
  {
    id: "2",
    user: {
      name: "SUI On Campus",
      username: "sui-on-campus",
      avatar: "/qq.jpg?height=10&width=40",
      verified: true,
    },
    content:
      "Breaking: Michadek23 Just Won first place in  the Sui Buildathon with their innovative project of building the first educational platform on Sui where people can earn while learning about Sui and its ecosystem. Congratulations!",
    timestamp: "4h",
    likes: 1240,
    retweets: 456,
    replies: 89,
  },
  {
    id: "3",
    user: {
      name: "Alex Rivera",
      username: "alexrivera",
      avatar: "/qq.jpg?height=10&width=40",
      verified: false,
    },
    content:
      "Beautiful sunset from my office window today. Sometimes you need to pause and appreciate the simple things in life 🌅",
    timestamp: "6h",
    likes: 23,
    retweets: 5,
    replies: 3,
    image: "/qq.jpg?height=300&width=500",
  },
]

export function MainFeed() {
  return (
    <div className="border-x border-gray-800 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Home</h1>
      </div>

      {/* Tweet Composer */}
      <TweetComposer />

      {/* Feed */}
      <div>
        {mockTweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}
