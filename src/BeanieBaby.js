import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  // console.log(beanieBaby);
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link className='beanie-baby' key={beanieBaby.title} to={`/beanie-babies/${beanieBaby.id}`}>
      <div className='baby'>
        <img src={beanieBaby.image} />
        {beanieBaby.title}
      </div>
    </Link>
  );
}

