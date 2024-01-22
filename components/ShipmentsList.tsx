'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import SearchBox from '@/components/SearchBox';
import ShipmentCard from '@/components/ShipmentCard';
import type { Shipment } from '@/app/shipments/page';

export interface ShipmentsListProps {
  shipments: Shipment[];
}

const ShipmentsList: FC<ShipmentsListProps> = ({ shipments }) => {
  const [filteredShipments, setFilteredShipments] = useState<Shipment[]>(shipments);
  const [query, setQuery] = useState('');

  const filterShipments = useCallback(
    (query: string) => {
      let filteredShipments: Shipment[] = [];

      if (!query) {
        filteredShipments = shipments;
      } else {
        for (const shipment of shipments) {
          const { title, tags } = shipment;
          const hasTitle = title.toLowerCase().includes(query.toLowerCase());
          const hasTag = tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

          if (hasTitle || hasTag) {
            filteredShipments.push(shipment);
          }
        }
      }

      return filteredShipments;
    },
    [shipments]
  );

  useEffect(() => {
    setFilteredShipments(filterShipments(query));
  }, [filterShipments, query]);

  return (
    <div className='flex w-full flex-col gap-y-4 lg:w-3/5'>
      {shipments.length > 1 && (
        <SearchBox
          onSearch={(query) => {
            filterShipments(query);
          }}
          query={query}
          setQuery={setQuery}
          placeholder='Find a shipment by title or tag ...'
        />
      )}
      {filteredShipments.map((shipment, index) => (
        <ShipmentCard key={index} shipment={shipment} />
      ))}
    </div>
  );
};

export default ShipmentsList;
