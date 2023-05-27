import './filter.styles.css';
import { FilterParams } from "./filter.properties";

export const Filter = (props: FilterParams) => {
  const { total, filter, setFilter } = props;

  return <div id='filter-container'>
    <div className='counter'>{total}</div>
    <div className='form'>
      <input 
        type='text'
        value={filter}
        placeholder='Filter podcasts...'
        onChange={
          (e) => setFilter && setFilter(e.target.value)
        } 
      />  
    </div>
  </div>
}
