import React, { FC } from 'react';
import type { Shipment } from '@/app/shipments/page';

interface ShipmentCardProps {
  shipment: Shipment;
}

const ShipmentCard: FC<ShipmentCardProps> = ({ shipment }) => {
  return (
    <h2>{shipment?.title}</h2>
  );
};

export default ShipmentCard;