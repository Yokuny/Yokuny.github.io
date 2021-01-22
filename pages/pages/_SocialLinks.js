import Image from 'next/image';
import SocialLogos from './_SocialLogos';
export default function SocialLinks() {
    return (
      <>
        <div className="py- flex justify-center items-center bg-green-700 hover:bg-green-600 duration-1000">
          <Image
            className="transform hover:-translate-y-6 duration-500"
            src='/Mail.svg'
            alt='mail image'
            width={26}
            height={32}
            quality={100}
          />
          <h6 className="ml-2 font-medium text-sm text-black">Felipe.vni@hotmail.com</h6>
        </div>
        <div className="px-8 py-1 flex justify-evenly items-center bg-green-700 hover:bg-green-600 duration-1000">
          <SocialLogos />
        </div>
      </>
    )
};