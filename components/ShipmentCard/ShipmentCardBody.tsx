import React, { FC, useEffect, useState } from 'react';
import { AirIcon, OceanIcon } from '@/components/icons';
import type { ShipmentType } from '@/app/shipments/page';

export interface ShipmentCardBodyProps {
  shipmentType: ShipmentType;
  origin: string;
  destination: string;
}

const ShipmentCardBody: FC<ShipmentCardBodyProps> = ({ shipmentType, origin, destination }) => {
  const [shipmentIcon, setShipmentIcon] = useState<React.ReactNode | null>(null);

  const selectIcon = (shipmentType: ShipmentType) => {
    switch (shipmentType) {
      case 'Air':
        setShipmentIcon(<AirIcon />);
        break;
      case 'Sea':
        setShipmentIcon(<OceanIcon />);
        break;
      case 'Road':
      default:
        console.error(`Unhandled shipment type: ${shipmentType}`);
        setShipmentIcon(null);
        break;
    }
  };

  useEffect(() => {
    if (shipmentType) {
      selectIcon(shipmentType);
    }
  }, [shipmentType]);

  return (
    <div className='p-4 text-xs'>
      <div className='flex items-center justify-between'>
        <span>Mode of Delivery</span>
        <span className='flex items-center'>
          {shipmentIcon}
          <span className='ml-1'>{shipmentType}</span>
        </span>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <div className='flex items-center gap-x-4'>
          <div className='flex flex-col items-start gap-y-4 text-neutral-500'>
            <div>Depart</div>
            <div>Ship</div>
          </div>
          <div className='relative flex h-9 flex-col justify-between border-r border-r-primary'>
            <div className='shipmentPoint absolute top-0 h-1 w-1 rounded-full border border-primary bg-primary text-3xl leading-none text-primary' />
            <div className='shipmentPoint absolute bottom-0 h-1 w-1 rounded-full border border-primary bg-primary text-3xl leading-none text-primary' />
          </div>
          <div className='flex flex-col items-start gap-y-4'>
            <div>{origin}</div>
            <div>{destination}</div>
          </div>
        </div>
        <div className='flex flex-col items-end justify-center gap-y-1'>
          <span>Destination City</span>
          <span className='md:text-md rounded-xl border bg-primary px-2 py-1 text-center text-2xs text-white'>
            {destination}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShipmentCardBody;
