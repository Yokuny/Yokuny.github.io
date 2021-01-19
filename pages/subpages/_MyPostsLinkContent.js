import MyPostsPages from '../../utils/MyPostsPages'
import Link from 'next/link'
export default function LinkContent(){
    return(
        <>
            {MyPostsPages.map((LinksInfo) =>
                <Link  href={LinksInfo.file}>
                    <li key={LinksInfo.file}>
                        <a className="text-green-600 hover:bg-green-600 hover:text-black duration-500">{LinksInfo.title}</a>
                        <a className="mx-4 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{LinksInfo.platform}</a>
                    </li>
                </Link>
            )}
        </>
    )
}