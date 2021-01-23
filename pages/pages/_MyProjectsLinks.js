import MyProjecLinks from '../../utils/MyProjecLinks';
export default function MyProjectsLinks() {
    return (
        <div className="py-1 mb-3">
            <p className="flex justify-end my-2 mx-3 hover:bg-fuchsia-300 leading-5 font-bold text-sm text-fuchsia-300 hover:text-black duration-1000">My projects</p>
            {MyProjecLinks.map(link =>
            (<p key={link.key} className="flex justify-end mx-3 leading-5 text-sm text-green-600">
                <a key={link.key} href={link.link} className="hover:bg-green-600 hover:text-black duration-700">{link.projecName} ⩹</a>
            </p>)
            )}
        </div>
    );
};