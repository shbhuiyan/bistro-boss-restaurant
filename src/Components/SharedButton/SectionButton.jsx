/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const SectionButton = ({title}) => {
    return (
        <div className='text-center my-10'>
            <Link>
                <button className='uppercase btn btn-outline border-0 text-center border-b-4'>{title}</button>
            </Link>
        </div>
    );
};

export default SectionButton;