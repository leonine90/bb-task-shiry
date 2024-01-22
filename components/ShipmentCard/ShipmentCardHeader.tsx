import React, { FC, useRef } from 'react';
import { CopyIcon } from '../icons';
import copyText from '@/utils/copyText';

export interface ShipmentCardHeaderProps {
  title: string;
  ownerCompany: string;
}

const ShipmentCardHeader: FC<ShipmentCardHeaderProps> = ({ title, ownerCompany }) => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const handleCopy = () => {
    copyText(titleRef);
  };

  return (
    <div className='flex items-center justify-between border-b p-4'>
      <span className='text-neutral-500'>
        Brand Name: <span className='font-medium text-neutral-950'>{ownerCompany}</span>
      </span>
      <span className='flex items-center font-medium'>
        ID: <span ref={titleRef}>{title}</span>
        <span className='ml-2 cursor-pointer' onClick={handleCopy}>
          <CopyIcon />
        </span>
      </span>
    </div>
  );
};

export default ShipmentCardHeader;
