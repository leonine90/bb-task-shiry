'use client';

import React, { FC } from 'react';
import type { Shipment } from '@/app/shipments/page';
import ShipmentCardHeader from './ShipmentCardHeader';
import ShipmentCardBody from './ShipmentCardBody';
import ShipmentCardFooter from './ShipmentCardFooter';

interface ShipmentCardProps {
  shipment: Shipment;
}

const ShipmentCard: FC<ShipmentCardProps> = ({ shipment }) => {
  return (
    <div className='rounded-2xl border bg-white text-sm'>
      <ShipmentCardHeader ownerCompany={shipment.ownerCompany} title={shipment.title} />
      <ShipmentCardBody
        shipmentType={shipment?.shipmentType}
        origin={shipment.origin}
        destination={shipment.destination}
      />
      <ShipmentCardFooter
        tags={shipment.tags}
        dates={shipment.dates}
        participants={shipment.participants}
        details={shipment.details}
        currentStatus={shipment.currentStatus}
        boxes={shipment?.boxes}
        containers={shipment?.containers}
      />
    </div>
  );
};

export default ShipmentCard;
