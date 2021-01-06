import Image from 'next/image';
export default function SocialLogos(){
    const socialLogos = [
        {src: '/Github.svg', alt:'github logo', link:'https://github.com/Yokuny', rotate:'transform hover:translate-y-6 hover:-rotate-45 duration-500'},
        {src: '/whatsapp.svg', alt:'whatsapp logo', rotate:'transform hover:translate-y-6 hover:rotate-45 duration-500'},
        {src: '/Instagram.svg', alt:'instagram logo', link:'https://www.instagram.com/yokuny/', rotate:'transform hover:translate-y-6 hover:rotate-90 duration-500'},
        {src: '/Behance.svg', alt:'behance logo', link:'https://www.behance.net/Yokuny', rotate:'transform hover:translate-y-6 hover:-rotate-180 duration-500'},
        {src: '/Linkedin.svg', alt:'linkedin logo', link:'https://www.linkedin.com/in/yokuny/', rotate:'transform hover:translate-y-6 hover:-rotate-12 duration-500'},
      ];
    return(
        <>
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
        </>
    )
}