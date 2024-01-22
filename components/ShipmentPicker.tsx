'use client';

import React, { useState, FC, useEffect, useCallback } from 'react';
import SearchBox from './SearchBox';
import type { Shipment } from '@/app/shipments/page';
import Link from 'next/link';

export interface ShipmentPickerProps {
  shipments: Shipment[];
}

const ShipmentPicker: FC<ShipmentPickerProps> = ({ shipments }) => {
  const [isSearchToggled, setIsSearchToggled] = useState(false);
  const [filteredShipments, setFilteredShipments] = useState<Shipment[]>(shipments);
  const [query, setQuery] = useState('');
  const [isShipmentsVisible, setIsShipmentsVisible] = useState(false);

  const handleFocus = () => {
    setIsShipmentsVisible(true);
    setIsSearchToggled(true);
  };

  const handleBlur = () => {
    if (!query) {
      setTimeout(() => {
        setIsShipmentsVisible(false);
        setIsSearchToggled(false);
      }, 200);
    }
  };

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
    <div className='relative z-20'>
      <>
        <SearchBox
          onSearch={(query) => {
            filterShipments(query);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          setQuery={setQuery}
          query={query}
          isSearchToggled={isSearchToggled}
        />
        <div
          className={`absolute right-0 top-12 z-20 max-h-60 w-full -scroll-ml-2 overflow-auto rounded-xl border bg-white p-4 shadow-md ${isShipmentsVisible ? 'block' : 'hidden'}`}
        >
          {filteredShipments?.length > 0 ? (
            filteredShipments?.map((shipment, index) => (
              <Link href={`/shipments/${shipment.id}`} key={index} className='block border-b py-2 last:border-b-0'>
                <span className='text-xs font-semibold'>{shipment.title}</span>
                <div>
                  {shipment?.tags.map((tag, index) => (
                    <span key={index} className='mr-2 rounded-xl border px-2 text-3xs'>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            <div className='flex items-center justify-center text-xs font-semibold'>No Shipments Found</div>
          )}
        </div>
      </>
    </div>
  );
};

export default ShipmentPicker;
