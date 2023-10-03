"use client";

import { Product } from "@/interfaces";
import styles from "./ProductDetail.module.scss";
import {
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import {
  TimelapseRounded,
  CookieRounded,
  AddRounded,
  PrintRounded,
} from "@mui/icons-material";

interface Props {
  data: Product;
}

export default function ProductDetail({ data }: Props) {
  return (
    <Grid container spacing={4} className={styles.container}>
      <Grid item xs={12} md={6}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            RECIPES
          </Link>
          <Link underline="hover" color="inherit" href="/recipes">
            BREAKFAST
          </Link>
          <Typography color="text.primary">EGG</Typography>
        </Breadcrumbs>
        <Typography mt={1} mb={8} variant="h4">
          {data.name}
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in
        </Typography>
        <Stack direction="column" spacing={2} mt={2}>
          <Stack direction="row" spacing={6}>
            <Stack direction="row" spacing={1} alignItems="center">
              <TimelapseRounded fontSize="large" />
              <Stack direction="column">
                <Typography fontSize={12}>PREP</Typography>
                <Typography>10 mins</Typography>
              </Stack>
            </Stack>
            <Stack direction="column">
              <Typography fontSize={12}>BAKE</Typography>
              <Typography>1 hr to 1 hr 15 mins</Typography>
            </Stack>
            <Stack direction="column">
              <Typography fontSize={12}>TOTAL</Typography>
              <Typography>1 hr 10 mins</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" spacing={6}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CookieRounded fontSize="large" />
              <Stack direction="column">
                <Typography fontSize={12}>YIELD</Typography>
                <Typography>1 loaf, 12 servings</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button startIcon={<AddRounded />} variant="outlined">
                SAVE RECIPE
              </Button>
              <Button startIcon={<PrintRounded />} variant="outlined">
                PRINT
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          src={data.image}
          alt={data.name}
          className={styles.image}
          width={400}
          height={400}
          objectPosition="center"
          objectFit="cover"
        />
      </Grid>
    </Grid>
  );
}
