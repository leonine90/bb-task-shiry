'use client';

import React, { FC, useEffect, useState } from 'react';
import type { Shipment, shipmentType } from '@/app/shipments/page';
import { AirIcon, CopyIcon, OceanIcon, ChevDownIcon } from '@/components/icons';
import { convertDateFormat } from '@/utils/convertDate';

interface ShipmentCardProps {
  shipment: Shipment;
}

const ShipmentCard: FC<ShipmentCardProps> = ({ shipment }) => {
  const [shipmentIcon, setShipmentIcon] = useState<React.ReactNode | null>(null);
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);

  const selectIcon = (shipmentType: shipmentType) => {
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
    if (shipment) {
      selectIcon(shipment.shipmentType);
    }
  }, [shipment]);

  const toggleDetailsHandler = () => {
    setToggleDetails(!toggleDetails);
  };

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
              <div className='shipmentPoint absolute top-0 h-1 w-1 rounded-full border border-primary bg-primary text-3xl leading-none text-primary' />
              <div className='shipmentPoint absolute bottom-0 h-1 w-1 rounded-full border border-primary bg-primary text-3xl leading-none text-primary' />
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
      <div className='flex items-center justify-between border-t p-4'>
        <div>
          {shipment?.tags.map((tag, index) => (
            <span className='mr-2 rounded-xl border px-2 py-1 text-xs' key={index}>
              {tag}
            </span>
          ))}
        </div>
        <button
          className={`text-italic flex items-center text-nowrap rounded-md border-2 px-4 py-2 text-xs ${toggleDetails ? 'border-primary bg-transparent text-primary' : 'border-transparent bg-primary text-white'}`}
          onClick={toggleDetailsHandler}
        >
          <i>{toggleDetails ? 'Hide Details' : 'View Details'}</i>
          <span className={`ml-2 ${toggleDetails ? 'rotate-180' : ''}`}>
            <ChevDownIcon width='16' height='16' fillColor={toggleDetails ? '#04009A' : 'white'} />
          </span>
        </button>
      </div>
      <div className={`${toggleDetails ? '' : 'hidden'} border-t p-4`}>
        <div className='flex items-end py-2 text-3xs'>
          <div className='flex flex-col'>
            <div className='font-bold'>{convertDateFormat(shipment?.dates?.start)}</div>
            <div className='h-2 w-2 rounded-full border border-primary bg-primary text-3xl leading-none text-primary' />
            <div>Origin</div>
          </div>
          <div className='connector' />
          <div className='flex flex-col'>
            <div></div>
            <div className='h-2 w-2 self-center rounded-full border border-primary bg-primary text-3xl leading-none text-primary' />
            <div>In Transit</div>
          </div>
          <div className='connector' />
          <div className='flex flex-col items-end'>
            <div className='font-bold'>{convertDateFormat(shipment?.dates?.end)}</div>
            <div className='h-2 w-2 rounded-full border border-primary bg-primary text-3xl leading-none text-primary' />
            <div>Destination</div>
          </div>
        </div>
        <div className='flex items-start justify-between py-2 text-2xs'>
          {shipment?.participants && (
            <div>
              {shipment?.participants.map((participant, index) => (
                <div className='flex items-center ' key='index'>
                  {participant?.name}
                  <span className='mx-1 text-neutral-400'>/</span>
                  {participant.companyName}
                </div>
              ))}
            </div>
          )}
          <div className='font-semibold'>
            {shipment?.boxes ? (
              <div className='flex flex-col items-end'>
                <span>
                  {shipment?.boxes?.number} {shipment?.boxes?.number > 1 ? 'Boxes' : 'Box'}
                </span>
                <span>{shipment?.boxes?.weight}</span>
              </div>
            ) : shipment?.containers ? (
              <span>{shipment?.containers} Containers</span>
            ) : null}
          </div>
        </div>
        <div className='py-2 text-2xs'>Description: {shipment.details}</div>
      </div>
    </div>
  );
};

export default ShipmentCard;
