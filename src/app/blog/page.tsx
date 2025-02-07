'use client';
import PageHeader from '../components/PageHeader';
import BlogPostCard from '../components/BlogPostCard';
import BlogSidebar from '../components/BlogSidebar';

// Blog posts data
const blogPosts = [
    {
        image: '/blog1.png',
        date: 'Feb 14 2022',
        comments: 3,
        title: '10 Reasons To Do A Digital Detox Challenge',
        description: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        slug: 'digital-detox-challenge'
    },
    {
        image: '/blog2.png',
        date: 'Feb 14 2022',
        comments: 3,
        title: '10 Reasons To Do A Digital Detox Challenge',
        description: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        slug: 'digital-detox-challenge'
    },
    {
        image: '/blog3.png',
        date: 'Feb 14 2022',
        comments: 3,
        title: '10 Reasons To Do A Digital Detox Challenge',
        description: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        slug: 'digital-detox-challenge'
    },
    {
        image: '/blog4.png',
        date: 'Feb 14 2022',
        comments: 3,
        title: '10 Reasons To Do A Digital Detox Challenge',
        description: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        slug: 'digital-detox-challenge'
    },
    
    // Add more blog posts here
];

// Sidebar data
const sidebarData = {
    recentPosts: ['/post1.png', '/post2.png', '/post3.png', '/post4.png'],
    filterImages: ['/filter1.png', '/filter2.png', '/filter3.png', '/filter4.png', '/filter5.png'],
    instagramImages: ['/mask1.png', '/mask2.png', '/mask3.png', '/mask4.png', '/mask5.png', '/mask6.png']
};

export default function BlogPage() {
    return (
        <>
            <PageHeader title='Blog' currentPage='Blog' />
   
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Main Content - Left Side */}
                    <div className='lg:col-span-2 space-y-12'>
                        {blogPosts.map((post, index) => (
                            <BlogPostCard key={index} {...post} />
                        ))}
                    </div>

                    {/* Sidebar - Right Side */}
                    <BlogSidebar {...sidebarData} />
                </div>
            </div>
        </>
    )
}