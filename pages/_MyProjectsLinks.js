import MyProjecLinks from '../utils/MyProjecLinks';
export default function MyProjectsLinks() {
    return (
        <>
            <p className="flex justify-end my-2 mx-3 hover:bg-fuchsia-300 leading-5 font-bold text-sm text-fuchsia-300 hover:text-black duration-1000">My projects</p>
            {MyProjecLinks.map(link =>
            (<p className="flex justify-end mx-3 leading-5 font-medium text-sm text-green-600">
                <a href={link.link} className="hover:bg-green-600 hover:text-black duration-700">{link.projecName} ⩹</a>
            </p>)
            )}
            <div className="mb-5"></div>
        </>
    );
};