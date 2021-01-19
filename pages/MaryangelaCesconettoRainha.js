import Image from 'next/image';
import ContentFieldTitle from './subpages/_ContentFieldTitle'
import MaryangelaCesconettoRainhaDate from '../utils/MaryangelaCesconettoRainha'
import Head from 'next/head';
export default function MaryangelaCesconettoRainha({title, projectLink, platform, socialNetworkNamesAndLink, imgSrc, comment}) {
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-start bg-gray-800 mx-2 rounded">
                <ContentFieldTitle title="Maryangela Cesconetto Rainha" />
                <ul className="mx-4 mb-8">
                    <div key={title}>
                        <div className="mt-2 grid grid-cols-1 gap-4">
                            {imgSrc.map(imgLink => (
                                <div key={imgLink} className="flex justify-cente items-center">
                                    <Image src={imgLink} height={800} width={1200}></Image>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <a className="text-sm xl:text-lg text-fuchsia-300 hover:bg-fuchsia-300 hover:text-black duration-500" href={projectLink}>{title}</a>
                            <a className="mx-4 text-xs xl:text-sm text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{platform}</a>
                        </div>
                        <div className="mt-4">
                            {comment.map(comment => (
                                <p key={comment} className="text-xs xl:text-sm text-green-600">{comment}</p>
                            ))}
                        </div>
                        <div className="mt-4">
                            {socialNetworkNamesAndLink.map(nameAndLink => (
                                <a key={nameAndLink} href={nameAndLink[1]} className="mx-2 px-2 p-1 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{nameAndLink[0]}</a>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}
export async function getStaticProps() {
    const {title, projectLink, platform, socialNetworkNamesAndLink, imgSrc, comment} = MaryangelaCesconettoRainhaDate;
    return {
        props: {
        title, projectLink, platform, socialNetworkNamesAndLink, imgSrc, comment
        }
    }
}