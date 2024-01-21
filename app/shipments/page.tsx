import ShipmentCard from '@/components/ShipmentCard';

export interface Shipment {
  id: number;
  title: string;
  ownerCompany: string;
  origin: string;
  destination: string;
  shipmentType: 'Air' | 'Sea' | 'Road';
  productType: 'Electronics' | 'Clothing' | 'Books' | 'Food' | 'Toys';
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
    <section className='flex-grow'>
      {shipmentsData.map((shipment, index) => (
        <ShipmentCard key={index} shipment={shipment} />
      ))}
    </section>
  );
}
