import ShipmentCard from '@/components/ShipmentCard';

export type shipmentType = 'Air' | 'Sea' | 'Road';
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
  currentStatus: string;
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
      <div className='w-full lg:w-3/5 flex flex-col gap-y-4'>
        {shipmentsData.map((shipment, index) => (
          <ShipmentCard key={index} shipment={shipment} />
        ))}
      </div>
    </section>
  );
}
