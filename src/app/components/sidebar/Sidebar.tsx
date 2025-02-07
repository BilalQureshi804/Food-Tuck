import React from 'react';
import PopularTags from './PopularTags';
import PhotoGallery from './PhotoGallery';
import SocialFollow from './SocialFollow';
import ProfileCard from './ProfileCard';
import RecentPosts from './RecentPosts';
import FilterByMenu from './FilterbyMenu';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/3">
      <ProfileCard />
      <RecentPosts />
      <FilterByMenu />
      <PopularTags />
      <PhotoGallery />
      <SocialFollow />
    </aside>
  );
};

export default Sidebar; 