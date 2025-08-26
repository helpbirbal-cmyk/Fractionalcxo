import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Zap,
  Star,
  BookOpen
} from "lucide-react"

const featuredPost = {
  title: "The Future of Fractional Leadership: Why Every Startup Needs a CGO",
  excerpt: "Discover how fractional Chief Growth Officers are revolutionizing startup scaling and why this model is becoming essential for modern businesses.",
  author: "Sarah Johnson",
  date: "August 25, 2024",
  readTime: "8 min read",
  category: "Growth Strategy",
  image: "/blog/featured-post.jpg",
  featured: true
}

const posts = [
  {
    title: "10 Growth Hacking Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise and discover the growth hacking strategies that are delivering real results for companies this year.",
    author: "Michael Chen",
    date: "August 22, 2024",
    readTime: "6 min read",
    category: "Growth Hacking"
  },
  {
    title: "How to Build a High-Performing Sales Team from Scratch",
    excerpt: "A comprehensive guide to building, training, and scaling a sales team that consistently exceeds targets.",
    author: "Lisa Park",
    date: "August 20, 2024",
    readTime: "10 min read",
    category: "Sales"
  },
  {
    title: "The Complete Guide to SaaS Pricing Strategy",
    excerpt: "Learn how to price your SaaS product for maximum revenue and customer satisfaction.",
    author: "David Kim",
    date: "August 18, 2024",
    readTime: "12 min read",
    category: "Pricing"
  },
  {
    title: "International Expansion: When and How to Go Global",
    excerpt: "Everything you need to know about expanding your business internationally, from market selection to execution.",
    author: "Sarah Johnson",
    date: "August 15, 2024",
    readTime: "9 min read",
    category: "International"
  },
  {
    title: "Customer Acquisition Cost: The Ultimate Guide to CAC Optimization",
    excerpt: "Master the art of reducing customer acquisition costs while scaling your business effectively.",
    author: "Michael Chen",
    date: "August 12, 2024",
    readTime: "7 min read",
    category: "Marketing"
  },
  {
    title: "Building a Product-Led Growth Strategy That Scales",
    excerpt: "How to leverage your product as the primary driver of growth and customer acquisition.",
    author: "Lisa Park",
    date: "August 10, 2024",
    readTime: "11 min read",
    category: "Product"
  }
]

const categories = [
  { name: "Growth Strategy", count: 15, icon: TrendingUp },
  { name: "Sales", count: 12, icon: Target },
  { name: "Marketing", count: 18, icon: Users },
  { name: "Leadership", count: 8, icon: Zap },
  { name: "International", count: 6, icon: Star },
  { name: "Product", count: 10, icon: BookOpen }
]

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - ABERCXO</title>
        <meta name="description" content="Insights, strategies, and thought leadership on growth, sales, marketing, and fractional leadership." />
      </Head>

      <section className="min-h-screen bg-gradient-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 py-3 rounded-2xl border border-primary/20 mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Growth Insights</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
              Growth Insights &
              <br />
              <span className="text-gradient-hero">Thought Leadership</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Expert insights, proven strategies, and actionable advice to help you scale your business 
              and achieve sustainable growth.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <BookOpen className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-body-bold text-white">100+ articles</div>
                  <div className="text-slate-300 text-xs">published</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Users className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-body-bold text-white">50K+ readers</div>
                  <div className="text-slate-300 text-xs">monthly</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Star className="h-6 w-6 text-yellow-500" />
                <div className="text-left">
                  <div className="font-body-bold text-white">4.8/5 rating</div>
                  <div className="text-slate-300 text-xs">reader satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-dark-card rounded-3xl border border-slate-700 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-4 py-2 rounded-xl border border-primary/20 mb-6">
                    <span className="font-body-semibold text-primary text-sm">Featured Article</span>
                  </div>
                  <h2 className="font-display-medium text-3xl md:text-4xl text-white mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-slate-300 text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-slate-400" />
                      <span className="font-body text-slate-300 text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="font-body text-slate-300 text-sm">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="font-body text-slate-300 text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="btn-primary group">
                    <div className="flex items-center">
                      Read Article
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </button>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-green-500/10 flex items-center justify-center p-8 lg:p-12">
                  <div className="text-center">
                    <BookOpen className="h-24 w-24 text-primary mx-auto mb-6" />
                    <p className="font-body text-slate-300 text-lg">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="font-display-medium text-3xl md:text-4xl text-white mb-8 text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, i) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={i}
                    className="bg-gradient-dark-card rounded-2xl p-6 border border-slate-700 hover:border-primary/30 transition-all duration-300 text-center group"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-body-semibold text-white text-sm mb-2">{category.name}</h3>
                    <p className="font-body text-slate-400 text-xs">{category.count} articles</p>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display-medium text-3xl md:text-4xl text-white mb-8 text-center">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <div key={i} className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700 hover:border-primary/30 transition-all duration-300 group">
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-3 py-1 rounded-lg border border-primary/20">
                      <span className="font-body-semibold text-primary text-xs">{post.category}</span>
                    </span>
                  </div>
                  <h3 className="font-body-semibold text-white text-xl mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-slate-300 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-slate-400" />
                      <span className="font-body text-slate-300 text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="font-body text-slate-300 text-xs">{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="font-body text-slate-300 text-xs">{post.readTime}</span>
                    </div>
                    <button className="text-primary hover:text-white transition-colors">
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-dark-card rounded-3xl p-12 border border-slate-700 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl text-white">Stay Updated</h3>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get the latest growth insights, strategies, and case studies delivered to your inbox. 
                Join 10,000+ growth leaders who read our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl border-2 border-slate-600 bg-slate-800 text-white font-body-medium transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none placeholder:text-slate-400"
                />
                <button className="btn-primary">
                  <div className="flex items-center">
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </button>
              </div>
              <p className="font-body text-slate-400 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
