type VariationElementProps = {
  variation: string;
  value: number;
};

const VariationElement: React.FC<VariationElementProps> = ({
  variation,
  value,
}) => {
  return (
    <li>
      {variation} ({value})
    </li>
  );
};

export default VariationElement;
