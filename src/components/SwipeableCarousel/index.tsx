"use client";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface Props {
  data: Array<any>;
  identifier: string;
  renderItem: (item: any) => ReactNode;
}

export default function SwipeableCarousel({
  data,
  identifier,
  renderItem,
}: Props) {
  const [isBack, setIsBack] = useState(false);
  const [isNext, setIsNext] = useState(true);

  if (!data.length) return null;

  const handleBack = () => {
    //TODO: generate unique id (uuid?)
    const div = window.document.getElementById(`${identifier}--carousel`);
    const elem = window.document.getElementsByClassName(
      `${identifier}--element`
    );

    const scrollAmount = elem[0].clientWidth * 0.9 + 20;

    let currentScroll = Number(div?.scrollLeft);

    div?.scrollBy(-scrollAmount, 0);
    currentScroll -= scrollAmount;

    if (currentScroll <= 0) {
      setIsBack(false);
    }
    setIsNext(true);
  };

  const handleNext = () => {
    const div = window.document.getElementById(`${identifier}--carousel`);
    const elem = window.document.getElementsByClassName(
      `${identifier}--element`
    );
    const elemWidth = elem[0].clientWidth;
    const totalWidth = (elem.length - 2) * elemWidth + (elem.length - 2) * 20;

    const scrollAmount = elem[0].clientWidth * 0.9 + 20;

    let currentScroll = Number(div?.scrollLeft);

    div?.scrollBy(scrollAmount, 0);
    currentScroll += scrollAmount;

    if (currentScroll >= totalWidth) {
      setIsNext(false);
    }
    setIsBack(true);
  };

  return (
    <div
      style={{
        width: "100%",
        height: 500,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        id={`${identifier}--carousel`}
        style={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          scrollBehavior: "smooth",
        }}
      >
        {data.map((item, index) => (
          <div key={index} className={`${identifier}--element`}>
            {renderItem(item)}
          </div>
        ))}
      </Stack>
      <Box
        mt={1}
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <IconButton disabled={!isBack} onClick={handleBack} size="large">
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton disabled={!isNext} onClick={handleNext} size="large">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </div>
  );
}
