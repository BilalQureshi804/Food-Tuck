import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
    image: string;
    date: string;
    comments: number;
    title: string;
    description: string;
    slug: string;
}

const BlogPostCard = ({ image, date, comments, title, description, slug }: BlogPostCardProps) => {
    return (
        <article className='space-y-4'>
            <Image 
                src={image}
                alt={title}
                width={800}
                height={460}
                className='w-full rounded-lg'
            />
            <div className='flex flex-wrap gap-4 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                    <Image 
                        src='/calender.png'
                        alt='Calendar icon'
                        width={20}
                        height={20}
                    />
                    <span>{date}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image 
                        src='/days.png'
                        alt='Comments icon'
                        width={20}
                        height={20}
                    />
                    <span>{comments}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image 
                        src='/admin.png'
                        alt='Admin icon'
                        width={20}
                        height={20}
                    />
                    <span>Admin</span>
                </div>
            </div>
            <h2 className='text-2xl md:text-3xl font-bold text-black'>
                {title}
            </h2>
            <p className='text-gray-300'>
                {description}
            </p>
            <Link 
                href={`/blog/${slug}`}
                className='inline-block px-6 py-3 border border-[#FF9F0D] text-[#FF9F0D] rounded hover:bg-[#FF9F0D] hover:text-white transition-colors duration-300'
            >
                Read More
            </Link>
        </article>
    );
};

export default BlogPostCard; 