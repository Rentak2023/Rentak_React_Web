import { P4 } from "../../Typography";
import { Label } from "./styles";

export default function InputLabel({ children, required, ...props }: any) {
  if (!children) return null;

  return (
    <Label {...props}>
      {typeof children === "string" ? (
        <P4 weight="600" color="#181A20">{children}</P4>
      ) : (
        children
      )}
      {required && <sup className="super">*</sup>}
    </Label>
  );
}
