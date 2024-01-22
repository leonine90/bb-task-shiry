import { RefObject } from 'react';

const copyText = (titleRef: RefObject<Node>) => {
  if (titleRef.current) {
    const textToCopy = titleRef.current.textContent || '';
    navigator.clipboard.writeText(textToCopy);
    console.log('Copied to clipboard:', textToCopy);
    alert(`Copied to clipboard: ${textToCopy}`);
  }
};

export default copyText;
