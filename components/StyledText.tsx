import { FC } from "react";
import { Text, TextProps } from "./Themed";

export const MonoText: FC<TextProps> = (props: TextProps) => (
  <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
);
