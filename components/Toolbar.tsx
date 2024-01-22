import Image from 'next/image';
import { getShipments } from '@/app/shipments/page';
import ShipmentPicker from './ShipmentPicker';

export default async function Toolbar() {
  const shipmentsData = await getShipments();

  return (
    <div className='flex min-h-16 flex-row-reverse items-center justify-between bg-white px-4 py-2 shadow-md'>
      <ShipmentPicker shipments={shipmentsData} />
      <Image className='mr-4 block md:hidden' src='/Logo.svg' width={97.5} height={30} alt='Shipment' />
    </div>
  );
}
