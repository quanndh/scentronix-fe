"use client";
import PageContainer from "@/components/PageContainer";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import styles from "./Recipe.module.scss";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import { Product } from "@/interfaces";
import ProductDetail from "@/components/ProductDetail";

interface Props {
  data?: Product;
}

export default function RecipeScreen({ data }: Props) {
  const router = useRouter();
  const { data: products } = useProduct();

  return (
    <PageContainer>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styles.headerContainer}>
          <Button onClick={() => router.push(routes.recipes)}>
            Categories
          </Button>
          <Button onClick={() => router.push(routes.recipes)}>
            Collections
          </Button>
        </div>

        {data && <ProductDetail data={data} />}

        <Typography variant="h6" mt={4} alignSelf="flex-start">
          RECIPE LIST
        </Typography>
        <Grid container spacing={2} className={styles.productContainer}>
          {products.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <div
                  className={styles.itemContainer}
                  onClick={() => router.push(routes.detail(item.id))}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                    width={280}
                    height={280}
                  />
                  <Typography>{item.name}</Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </PageContainer>
  );
}
