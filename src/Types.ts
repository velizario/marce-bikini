import { FC, PropsWithChildren } from "react";
import { StrapiProductAttributes } from "./model/strapiProductModel";


// Custom Type for a React functional component with props AND CHILDREN
export type FCWithChildren<P={}> = FC<PropsWithChildren<P>>

// Custom type for children. Used with 'React.FC<Props>'
export type Props = {
    children?: React.ReactNode
  };


// Product type
export type Product = {
  id: number; 
   attributes: StrapiProductAttributes;
}