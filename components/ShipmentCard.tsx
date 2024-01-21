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
  }

  useEffect(()=>{
    selectIcon(shipment?.shipmentType)
  }, [shipment]);

  return (
    <div className='bg-white rounded-2xl border text-sm'>
      <div className='flex justify-between items-center p-4 border-b'>
        <span className='text-neutral-500'>Brand Name: <span className='text-neutral-950 font-medium'>{shipment?.ownerCompany}</span></span>
        <span className='flex items-center font-medium'>ID: {shipment?.title} <span className='ml-2 cursor-pointer'><CopyIcon /></span></span>
      </div>
      <div className='p-4 text-xs'>
        <div className='flex justify-between items-center'>
          <span>Mode of Delivery</span>
          <span className='flex items-center'>
            { shipmentIcon }
            <span className='ml-1'>{ shipment?.shipmentType }</span>
          </span>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <div className='flex items-center gap-x-4'>
            <div className='flex flex-col items-start gap-y-4 text-neutral-500'>
              <div>Depart</div>
              <div>Ship</div>
            </div>
            <div className='relative flex flex-col justify-between border-r border-r-primary h-9'>
              <div className='text-3xl w-1 h-1 bg-primary leading-none absolute top-0 text-primary border-primary border rounded-full shipmentPoint'></div>
              <div className='text-3xl w-1 h-1 bg-primary leading-none absolute bottom-0 text-primary border-primary border rounded-full shipmentPoint'></div>
            </div>
            <div className='flex flex-col items-start gap-y-4'>
              <div>{ shipment?.origin }</div>
              <div>{ shipment?.destination }</div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-end gap-y-1'>
            <span>Destination City</span>
            <span className='px-2 py-1 border rounded-xl bg-primary text-white'>{ shipment?.destination }</span>
          </div>
        </div>
      </div>
      <div className='p-4 border-t'>
        <div>
          { shipment?.tags.map((tag, index)=>(
            <span className='text-xs mr-2 px-2 py-1 border rounded-xl' key={index}>{tag}</span>
          )) }
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default ShipmentCard;
