import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex item-center'> <FaRegCheckCircle className='text-green-500 mr-2'></FaRegCheckCircle>   {feature}</p>
        </div>
    );
};

Feature.PropTypes= {
    feature: PropTypes.string
}

export default Feature;