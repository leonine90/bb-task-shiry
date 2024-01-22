export default function MainSection({ children }: { children: React.ReactNode }) {
  return <section className='flex w-full flex-grow flex-col pb-[80px] md:w-auto md:pb-0 md:pl-60'>{children}</section>;
}
