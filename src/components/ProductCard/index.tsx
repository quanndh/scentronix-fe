import Image from "next/image";
import styles from "./ProductCard.module.scss";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

interface Props {
  data: any;
}

export default function ProductCard({ data }: Props) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Box>
        <Image
          src={data.image}
          alt={data.name}
          className={styles.image}
          width={250}
          height={400}
        />
        <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
          {data.name}
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} mt={1}>
        <Button
          variant="outlined"
          onClick={() => router.push(routes.detail(data.id))}
        >
          Details
        </Button>
        <Button variant="contained" size="large">
          Buy
        </Button>
      </Stack>
    </div>
  );
}
