import Image from 'next/image';
export default function MyPictureAndInfo(){
    return (
        <>
            <div className="flex justify-center px-3 pb-2">
            <Image
                className="rounded"
                src="/profile1.jpg"
                alt="Profile"
                width={230}
                height={155}
            />
            </div>
            <h4 className="flex justify-center mt-2 font-semibold text-fuchsia-300">
            <p className="font-serif tracking-wider hover:bg-fuchsia-300 hover:text-black duration-1000">Felipe Rangel Ribeiro</p>
            </h4>
            <h6 className="flex justify-center mb-3 leading-5 text-green-600">
            <p className="font-Verdana text-xs tracking-wide font-bold hover:bg-green-600 hover:text-black duration-1000">@Yokuny</p>
            </h6>
        </>
    );
};