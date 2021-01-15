import Link from 'next/link';
import HeartButton from './_HeartButton'
export default function Footer() {
    return(
        <div className="pb-6 bg-gray-800">
            <div className="mt-20 mb-4 px-4 h-1 bg-gray-800"></div>
            <div className="mx-8 px-4 grid grid-cols-4">
                <div className="flex justify-start">
                    <HeartButton />
                </div>
                <div className="flex justify-end text-fuchsia-300 text-xs 2xl:text-sm col-start-2 col-span-3">
                    <div className="hover:bg-fuchsia-300 hover:text-black duration-500">
                        <Link href="/">About</Link>
                    </div>
                    <a className="hover:bg-fuchsia-300 hover:text-black duration-500 md:mx-3 mx-2" href="https://github.com/Yokuny/Yokuny.github.io">GitHub</a>
                    <div className="hover:bg-fuchsia-300 hover:text-black duration-500">
                        <Link href="/ContactMe">Contact-me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}