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
  const [shipmentStatus, setShipmentStatus] = useState<string>('origin');

  console.log(shipmentStatus);
  const selectCurrentStatus = (currentStatus: ShipmentStatus) => {
    switch (currentStatus) {
      case 'In Transit':
      case 'In Custom Clearance':
        setShipmentStatus('transit');
        break;
      case 'In Destination':
        setShipmentStatus('destination');
        break;
      case 'In Origin':
      default:
        setShipmentStatus('origin');
        break;
    }
  };

  useEffect(() => {
    selectCurrentStatus(currentStatus);
  }, []);

  return (
    <div className='flex items-end py-2 text-3xs'>
      <div className='flex flex-col'>
        <div className='font-bold'>{convertDateFormat(dates?.start)}</div>
        <div
          className={`h-2 w-2 rounded-full border text-3xl leading-none ${shipmentStatus === 'origin' ? 'border-primary bg-primary' : 'border-neutral-400 bg-neutral-400'}`}
        />
        <div>Origin</div>
      </div>
      <div className='connector' />
      <div className='flex flex-col'>
        <div></div>
        <div
          className={`h-2 w-2 self-center rounded-full border text-3xl leading-none ${shipmentStatus === 'transit' ? 'border-primary bg-primary' : 'border-neutral-400 bg-neutral-400'}`}
        />
        <div>In Transit</div>
      </div>
      <div className='connector' />
      <div className='flex flex-col items-end'>
        <div className='font-bold'>{convertDateFormat(dates?.end)}</div>
        <div
          className={`h-2 w-2 rounded-full border text-3xl leading-none ${shipmentStatus === 'destination' ? 'border-primary bg-primary' : 'border-neutral-400 bg-neutral-400'}`}
        />
        <div>Destination</div>
      </div>
    </div>
  );
};

export default ShipmentCardProgress;
