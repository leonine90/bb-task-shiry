import Toolbar from '@/components/Toolbar';

export default function ShipmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toolbar />
      {children}
    </>
  );
}
