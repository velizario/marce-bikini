import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./AccordionContainer.module.css";
import RangeSlider from "./RangeSlider";
import { Checkbox, FormControlLabel } from "@mui/material";
import { SelectionKeys } from "./ShopPage";

const variationHeadings = new Map([
  ["category", "Select Categories"],
  ["color", "Select Color"],
  ["size", "Select Size"],
  ["discountPrice", "Select Price"],
]);

type AccordionContainerProps = {
  name: SelectionKeys;
  variation: Record<string, number>;
  onSelectionUpdate: (
    type: SelectionKeys,
    selection: string,
    deletion?: Boolean
  ) => void;
  selection: Set<string>;
};

const AccordionContainer: React.FC<AccordionContainerProps> = ({
  name,
  variation,
  onSelectionUpdate,
  selection,
}) => {
  return (
    <Accordion disableGutters className={styles.accordion} expanded={true}>
      <AccordionSummary
        className={styles.accordionSummary}
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ margin: 0 }}>
          {variationHeadings.get(name)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetails}>
        <ul className={styles.noDistance}>
          {name.includes("Price") ? (
            <RangeSlider
              name={name}
              onSelectionUpdate={onSelectionUpdate}
              values={selection}
            />
          ) : (
            Object.entries(variation).map((entry) => {
              return (
                <li className={styles.listItem} key={entry[0]}>
                  <FormControlLabel
                    onChange={(e) => {
                      onSelectionUpdate(
                        name,
                        entry[0],
                        !(e.target as HTMLInputElement).checked
                      );
                    }}
                    sx={
                      {
                        // "& .MuiSvgIcon-root": { fontSize: 16 },
                      }
                    }
                    control={<Checkbox checked={selection.has(entry[0])} />}
                    label={`${entry[0]} (${entry[1]})`}
                  />
                </li>
              );
            })
          )}
        </ul>
        {/* <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography> */}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionContainer;
