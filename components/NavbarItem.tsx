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
      className='flex w-full items-center justify-center gap-x-4 border-r-primary px-8 py-4 hover:border-r-2 hover:font-bold hover:text-primary'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        hoverState={isHovered}
        render={(hoverState) => <IconComponent fillColor={hoverState ? '#04009A' : 'black'} />}
      />
      <span className='flex-1'>{title}</span>
    </Link>
  );
};

export default NavbarItem;
