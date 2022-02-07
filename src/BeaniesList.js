import { Link } from 'react-router-dom';
import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {/* render out the beanie babies as a list */}
      {
        beanieBabies.map((item, i) => <Link key={item.title + i} to={`/beanie-babies/${item.id}`}>
          <div className='baby'>
            {item.title}
            <img src={item.image} />
          </div>
        </Link>)
      }
    </div>);
}
