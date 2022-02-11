// export type Colors = "Red" | "Green" | "Blue" | "Black";
// export type Sizes = "XS" | "S" | "M" | "L" | "XL";
// export type Categories = "Category1" | "Category2" | "Category3" | "Category4";
// there is big issue here - this is product selections and not variations!!!!!
// export type ProductVariations = Record<
//   "size" | "color" | "quantity" | "discountPrice" | "price",
//   string
// >;

import { StrapiProduct, StrapiProductAttributes } from "./strapiProductModel";
import { SelectionElements, FilterElements } from "../structure/shop/ShopPage";
import { StrapiRootObject } from "../model/strapiProductModel";

export interface ProductModel extends StrapiProduct {}

export class Product implements StrapiProduct {
  constructor(public id: number, public attributes: StrapiProductAttributes) {}
}

//TODO:
//BUG:
//NOTE:


export interface ProductModelTemplate {
  getProducts(
    selections: SelectionElements
  ): Promise<{ data: Product[]; newVariations: FilterElements }>;
  publishProduct(product: Product): Promise<Product>;
  unpublishProduct(product: Product): Promise<Product>;
  updateProduct(product: Product): Promise<Product>;
  getProductById(id: string): Promise<Product>;
}

class VariationsImpl implements FilterElements {
  category = {};
  discountPrice = {
    minPrice: Infinity,
    maxPrice: -Infinity,
  };
  color = {};
  size = {};
}

const getCount = function (
  product: Product,
  selections: SelectionElements,
  filterList: FilterElements
) {
  const selectionForCategory = { ...selections, category: new Set<string>() };
  if (matchingVariations(product, selectionForCategory)) {
    filterList.category[product.attributes.category.data.attributes.Name] =
      (filterList.category[product.attributes.category.data.attributes.Name] ??
        0) + 1;
  }

  const selectionForColor = { ...selections, color: new Set<string>() };
  if (matchingVariations(product, selectionForColor)) {
    filterList.color[product.attributes.color] =
      (filterList.color[product.attributes.color] ?? 0) + 1;
  }

  const selectionForSize = { ...selections, size: new Set<string>() };
  const sizeSelections = matchingVariations(product, selectionForSize);
  if (sizeSelections) {
    sizeSelections.forEach((sel) => {
      filterList.size[sel.size] = (filterList.size[sel.size] ?? 0) + 1;
    });
  }
};

// Returns the product variations meeting the selection criteria | false if no variations are matching the criteria
const matchingVariations = function (
  product: Product,
  selections: SelectionElements
) {
  const returnedValue =
    (selections.category.size < 1 ||
      selections.category.has(
        product.attributes.category.data.attributes.Name
      )) &&
    (selections.color.size < 1 ||
      selections.color.has(product.attributes.color)) &&
    product.attributes.variations.filter((variation) => {
      const [minPrice, maxPrice] = Array.from(selections.discountPrice);
      return (
        (selections.size.size < 1 || selections.size.has(variation.size)) &&
        variation.quantity > 0 &&
        variation.discountPrice <= Number(maxPrice) &&
        variation.discountPrice >= Number(minPrice)
      );
    });

  if (returnedValue && returnedValue.length > 0) return returnedValue;
  return false;
};

export class ProductModel implements ProductModelTemplate {
  // FETCH (from Strapi)

  private async fetchProducts(): Promise<Product[]> {
    const res = await fetch(
      `${process.env.REACT_APP_DATA_URL}/api/products?populate=*`
    );
    // const data: Product[] = await res.json(); //with await will return the data
    const data: StrapiRootObject = await res.json();
    return data.data;
  }

  //  Search Products against Selection List
  async getProducts(selections: SelectionElements) {
    let data = await this.fetchProducts();

    let filterList: FilterElements = new VariationsImpl();

    data = data.filter((product) => {
      getCount(product, selections, filterList);
      return matchingVariations(product, selections);
    });
    return { data, newVariations: filterList };
  }

  async getProductById(id: string): Promise<Product> {
    const res = await fetch(
      `${process.env.REACT_APP_DATA_URL}/api/products/${id}?populate=*`
    );
    const data = await res.json(); //with await will return the data
    return data.data;
  }

  async publishProduct(data: Product): Promise<Product> {
    const res = await fetch(`${process.env.REACT_APP_DATA_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  }

  unpublishProduct(product: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }

  updateProduct(product: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}

export const productModelImpl = new ProductModel();
