import { Box } from "@mui/system";
import BenefitItem from "../../utilityComponents/BenefitItem";

export type Benefit = {
  heading: string;
  text: string;
  icon: string;
};

const benefitsList = [
  {
    heading: "Fast Shipping",
    text: "Pellentesque tincidunt morbi varius",
    icon: "https://xstore4-qieiudwfys4jovetzvnw.stackpathdns.com/wp-content/uploads/2020/10/rocket.png",
  },
  {
    heading: "Secure Shopping",
    text: "Nisisem sapien turpis semper",
    icon: "https://xstore4-qieiudwfys4jovetzvnw.stackpathdns.com/wp-content/uploads/2020/10/secure.png",
  },
  {
    heading: "Student Discount",
    text: "Faucibus sit sit habitant pulvinar",
    icon: "https://xstore-5-qieiudwfys4jovetzvnw.stackpathdns.com/wp-content/uploads/2020/10/sale.png",
  },
  {
    heading: "Free Returns",
    text: "Euismod pretium dictum euismods",
    icon: "https://xstore4-qieiudwfys4jovetzvnw.stackpathdns.com/wp-content/uploads/2020/10/returs.png",
  },
];

const Benefits = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {benefitsList.map((item) => (
        <BenefitItem key={item.heading} item={item} sx={{ width: "22%" }} />
      ))}
    </Box>
  );
};

export default Benefits;
