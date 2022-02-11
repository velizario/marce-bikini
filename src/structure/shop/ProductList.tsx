import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "../../model/productModel";

type ProductListProps = {
  products: Product[];
};

const Productlist: React.FC<ProductListProps> = ({ products }) => {
  // Create Product
  // useEffect(() => {
  //   productModelImpl.createProduct(
  //     new Product(
  //       "bikini1",
  //       23.5,
  //       23.5,
  //       ["/bikini1-1.jpg"],
  //       "Bikini1 short desc",
  //       "Bikini1 long desc",
  //       "top bikinis",
  //       "bikini1 info",
  //       []
  //     )
  //   );
  // }, []);

  return (
    <Grid
      container
      spacing={3}
      // sx={{
      //   margin: "auto",
      //   width: "100%",
      //   maxWidth: "1400px",
      //   display: "flex",
      //   flexDirection: "row",
      //   alignItems: "center",
      // }}
    >
      {products.map((product) => {
        return (
          <Grid item xl={3} lg={4} sm={6} xs={12} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Productlist;
