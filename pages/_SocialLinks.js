import Image from 'next/image';

export default function SocialLinks() {
    const socialLogos = [
        {src: '/SVG github_animated.svg', alt:'github logo', link:'https://github.com/Yokuny', rotate:'transform hover:translate-y-6 hover:-rotate-45 duration-500'},
        {src: '/SVG whatsapp_animated.svg', alt:'whatsapp logo', rotate:'transform hover:translate-y-6 hover:rotate-45 duration-500'},
        {src: '/SVG instagram_animated.svg', alt:'instagram logo', link:'https://www.instagram.com/yokuny/', rotate:'transform hover:translate-y-6 hover:rotate-90 duration-500'},
        {src: '/SVG behance_animated.svg', alt:'behance logo', link:'https://www.behance.net/Yokuny', rotate:'transform hover:translate-y-6 hover:-rotate-180 duration-500'},
        {src: '/SVG linkedin_animated.svg', alt:'linkedin logo', link:'https://www.linkedin.com/in/yokuny/', rotate:'transform hover:translate-y-6 hover:-rotate-12 duration-500'},
      ];
    return (
      <>
        <div className="py-1 flex justify-center items-center bg-green-700 hover:bg-green-600 duration-1000">
          <Image
            className="transform hover:-translate-y-6 duration-500"
            src='/SVG mail_animated.svg'
            alt='mail image'
            width={26}
            height={32}
          />
          <h6 className="ml-2 font-medium text-black">Felipe.vni@hotmail.com</h6>
        </div>
        <div className="px-8 py-1 flex justify-evenly items-center bg-green-700 hover:bg-green-600 duration-1000">
          {socialLogos.map(img => (
            <a href={img.link}>
              <Image
                className={img.rotate}
                src={img.src}
                alt={img.alt}
                width={34}
                height={25}
              />
            </a>
          ))}
        </div>
      </>
    )
};