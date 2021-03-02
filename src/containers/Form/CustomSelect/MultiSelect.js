import Select from 'react-select';
import { colourOptions } from '../../../data/customSelectData';

const MultiSelect = () => {
    return (
      <Select
        defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
    />
    );
  };
  
export default MultiSelect;
