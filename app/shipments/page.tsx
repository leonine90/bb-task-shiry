import ShipmentCard from '@/components/ShipmentCard';

export type shipmentType = 'Air' | 'Sea' | 'Road';
type ShipmentStatus = 'In Transit' | 'In Destination' | 'In Origin' | 'In Custom Clearance';
export interface Shipment {
  id: number;
  title: string;
  ownerCompany: string;
  origin: string;
  destination: string;
  shipmentType: shipmentType;
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

async function getShipments(): Promise<Shipment[]> {
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
    <section className='flex-grow p-8'>
      <div className='flex w-full flex-col gap-y-4 lg:w-3/5'>
        {shipmentsData.map((shipment, index) => (
          <ShipmentCard key={index} shipment={shipment} />
        ))}
      </div>
    </section>
  );
}
