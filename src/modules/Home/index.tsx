"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./Home.module.scss";
import PageContainer from "@/components/PageContainer";
import SwipeableCarousel from "@/components/SwipeableCarousel";
import useProduct from "@/hooks/useProduct";
import ProductCard from "@/components/ProductCard";

const banners = [
  "https://img.freepik.com/premium-vector/delicious-italian-food-banner-template_23-2148972685.jpg?w=1800",
];

export default function HomeScreen() {
  const { data } = useProduct();

  return (
    <PageContainer>
      <Box sx={{ width: "100%" }}>
        <Box mb={2}>
          <img src={banners[0]} className={styles.banner} />
        </Box>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4">Best food in town</Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <SwipeableCarousel
              data={data}
              identifier="product"
              renderItem={(item) => <ProductCard data={item} />}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
