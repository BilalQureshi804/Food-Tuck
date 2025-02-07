import Image from 'next/image';
import Button from './ui/Button';
import PopularTags from './sidebar/PopularTags';
import PhotoGallery from './sidebar/PhotoGallery';
import SocialFollow from './sidebar/SocialFollow';
import ProfileCard from './sidebar/ProfileCard';
import RecentPosts from './sidebar/RecentPosts';
import FilterByMenu from './sidebar/FilterbyMenu';

interface SidebarProps {
    recentPosts: string[];
    filterImages: string[];
    instagramImages: string[];
}

const BlogSidebar = ({ recentPosts, filterImages, instagramImages }: SidebarProps) => {
    return (
        <div className='lg:col-span-1 sm:col-span-1 space-y-8 max-w-sm mx-auto lg:mx-0'>
            {/* Search Bar */}
            <div className='flex h-14 shadow-sm'>
                <input 
                    type="text"
                    placeholder='Search Your Keyword'
                    className='flex-1 px-5 py-2 bg-white border border-gray-200 rounded-l focus:outline-none focus:border-[#FF9F0D] text-gray-800 text-sm'
                />
                <Button className='px-5 bg-[#FF9F0D] rounded-sm hover:bg-[#e08d0c] transition-colors duration-300'>
                    <Image 
                        src='/search.png'
                        alt='Search'
                        width={18}
                        height={18}
                    />
                </Button>
            </div>

            {/* Profile Card */}
            <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
                <ProfileCard />
            </div>

            {/* Recent Posts */}
            <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
                <RecentPosts />
            </div>

            {/* Filter By Menu */}
            <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
                <FilterByMenu />
            </div>

            {/* Popular Tags */}
            <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
                <PopularTags />
            </div>

            {/* Photo Gallery (Instagram Feed) */}
            <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
                <PhotoGallery />
            </div>

            {/* Social Follow */}
            <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
                <SocialFollow />
            </div>
        </div>
    );
};

export default BlogSidebar; 