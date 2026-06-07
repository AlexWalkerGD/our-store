import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductWithTotalPrice } from "@/helpers/product";

export type ProductWithTotalPriceAndCategory = ProductWithTotalPrice & {
  category: {
    name: string;
  };
};

interface ProductTableProps {
  products: ProductWithTotalPriceAndCategory[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Preço total</TableHead>
          <TableHead>Preço base</TableHead>
          <TableHead>Vendidos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category.name}</TableCell>
            <TableCell>€ {product.totalPrice.toFixed(2)}</TableCell>
            <TableCell>€ {product.basePrice.toFixed(2)}</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
