import Image from "next/image";
import About from './components/About'
import Button from "./components/ui/Button";
import FoodCategory from './components/FoodCategory'
import ExtraordinaryTaste from './components/ExtraordinaryTaste'
import Statistics from './components/Statistics'
import Menu from './components/Menu'
import FoodTeam from './components/FoodTeam'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import RestaurantProcess from './components/RestaurantProcess'
import BlogPost from './components/BlogPost'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/herobg.png" 
            alt="Hero background" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10  w-[90vw] container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute left-0 h-full hidden md:block">
            <Image 
              src="/herosideline.png" 
              alt="Decorative line" 
              width={25} 
              height={500}
              className="h-full w-auto"
            />
          </div>
          
          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
            {/* Left column - Text content */}
            <div className="flex flex-col space-y-6 lg:space-y-8 max-w-xl text-center lg:text-left">
              <h3 className="text-[#FF9F0D] font-great-vibes text-2xl lg:text-3xl lg:text-left">
                Its Quick and Amazing
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className='text-[#F7A600]'>The</span> Art of speed 
                <br className="hidden sm:block" /> food Quality   
              </h1>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius sed pharetra dictum neque massa congue
              </p>  
              <div className="flex justify-center lg:justify-start w-full">
                <Button size="lg">
                  See Menu
                </Button>
              </div>
            </div>

            {/* Right column - Hero image */}
            <div className="relative w-full lg:w-auto">
              <Image 
                src="/hero.png" 
                alt="hero" 
                width={570} 
                height={570} 
                className="object-contain w-full h-auto max-w-[670px] mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections Container */}
      <div className="w-full mx-auto" style={{ maxWidth: "min(80vw, 1920px)" }}>
        <About />
        <FoodCategory />
        <ExtraordinaryTaste />
      </div>

      {/* Full Width Statistics Section */}
      <div className="w-full overflow-hidden">
        <Statistics />
      </div>

      {/* Resume Other Sections Container */}
      <div className="w-full mx-auto" style={{ maxWidth: "min(80vw, 1920px)" }}>
        <Menu />
        <FoodTeam />
        <Testimonials />
        <RestaurantProcess />
        <BlogPost />
      </div>
    </main>
  );
}
