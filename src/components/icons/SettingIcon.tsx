export interface IIcon {
  width?: number;
  height?: number;
  className?: string;
}

const SettingIcon: React.FC<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M11.438 3c-.622 0-1.126.504-1.126 1.125l-.135.945a1.125 1.125 0 0 1-1.788.741l-.764-.573a1.125 1.125 0 0 0-1.591 0l-.796.796c-.44.44-.44 1.151 0 1.59l.573.765a1.125 1.125 0 0 1-.74 1.788l-.946.136c-.621 0-1.125.503-1.125 1.124v1.126c0 .62.504 1.124 1.125 1.124l.945.136a1.125 1.125 0 0 1 .741 1.788l-.573.764c-.44.44-.44 1.152 0 1.591l.796.796c.44.44 1.151.44 1.59 0l.765-.573a1.125 1.125 0 0 1 1.788.74l.136.946c0 .621.503 1.125 1.124 1.125h1.126c.62 0 1.124-.504 1.124-1.125l.136-.945a1.125 1.125 0 0 1 1.788-.741l.764.573c.44.44 1.152.44 1.591 0l.796-.796c.439-.44.439-1.151 0-1.59l-.573-.765a1.125 1.125 0 0 1 .74-1.788l.946-.136c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124l-.945-.136a1.125 1.125 0 0 1-.741-1.788l.573-.764c.439-.44.439-1.152 0-1.591l-.796-.796a1.125 1.125 0 0 0-1.59 0l-.765.573a1.125 1.125 0 0 1-1.788-.74l-.136-.946c0-.621-.503-1.125-1.124-1.125h-1.126ZM12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SettingIcon;
