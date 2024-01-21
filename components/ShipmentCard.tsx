'use client';

import React, { FC, useEffect, useState } from 'react';
import type { Shipment, shipmentType } from '@/app/shipments/page';
import { AirIcon, CopyIcon, OceanIcon } from '@/components/icons';

interface ShipmentCardProps {
  shipment: Shipment;
}

const ShipmentCard: FC<ShipmentCardProps> = ({ shipment }) => {
  const [shipmentIcon, setShipmentIcon] = useState(null);
  const selectIcon = (shipmentType: shipmentType) => {
    switch (shipmentType) {
      case 'Air':
        setShipmentIcon(<AirIcon />);
        break;
      case 'Sea':
        setShipmentIcon(<OceanIcon />);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    selectIcon(shipment?.shipmentType);
  }, [shipment]);

  return (
    <div className='rounded-2xl border bg-white text-sm'>
      <div className='flex items-center justify-between border-b p-4'>
        <span className='text-neutral-500'>
          Brand Name: <span className='font-medium text-neutral-950'>{shipment?.ownerCompany}</span>
        </span>
        <span className='flex items-center font-medium'>
          ID: {shipment?.title}{' '}
          <span className='ml-2 cursor-pointer'>
            <CopyIcon />
          </span>
        </span>
      </div>
      <div className='p-4 text-xs'>
        <div className='flex items-center justify-between'>
          <span>Mode of Delivery</span>
          <span className='flex items-center'>
            {shipmentIcon}
            <span className='ml-1'>{shipment?.shipmentType}</span>
          </span>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center gap-x-4'>
            <div className='flex flex-col items-start gap-y-4 text-neutral-500'>
              <div>Depart</div>
              <div>Ship</div>
            </div>
            <div className='relative flex h-9 flex-col justify-between border-r border-r-primary'>
              <div className='shipmentPoint absolute top-0 h-1 w-1 rounded-full border border-primary bg-primary text-3xl leading-none text-primary'></div>
              <div className='shipmentPoint absolute bottom-0 h-1 w-1 rounded-full border border-primary bg-primary text-3xl leading-none text-primary'></div>
            </div>
            <div className='flex flex-col items-start gap-y-4'>
              <div>{shipment?.origin}</div>
              <div>{shipment?.destination}</div>
            </div>
          </div>
          <div className='flex flex-col items-end justify-center gap-y-1'>
            <span>Destination City</span>
            <span className='rounded-xl border bg-primary px-2 py-1 text-white'>{shipment?.destination}</span>
          </div>
        </div>
      </div>
      <div className='border-t p-4'>
        <div>
          {shipment?.tags.map((tag, index) => (
            <span className='mr-2 rounded-xl border px-2 py-1 text-xs' key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ShipmentCard;
