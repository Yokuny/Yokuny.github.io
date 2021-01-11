export default function LinkContents(LinksInfo){
    console.log(LinksInfo);
    return(
        <li>
            <a className="text-green-600 hover:bg-green-600 hover:text-black duration-500" href={LinksInfo.children.link}>{LinksInfo.children.title}</a>
            <a className="mx-4 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{LinksInfo.children.platform}</a>
        </li>
    );
}