import Image from 'next/image';
export default function ProfileCard() {
  const socialLogos = [
    {src: '/github.svg', alt:'github logo'},
    {src: '/whatsapp.svg', alt:'whatsapp logo'},
    {src: '/instagram.svg', alt:'instagram image'},
    {src: '/behance.svg', alt:'behance image'},
    {src: '/carta.svg', alt:'linkedin image'},
];
const projecLinks = [
  {projecName: 'Hash-game', link: "https://yokuny.github.io/JogoDaVelha/"},
  {projecName: 'Acid-snake', link: "https://github.com/Yokuny/Acid-snake"},
  {projecName: 'ToDo-list', link: "https://yokuny.github.io/javaScritp-to-do-list/"}
];
  return (
      <div className="flex flex-col justify-center">
        <div className="p-2">
          <Image
            className=""
            src="/profile1.jpg"
            alt="Profile"
            width={240}
            height={165}
          />
        </div>
        <h4 className="flex justify-center mt-2 font-semibold text-fuchsia-300">
          <p className="hover:bg-fuchsia-300 hover:text-black">Felipe Rangel Ribeiro</p>
        </h4>
        <h6 className="flex justify-center mb-2 leading-5 text-sm text-green-600">
          <p className="hover:bg-green-600 hover:text-black">@Yokuny</p>
        </h6>
        <div className="py-1 flex justify-center items-center bg-green-700 hover:bg-green-600">
          <Image
            className=""
            src='/carta.svg'
            alt='mail image'
            width={26}
            height={30}
          />
          <h6 className="ml-2 text-black">Felipe.vni@hotmail.com</h6>
        </div>
        <div className="px-8 py-1 flex justify-evenly items-center bg-green-700 hover:bg-green-600">
          {socialLogos.map(img =>
            (<Image
              className="pointer"
              src={img.src}
              alt={img.alt}
              width={25}
              height={22}
            />)
            )}
        </div>
        <p className="flex justify-end my-2 mx-3 hover:bg-fuchsia-300 leading-5 font-bold text-fuchsia-300  hover:text-black">My projects</p>
        {projecLinks.map(link =>
          (<p className="flex justify-end mx-3  leading-5 font-bold text-green-600 hover:text-black">
            <a href={link.link} className="hover:bg-green-600">{link.projecName} ⩹</a>
          </p>)
        )}
      </div>
  );
};
