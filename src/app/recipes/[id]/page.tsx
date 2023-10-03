import { products } from "@/mocks";
import RecipeScreen from "@/modules/Recipe";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const detail = products.find((x) => x.id === Number(id));

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: detail?.name,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function RecipeDetail({ params }: { params: { id: string } }) {
  const detail = products.find((x) => x.id === Number(params.id));
  return (
    <>
      <RecipeScreen data={detail} />
    </>
  );
}
