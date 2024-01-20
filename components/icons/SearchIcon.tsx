export default function SearchIcon({ fillColor = 'black' }) {
  return (
    <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.4596 3C17.1243 3 20.9185 6.79428 20.9185 11.459C20.9185 13.6597 20.074 15.667 18.6919 17.1734L21.4114 19.8873C21.6659 20.1418 21.6668 20.5535 21.4123 20.808C21.2855 20.9366 21.1178 21 20.951 21C20.7851 21 20.6183 20.9366 20.4906 20.8098L17.7383 18.0651C16.2904 19.2246 14.4546 19.9188 12.4596 19.9188C7.79491 19.9188 3.99976 16.1236 3.99976 11.459C3.99976 6.79428 7.79491 3 12.4596 3ZM12.4596 4.30298C8.51329 4.30298 5.30274 7.51266 5.30274 11.459C5.30274 15.4053 8.51329 18.6158 12.4596 18.6158C16.405 18.6158 19.6156 15.4053 19.6156 11.459C19.6156 7.51266 16.405 4.30298 12.4596 4.30298Z'
        fill={fillColor}
      />
    </svg>
  );
}
