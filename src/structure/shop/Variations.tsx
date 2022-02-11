import styles from "./Variations.module.css";
import AccordionContainer from "./AccordionContainer";
import { SelectionKeys, FilterElements } from "./ShopPage";
import { SelectionElements } from "./ShopPage";
import CloseIcon from "@mui/icons-material/Close";

const maxPrice = 100;

type VariationsProp = {
  variations: FilterElements;
  selections: SelectionElements;
  onSelectionUpdate: (
    type: SelectionKeys,
    selection: string,
    deletion?: Boolean
  ) => void;
};

const Variations: React.FC<VariationsProp> = ({
  variations,
  onSelectionUpdate,
  selections,
}) => {
  console.log(selections);
  return (
    <div className={styles.variations}>
      {/* <div>Active Filters:</div> */}
      {Object.entries(selections).map((selection) => {
        if (selection[0] === "discountPrice") {
          if (
            Number(Array.from(selection[1])[0]) > 0 ||
            Number(Array.from(selection[1])[1]) < maxPrice
          )
            return (
              <span
                key={selection[0]}
                className={styles.activeFilters}
                onClick={
                  () =>
                    onSelectionUpdate(
                      selection[0] as SelectionKeys,
                      "all",
                      true
                    )
                  // How to clear the price!???!?!?
                }
              >
                € {Array.from(selection[1]).join("-")}
                <CloseIcon className={styles.closeIcon} />
              </span>
            );
          // NOTE: check in which case this will run
          else return null;
        } else
          return Array.from(selection[1]).map((item) => {
            return (
              <span
                className={styles.activeFilters}
                key={item}
                onClick={() =>
                  onSelectionUpdate(selection[0] as SelectionKeys, item, true)
                }
              >
                {item}
                <CloseIcon className={styles.closeIcon} />
              </span>
            );
          });
      })}
      {Object.entries(variations).map((variation) => (
        <AccordionContainer
          onSelectionUpdate={onSelectionUpdate}
          key={variation[0]}
          selection={selections[variation[0] as SelectionKeys]}
          name={variation[0] as SelectionKeys}
          variation={variation[1]}
        />
      ))}
    </div>
  );
};

export default Variations;
