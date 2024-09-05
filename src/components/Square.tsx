type TProps = {
  size: number;
  angle: number;
  colour: string;
  title: string;
};
export const Square = ({ size, angle, colour = "red", title }: TProps) => {
  return (
    <div
      className="bg-red"
      style={{ 
        width: size, 
        height: size, 
        transform: `rotate(${angle}deg)`, 
        backgroundColor:colour
        }}
    >
      {title}
    </div>
  );
};


