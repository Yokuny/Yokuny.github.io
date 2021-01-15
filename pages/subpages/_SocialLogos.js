import Image from 'next/image';
export default function SocialLogos(){
    const socialLogos = [
        {src:'/github_animated.svg', alt:'github logo', link:'https://github.com/Yokuny', rotate:'transform hover:translate-y-6 hover:-rotate-45 duration-500', key:"1"},
        {src:'/whatsapp_animated.svg', alt:'whatsapp logo', rotate:'transform hover:translate-y-6 hover:rotate-45 duration-500', key:"2"},
        {src:'/instagram_animated.svg', alt:'instagram logo', link:'https://www.instagram.com/yokuny/', rotate:'transform hover:translate-y-6 hover:rotate-90 duration-500', key:"3"},
        {src:'/behance_animated.svg', alt:'behance logo', link:'https://www.behance.net/Yokuny', rotate:'transform hover:translate-y-6 hover:-rotate-180 duration-500', key:"4"},
        {src:'/linkedin_animated.svg', alt:'linkedin logo', link:'https://www.linkedin.com/in/yokuny/', rotate:'transform hover:translate-y-6 hover:-rotate-12 duration-500', key:"5"},
      ];
    return(
        <>
            {socialLogos.map(img => (
                <a key={img.key} href={img.link}>
                    <Image
                        className={img.rotate}
                        src={img.src}
                        alt={img.alt}
                        width={34}
                        height={25}
                        quality={100}
                    />
                </a>
            ))}          
        </>
    )
}