import Link from 'next/link'
import allPostsDataGet from '../../utils/allPostsDataGet'
function LinkContent(){
    const allPostsData = allPostsDataGet();
    const backwardWords = "<<";
    const fowardWords = ">>";
    function previousPage() {
        const a = document.getElementById("0");
        const b = document.getElementById("1");
        b.style.display = 'none'
        a.style.display = 'initial'
    }
    function nextPage() {
        const a = document.getElementById("1");
        const b = document.getElementById("0");
        b.style.display = 'none'
        a.style.display = 'initial'
    }
    return(
        <>
        {allPostsData.map((content,index) =>
            <div id={index} className="mb-3">
            {content.map(({ file, title, platform }) => 
            <>
                <Link href={`/${file}`}>
                    <li key={file} className="cursor-pointer">
                        <a className="text-green-600 hover:bg-green-600 hover:text-black duration-500">{title}</a>
                        <a className="mx-3 text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{platform}</a>
                    </li>
                </Link>
            </>
            )}
            </div>
        )}
        <div className="flex justify-center mt-6">
            <button onClick={previousPage} className="mx-2 px-3 p-1 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{backwardWords}</button>
            <button onClick={nextPage} className="mx-2 px-3 p-1 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{fowardWords}</button>
        </div>
        </>
    )
}

export default LinkContent;