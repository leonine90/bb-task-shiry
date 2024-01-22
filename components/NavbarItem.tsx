import React, { useState, FC } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export interface NavbarItemProps {
  title: string;
  url: string;
  icon: FC<{ fillColor: string }>;
}

const NavbarItem: FC<NavbarItemProps> = ({ title, url, icon: IconComponent }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={url}
      className='flex w-full flex-col items-center justify-center gap-x-4 border-b-primary border-r-neutral-300 px-2 py-0 last:border-r-0 hover:font-bold hover:text-primary md:flex-row md:border-r-primary md:px-8 md:py-4 md:hover:border-r-2'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        hoverState={isHovered}
        render={(hoverState) => <IconComponent fillColor={hoverState ? '#04009A' : 'black'} />}
      />
      <span className='flex-1 text-nowrap text-xs md:text-sm'>{title}</span>
    </Link>
  );
};

export default NavbarItem;
