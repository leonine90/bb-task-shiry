import SearchBox from '@/components/SearchBox';
import ShipmentCard from '@/components/ShipmentCard';
import ShipmentsList from '@/components/ShipmentsList';

export type ShipmentType = 'Air' | 'Sea' | 'Road';
export type ShipmentStatus = 'In Transit' | 'In Destination' | 'In Origin' | 'In Custom Clearance';
export interface Shipment {
  id: number;
  title: string;
  ownerCompany: string;
  origin: string;
  destination: string;
  shipmentType: ShipmentType;
  productType: string;
  boxes?: {
    number: number;
    weight: string;
  };
  containers?: number;
  dates: {
    start: string;
    end: string;
  };
  tags: string[];
  details: string;
  participants: {
    id: number;
    name: string;
    companyName: string;
  }[];
  currentStatus: ShipmentStatus;
}

export async function getShipments(): Promise<Shipment[]> {
  const baseUrl = process.env.BASE_URL_LOCAL;
  const res = await fetch(`${baseUrl}api/shipments`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Shipment[]>;
}

export default async function Shipments() {
  const shipmentsData = await getShipments();

  return (
    <section className='flex-grow p-2 py-4 md:p-8'>
      <ShipmentsList shipments={shipmentsData} />
    </section>
  );
}
