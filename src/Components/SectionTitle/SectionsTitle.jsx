/* eslint-disable react/prop-types */


const SectionsTitle = ({subHeading , heading}) => {
    return (
        <div className="space-y-3 my-16 font-inter md:w-3/12 mx-auto text-center">
            <p className="text-orange-500 italic">--- {subHeading} ---</p>
            <p className="uppercase text-3xl py-4 border-y-4">{heading}</p>
        </div>
    );
};

export default SectionsTitle;