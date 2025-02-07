import PageHeader from "@/app/components/PageHeader";
import Image from "next/image";
import BlogSidebar from "../components/BlogSidebar";
import BlogPostCard from "../components/BlogPostCard";

// Sidebar data
const sidebarData = {
    recentPosts: ['/post1.png', '/post2.png', '/post3.png', '/post4.png'],
    filterImages: ['/filter1.png', '/filter2.png', '/filter3.png', '/filter4.png', '/filter5.png'],
    instagramImages: ['/mask1.png', '/mask2.png', '/mask3.png', '/mask4.png', '/mask5.png', '/mask6.png']
};

export default function BlogDetails() {
  return (
    <div className="w-full bg-white">
      <PageHeader title='Blog Details' currentPage='Blog Details' />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Blog Image */}
            <div className="relative aspect-video">
              <BlogPostCard image={"/blog1.png"} date={"2024-01-01"} comments={0} title={"10 Reasons To Do A Digital Detox Challenge"} description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} slug={"10-reasons-to-do-a-digital-detox-challenge"} />
            </div>

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                10 Reasons To Do A Digital Detox Challenge
              </h1>

              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Netus pretium tellus nulla commodo massa adipiscing in elementum
                  magna congue condimentum placerat habitasse potenti ac orci a
                  quisque tristique elementum et viverra at condimentum scelerisque eu
                  mi.
                </p>

                <p className="leading-relaxed">
                  Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
                  varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt
                  per a aptent interdum purus feugiat.
                </p>

                {/* Quote Block */}
                <blockquote className="bg-[#FF9F0D] p-6 lg:p-8 rounded-lg my-8">
                  <div className="flex gap-4 items-start">
                    <Image 
                      src="/comma.png" 
                      alt="Quote" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 object-contain"
                    />
                    <p className="text-white text-base md:text-lg font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </blockquote>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-4">
                    
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.
                    </p>
                  </div>
                  
                  <div className="relative aspect-video">
                    <Image 
                      src="/blog2.png" 
                      alt="Blog Content" 
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="text-gray-600 space-y-4">
                  <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magnaLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.
                  </p>
                  <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.
                    </p>
                </div>

                {/* Comments Section */}
                <section className="pt-12 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Comments - 03</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <Image 
                          src='/comment.png'
                          alt={`Comment ${index}`} 
                          width={60} 
                          height={60}
                          className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover flex-shrink-0"
                        />
                        <div>
                          <h3 className="font-bold text-gray-800">John Doe</h3>
                          <p className="text-gray-600 text-sm md:text-base">Great article! Thanks for sharing.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Comment Form */}
                <section className="pt-12 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Post a Comment</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none transition-all"
                      />
                    </div>
                    <textarea
                      placeholder="Write a Comment"
                      rows={6}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none resize-y min-h-[150px] transition-all"
                    />
                    <button className="bg-[#FF9F0D] text-white px-8 py-3 rounded-lg hover:bg-[#e88d00] transition-all duration-300 text-sm md:text-base">
                      Post Comment
                    </button>
                  </form>
                </section>
              </div>
            </article>
          </div>

          {/* Right Column - Sidebar */}
          <BlogSidebar {...sidebarData} />
        </div>
      </div>
    </div>
  );
}
