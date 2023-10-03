"use client";
import { useScrollTrigger, Slide } from "@mui/material";

interface Props {
  children: React.ReactElement;
}
export default function HideOnScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
