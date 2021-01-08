import Link from 'next/link';
import HeartButton from './_HeartButton'
export default function Footer() {
    return(
        <div className="pb-6 bg-gray-800">
            <div className="mx-8 mt-20 mb-4 px-4 h-1 bg-gray-800"></div>
            <div className="mx-8 px-4 grid grid-cols-4">
                <div className="flex justify-start">
                    <HeartButton />
                </div>
                <div className="flex justify-end text-fuchsia-300 text-xs md:text-sm col-start-2 col-span-3">
                    <Link href="/">About</Link>
                    <a className="md:mx-3 mx-2" href="https://github.com/Yokuny/Yokuny.github.io">GitHub</a>
                    <Link href="/ContactMe">Contact-me</Link>
                </div>
            </div>
        </div>
    )
}