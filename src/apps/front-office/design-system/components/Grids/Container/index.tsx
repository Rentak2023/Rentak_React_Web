import { Container as MantineContainer, ContainerProps } from "@mantine/core";

export default function Container(props: ContainerProps) {
  return (
    <MantineContainer size={"lg"} style={{ position: "relative" }} {...props} />
  );
}
