import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../model/productModel";
import styles from "./FeaturedCard.module.css";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, images, shortDesc, variations } = product.attributes;

  return (
    <Card
      sx={{
        // boxShadow: "0 0 8px 5px rgb(0 0 0 / 8%)",
        boxShadow: "none",
      }}
    >
      <Link to={`/product/${String(product.id)}`}>
        {/* <CardActionArea component={RouterLink} to="/questions"> */}
        <CardMedia
          component="img"
          alt="bikini"
          className={styles.image}
          image={`${process.env.REACT_APP_DATA_URL}${images.data[0].attributes.url}`}
        />
        {/* </CardActionArea> */}
      </Link>
      <CardContent sx={{ paddingLeft: 0 }}>
        <Link
          className={styles.titleLink}
          to={`/product/${String(product.id)}`}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{ textAlign: "left", fontWeight: 600, lineHeight: "1.4rem" }}
          >
            {title}
          </Typography>
        </Link>

        <Typography variant="body2" sx={{ textAlign: "left" }}>
          {shortDesc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
