import React, { FC, useEffect, useState } from 'react';
import { convertDateFormat } from '@/utils/convertDate';
import type { ShipmentStatus } from '@/app/shipments/page';

export interface ShipmentCardProgressProps {
  dates: {
    start: string;
    end: string;
  };
  currentStatus: ShipmentStatus;
}

const ShipmentCardProgress: FC<ShipmentCardProgressProps> = ({ dates, currentStatus }) => {
  return (
    <div className='flex items-end py-2 text-3xs'>
      <div className='flex flex-col'>
        <div className='font-bold'>{convertDateFormat(dates?.start)}</div>
        <div
          className={`h-2 w-2 rounded-full border text-3xl leading-none ${currentStatus === 'In Origin' ? 'border-primary bg-primary' : 'border-neutral-400 bg-neutral-400'}`}
        />
        <div>Origin</div>
      </div>
      <div className='connector' />
      <div className='flex flex-col'>
        <div></div>
        <div
          className={`h-2 w-2 self-center rounded-full border text-3xl leading-none ${currentStatus === 'In Transit' || currentStatus === 'In Custom Clearance' ? 'border-primary bg-primary' : 'border-neutral-400 bg-neutral-400'}`}
        />
        <div>In Transit</div>
      </div>
      <div className='connector' />
      <div className='flex flex-col items-end'>
        <div className='font-bold'>{convertDateFormat(dates?.end)}</div>
        <div
          className={`h-2 w-2 rounded-full border text-3xl leading-none ${currentStatus === 'In Destination' ? 'border-primary bg-primary' : 'border-neutral-400 bg-neutral-400'}`}
        />
        <div>Destination</div>
      </div>
    </div>
  );
};

export default ShipmentCardProgress;
