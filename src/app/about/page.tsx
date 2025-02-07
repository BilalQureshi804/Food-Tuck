import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import TeamMember from '../components/TeamMember';
import Testimonials from '../components/Testimonials';
import Menu from '../components/Menu';
import PageHeader from "../components/PageHeader";

export default function Aboutus() {
  const teamMembers = [
    {
      name: "Mark Henry",
      role: "Owner",
      image: "/chef1.png"
    },
    {
      name: "Lucky Helen",
      role: "Chef",
      image: "/chef2.png"
    },
    {
      name: "Moon Henry",
      role: "Founder",
      image: "/chef3.png"
    },
    {
      name: "Tom Monrow",
      role: "Specialist",
      image: "/chef4.png"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <PageHeader title="About Us" currentPage="About Us" />
      {/* First Section: Content and Buttons */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Images Group */}
            <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
              <Image
                className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                alt="hero"
                src="/aboutus.png"
                width={309}
                height={536}
                priority
              />
              <div className="flex flex-col gap-4">
                <Image
                  className="w-full h-auto object-cover rounded-lg"
                  alt="image2"
                  src="/about4.png"
                  width={309}
                  height={271}
                />
                <Image
                  className="w-full h-auto object-cover rounded-lg"
                  alt="image3"
                  src="/about3.png"
                  width={309}
                  height={382}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[#FF9F0D] font-medium">About us</span>
                <div className="w-12 h-[2px] bg-[#FF9F0D]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Food is an important part of a balanced Diet
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#FF9F0D] text-white rounded-lg hover:bg-[#ff8c00] transition-colors">
                  Show More
                </button>
                <button className="px-6 py-3 flex items-center gap-2 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                  <IoPlayOutline size={24} />
                  Watch video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
              pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
          </div>
          <div className="relative w-full">
            <Image
              src="/about.png"
              alt="Why Choose Us"
              width={1320}
              height={386}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border-2 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Cheifhat.svg"
                  width={80}
                  height={80}
                  alt="Best Chef"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">BEST CHEF</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque diam pellentesque bibendum non dui volutpat
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border-2 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Coffee.png"
                  width={80}
                  height={80}
                  alt="120 Item Food"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">120 ITEM FOOD</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque diam pellentesque bibendum non dui volutpat
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border-2 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/man.png"
                  width={80}
                  height={80}
                  alt="Clean Environment"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">CLEAN ENVIRONMENT</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque diam pellentesque bibendum non dui volutpat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="w-full py-20 bg-[#ffa425]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Team Member</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-[#1E1E1E]">
        <Testimonials />
      </section>

      {/* Menu Section */}
      <section className="w-full py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">Our Food Menu</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
          </div>
          <Menu />
        </div>
      </section>
    </div>
  );
}