import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { SelectionKeys } from "./ShopPage";
import { useEffect } from "react";

type RangeSliderProps = {
  onSelectionUpdate: (type: SelectionKeys, selection: string) => void;
  name: SelectionKeys;
  values: Set<string>;
};

const RangeSlider: React.FC<RangeSliderProps> = ({
  name,
  onSelectionUpdate,
  values,
}) => {
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    setValue(Array.from(values).map((value) => Number(value)));
  }, [values]);

  const handleChangeCommitted = (
    event: Event | React.SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => {
    const updatedValue = newValue as number[];
    onSelectionUpdate(name, updatedValue.join("-"));
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default RangeSlider;
