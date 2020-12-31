import Image from 'next/image';
export default function ProfileCard() {
  const socialLogos = [
    {src: '/github.svg', alt:'github logo', link:'https://github.com/Yokuny'},
    {src: '/whatsapp.svg', alt:'whatsapp logo'},
    {src: '/instagram.svg', alt:'instagram logo', link:'https://www.instagram.com/yokuny/'},
    {src: '/behance.svg', alt:'behance logo', link:'https://www.behance.net/Yokuny'},
    {src: '/linkedin.svg', alt:'linkedin logo', link:'https://www.linkedin.com/in/yokuny/'},
  ];
  const projecLinks = [
    {projecName: 'Hash-game', link: "https://yokuny.github.io/JogoDaVelha/"},
    {projecName: 'Acid-snake', link: "https://github.com/Yokuny/Acid-snake"},
    {projecName: 'ToDo-list', link: "https://yokuny.github.io/javaScritp-to-do-list/"}
  ];
  return (
      <div className="flex flex-col bg-gray-800 justify-center rounded">
        <div className="px-3">
          <Image
            className="rounded"
            src="/profile1.jpg"
            alt="Profile"
            width={230}
            height={155}
          />
        </div>
        <h4 className="flex justify-center mt-2 font-semibold text-fuchsia-300">
          <p className="font-serif tracking-wider hover:bg-fuchsia-300 hover:text-black duration-700">Felipe Rangel Ribeiro</p>
        </h4>
        <h6 className="flex justify-center mb-3 leading-5 text-green-600">
          <p className="font-Verdana text-xs tracking-wide font-bold hover:bg-green-600 hover:text-black duration-700">@Yokuny</p>
        </h6>
        <div className="py-1 flex justify-center items-center bg-green-700 hover:bg-green-600 duration-500">
          <Image
            className="transform hover:-translate-y-6 duration-500"
            src='/mail.svg'
            alt='mail image'
            width={26}
            height={32}
          />
          <h6 className="ml-2 font-medium text-black">Felipe.vni@hotmail.com</h6>
        </div>
        <div className="px-8 py-1 flex justify-evenly items-center bg-green-700 hover:bg-green-600 duration-500">
          {socialLogos.map(img => (
            <a href={img.link}>
              <Image
                className="transform hover:translate-y-6 hover:-rotate-45 duration-500"
                src={img.src}
                alt={img.alt}
                width={34}
                height={25}
              />
            </a>
          ))}
        </div>
        <p className="flex justify-end my-2 mx-3 hover:bg-fuchsia-300 leading-5 font-bold text-sm text-fuchsia-300 hover:text-black duration-700">My projects</p>
        {projecLinks.map(link =>
          (<p className="flex justify-end mx-3 leading-5 font-medium text-sm text-green-600">
            <a href={link.link} className="hover:bg-green-600 hover:text-black duration-700">{link.projecName} ⩹</a>
          </p>)
        )}
        <div className="mb-5"></div>
      </div>
  );
};
