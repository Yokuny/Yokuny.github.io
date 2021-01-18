import MyPostsPages from '../../utils/MyPostsPages'
import Link from 'next/link'
export default function LinkContent(){
    return(
        <>
            {MyPostsPages.map((LinksInfo) =>
                <div className="flex flex-row">
                <Link href={LinksInfo.file}>
                    <p className="text-green-600 hover:bg-green-600 hover:text-black duration-500">{LinksInfo.title}</p>
                </Link>
                <p className="mx-4 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{LinksInfo.platform}</p>
                </div>
            )}
        </>
    )
}