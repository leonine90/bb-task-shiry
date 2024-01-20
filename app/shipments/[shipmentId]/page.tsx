export default function Shipment({ params }: { params: { shipmentId: string } }) {
  return <h2>Shipment {params.shipmentId}</h2>;
}
