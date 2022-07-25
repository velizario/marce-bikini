import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { productModelImpl } from "../../model/productModel";
import { Product } from "../../model/productModel";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import Productlist from "./ProductList";
import Variations from "./Variations";

export type SelectionKeys = "category" | "color" | "size" | "discountPrice";
export type Prices = "minPrice" | "maxPrice";

export type FilterElements = {
  category: Record<string, number>;
  discountPrice: Record<Prices, number>;
  color: Record<string, number>;
  size: Record<string, number>;
};

export type SelectionElements = {
  category: Set<string>;
  discountPrice: Set<string>;
  color: Set<string>;
  size: Set<string>;
};

// test add elements to the selections

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [variations, setVariations] = useState<FilterElements>(
    {} as FilterElements
  );
  const [selections, setSelections] = useState<SelectionElements>({
    category: new Set(),
    color: new Set(),
    size: new Set(),
    discountPrice: new Set(["0", "100"]),
  });

  // Update selections list function
  const selectionUpdateHandler = (
    type: SelectionKeys,
    selection: string,
    deletion?: Boolean
  ) => {
    let updatedVariation = new Set();

    setSelections((selections) => {
      if (deletion) {
        if (type === "discountPrice") {
          updatedVariation.add("0").add(100);
        } else {
          updatedVariation = new Set([...Array.from(selections[type])]);
          updatedVariation.delete(selection);
        }
      } else {
        if (type === "discountPrice") {
          updatedVariation = new Set(selection.split("-"));
        } else {
          updatedVariation = new Set([
            ...Array.from(selections[type]),
            selection,
          ]);
        }
      }
      return { ...selections, [type]: updatedVariation };
    });
  };

  // Fetch Products function
  const fetchProducts = async (selections: SelectionElements) => {
    const { data, newVariations } = await productModelImpl.getProducts(
      selections
    );
    setProducts(data);
    setVariations(newVariations);
  };

  // Initial fetch on page render. Should also be used if opened directly with an address/route
  useEffect(() => {
    fetchProducts(selections);
  }, [selections]);

  // for debugging
  // useEffect(() => {
  //   console.log("Product List:", products);
  //   console.log("Selection List:", selections);
  // }, [products, selections]);

  return (
    <HeaderFooter>
      <ContainerLarge>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "1200px",
          }}
        >
          <Variations
            variations={variations}
            onSelectionUpdate={selectionUpdateHandler}
            selections={selections}
          />
          <Productlist products={products}/>
        </Box>
      </ContainerLarge>
    </HeaderFooter>
  );
};

export default ShopPage;
