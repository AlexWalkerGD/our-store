import { prismaClient } from "@/lib/prisma";

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

  return <h1>{product.name}</h1>;
};

export default ProductDetailsPage;
