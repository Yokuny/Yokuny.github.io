import Link from 'next/link';
import HeartButton from './_HeartButton'
export default function Footer() {
    return(
        <div className="lg:mt-20 mt-10 bg-gray-800 rounded">
            <div className="sm:mx-8 p-4 pb-6 grid grid-cols-4">
                <div className="flex justify-start">
                    <HeartButton />
                </div>
                <div className="flex justify-end text-fuchsia-300 text-xs 2xl:text-sm col-start-2 col-span-3 gap-2 lg:gap-5">
                    <div className="hover:bg-fuchsia-300 hover:text-black duration-500">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="hover:bg-fuchsia-300 hover:text-black duration-500">
                        <Link href="/About">About</Link>
                    </div>
                    <a className="hover:bg-fuchsia-300 hover:text-black duration-500" href="https://github.com/Yokuny/Yokuny.github.io">GitHub</a>
                    <div className="hover:bg-fuchsia-300 hover:text-black duration-500">
                        <Link href="/ContactMe">Contact-me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}