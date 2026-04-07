interface IconProps {
  id: string;
  className?: string;
}

const Icon = ({ id, className = 'icon' }: IconProps) => {
  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  );
};

export default Icon;
