import Image from 'next/image';
import Link from 'next/link'
export default function Header(){
    return(
        <>
            <div className="mb-8 mt-2 flex justify-center items-cente lg:mx-80">
                <Link href="/">
                    <Image
                        className="cursor-pointer"
                        src="/saint-machine-animated-VHS.svg"
                        alt='mail image'
                        width={800}
                        height={100}
                    />
                </Link>
            </div>
        </>
    )

}