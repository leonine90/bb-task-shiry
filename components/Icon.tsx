import { FC } from 'react';

interface IconProps {
  render: (isHovered: boolean) => React.ReactNode;
  hoverState: boolean;
}

const Icon: FC<IconProps> = ({ render, hoverState }) => {
  return render(hoverState);
};

export default Icon;
