import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";

interface ProductDetailsPagePros {
  params: Promise<{ slug: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPagePros) => {
  const { slug } = await params;
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <h1>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </h1>
  );
};

export default ProductDetailsPage;
