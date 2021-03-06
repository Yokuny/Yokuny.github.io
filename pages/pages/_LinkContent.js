import PostLinks from '../../utils/PostLinks'
export default function LinkContent(){
    return(
        <>
            {PostLinks.map((LinksInfo) =>
            <>
            <div className="-m-3">.</div>
            <li key={LinksInfo.title}>
                <a className="text-green-600 hover:bg-green-600 hover:text-black duration-500" href={LinksInfo.link}>{LinksInfo.title}</a>
                <a className="mx-3 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{LinksInfo.platform}</a>
            </li>
            </>
            )}
        </>
    )
}