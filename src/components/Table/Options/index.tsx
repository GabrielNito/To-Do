import Delete from "./Delete";
import Edit from "./Edit";

interface OptionsProps {
  item: any;
}

const Options = ({ item }: OptionsProps) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Delete id={item.id} />

      <Edit item={item} />
    </div>
  );
};

export default Options;
