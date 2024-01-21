export default function AirIcon({ fillColor = 'black', width = '24', height = '24' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke={fillColor}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <polyline points='6 9 12 15 18 9' />
    </svg>
  );
}
