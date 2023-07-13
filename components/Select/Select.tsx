import style from './Select.module.css';

type Option = {
  value: string;
  label: string;
};

type Props = {
  id: string;
  options: Option[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
};

const Select: React.FC<Props> = ({ id, options, selectedValue, onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select className={style.Select} id={id} value={selectedValue} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;