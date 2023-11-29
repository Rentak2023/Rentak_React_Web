import { BookingStripWrapper } from "./style";
import { DateIcon, UsersIcon } from "assets/svgs";
import Strip from "./Strip";

const BookingStrip = () => {
  const strips = [
    {
      id: "s1",
      icon: <DateIcon />,
      title: "Fecha entrada",
      description: "10 Junio 2021",
    },
    {
      id: "s2",
      icon: <DateIcon />,
      title: "Fecha salida",
      description: "15 Junio 2021",
    },
    {
      id: "s3",
      icon: <UsersIcon />,
      title: "Cuartos para",
      description: "3 personas",
    },
    {
      id: "s4",
      icon: <UsersIcon />,
      title: "Cuartos para",
      description: "3 personas",
    },
  ];
  return (
    <BookingStripWrapper>
      {strips.map((strip) => (
        <Strip
          key={strip.id}
          icon={strip.icon}
          title={strip.title}
          description={strip.description}
        />
      ))}
    </BookingStripWrapper>
  );
};

export default BookingStrip;
