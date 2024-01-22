import React, { FC } from 'react';
import type { ShipmentStatus } from '@/app/shipments/page';
import ShipmentCardProgress from './ShipmentCardProgress';

export interface ShipmentCardDetailsProps {
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
  toggleDetails: boolean;
}

const ShipmentCardDetails: FC<ShipmentCardDetailsProps> = ({
  dates,
  participants,
  boxes,
  containers,
  details,
  currentStatus,
  toggleDetails,
}) => {
  return (
    <div className={`${toggleDetails ? '' : 'hidden'} border-t p-4`}>
      <ShipmentCardProgress dates={dates} currentStatus={currentStatus} />
      <div className='flex items-start justify-between py-2 text-2xs'>
        {participants && (
          <div>
            {participants.map((participant, index) => (
              <div className='flex items-center ' key={index}>
                {participant?.name}
                <span className='mx-1 text-neutral-400'>/</span>
                {participant.companyName}
              </div>
            ))}
          </div>
        )}
        <div className='font-semibold'>
          {boxes ? (
            <div className='flex flex-col items-end'>
              <span>
                {boxes?.number} {boxes?.number > 1 ? 'Boxes' : 'Box'}
              </span>
              <span>{boxes?.weight}</span>
            </div>
          ) : containers ? (
            <span>{containers} Containers</span>
          ) : null}
        </div>
      </div>
      <div className='py-2 text-2xs text-neutral-500'>
        Description: <span className='text-neutral-900'>{details}</span>
      </div>
    </div>
  );
};

export default ShipmentCardDetails;
