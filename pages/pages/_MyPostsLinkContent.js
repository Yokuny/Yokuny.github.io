import Link from 'next/link'
import allPostsDataGet from '../../utils/allPostsDataGet'
export default function LinkContent(){
    const allPostsData = allPostsDataGet();
    return(
        <>
            {allPostsData.map(({ file, title, platform }) => (
                <li key={file}>
                <Link href={`/${file}`}>
                <>
                    <a className="text-green-600 hover:bg-green-600 hover:text-black duration-500">{title}</a>
                    <a className="mx-4 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{platform}</a>
                </>
                </Link>
                </li>
            ))}
        </>
    )
}