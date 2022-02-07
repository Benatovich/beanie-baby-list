import { Link } from 'react-router-dom';
import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {/* render out the beanie babies as a list */}
      {
        beanieBabies.map(item => <BeanieBaby 
          key={item.id}
          item={item}
        />)
      }
    </div>);
}
