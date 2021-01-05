export default function MyProjectsLinks() {
    const projecLinks = [
        {projecName: 'Hash-game', link: "https://yokuny.github.io/JogoDaVelha/"},
        {projecName: 'Acid-snake', link: "https://github.com/Yokuny/Acid-snake"},
        {projecName: 'ToDo-list', link: "https://yokuny.github.io/javaScritp-to-do-list/"},
    ];
    return (
        <>
            <p className="flex justify-end my-2 mx-3 hover:bg-fuchsia-300 leading-5 font-bold text-sm text-fuchsia-300 hover:text-black duration-1000">My projects</p>
            {projecLinks.map(link =>
            (<p className="flex justify-end mx-3 leading-5 font-medium text-sm text-green-600">
                <a href={link.link} className="hover:bg-green-600 hover:text-black duration-700">{link.projecName} ⩹</a>
            </p>)
            )}
            <div className="mb-5"></div>
        </>
    );
};