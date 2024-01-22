import React, { FC, useState } from 'react';
import { ChevDownIcon } from '@/components/icons';
import type { ShipmentStatus } from '@/app/shipments/page';
import ShipmentCardDetails from './ShipmentCardDetails';

export interface ShipmentCardFooterProps {
  tags: string[];
  dates: {
    start: string;
    end: string;
  };
  boxes?: {
    number: number;
    weight: string;
  };
  containers?: number;
  participants: {
    id: number;
    name: string;
    companyName: string;
  }[];
  details: string;
  currentStatus: ShipmentStatus;
  hasDetails?: boolean;
}

const ShipmentCardFooter: FC<ShipmentCardFooterProps> = ({
  tags,
  dates,
  participants,
  boxes,
  containers,
  details,
  currentStatus,
  hasDetails = true,
}) => {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);

  const toggleDetailsHandler = () => {
    setToggleDetails(!toggleDetails);
  };

  return (
    <>
      <div className='flex items-center justify-between border-t p-4'>
        <div>
          {tags.map((tag, index) => (
            <span className='mr-2 rounded-xl border px-2 py-1 text-xs' key={index}>
              {tag}
            </span>
          ))}
        </div>
        {hasDetails && (
          <button
            className={`text-italic flex items-center text-nowrap rounded-md border-2 px-4 py-2 text-xs ${toggleDetails ? 'border-primary bg-transparent text-primary' : 'border-transparent bg-primary text-white'}`}
            onClick={toggleDetailsHandler}
          >
            <i>{toggleDetails ? 'Hide Details' : 'View Details'}</i>
            <span className={`ml-2 ${toggleDetails ? 'rotate-180' : ''}`}>
              <ChevDownIcon width='16' height='16' fillColor={toggleDetails ? '#04009A' : 'white'} />
            </span>
          </button>
        )}
      </div>
      {hasDetails && (
        <ShipmentCardDetails
          dates={dates}
          participants={participants}
          details={details}
          currentStatus={currentStatus}
          boxes={boxes}
          containers={containers}
          toggleDetails={toggleDetails}
        />
      )}
    </>
  );
};

export default ShipmentCardFooter;
