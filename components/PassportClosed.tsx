const PassportClosed = ({
  className,
  width,
  height,
}: {
  className: string;
  width: number;
  height: number;
}) => {
  return (
    <img
      className={className}
      width={width}
      height={height}
      src={"/images/passport_front.png"}
      alt="Passport Closed"
    />
  );
};

export default PassportClosed;
