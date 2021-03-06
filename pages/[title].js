import Head from 'next/head';
import Image from 'next/image';
import ContentFieldTitle from './pages/_ContentFieldTitle'
import getContentsTitles from '../utils/getContentsTitles'
import getOnePostData from '../utils/getOnePostData'
export default function Post({title, projectLink, platform, socialNetworkNamesAndLink, imgSrc, comment}) {
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-start bg-gray-800 mx-2 rounded">
                <ContentFieldTitle title={title} />
                <ul className="mx-4 mb-8">
                    <div key={title}>
                        <div className="mt-2 grid grid-cols-1 gap-4">
                            {imgSrc.map(imgLink => (
                                <div key={imgLink} className="flex justify-center items-center">
                                    <Image src={imgLink[0]} alt="No loaded image"  height={imgLink[1]} width={imgLink[2]} quality={100}></Image>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <a className="text-sm xl:text-lg text-fuchsia-300 hover:bg-fuchsia-300 hover:text-black duration-500" href={projectLink}>{title}</a>
                            <a className="mx-3 text-xs xl:text-sm text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{platform}</a>
                        </div>
                        <div className="mt-4">
                            {comment.map(comment => (
                                <p key={comment} className="mx-4 lg:mr-20 mr-7 text-xs xl:text-sm text-green-600">{comment}</p>
                            ))}
                        </div>
                        <div className="mt-6">
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
//aqui pegou os arquivos e passou como paramento pra essa pagina
//is now using the getPostData function in getStaticProps to get the post data and return it as props
export async function getStaticProps({ params }) {
    //params retorna . o nome da path(rota) digitada na barra de navegação
  const dataName = params.title;
  const allDataContent = await getOnePostData(dataName);
  const {title, projectLink, platform, socialNetworkNamesAndLink, imgSrc, comment} = allDataContent;
  return {
      props: {
          title, projectLink, platform, socialNetworkNamesAndLink, imgSrc, comment
      }
  }
  //retorna ao 'props'
}
//aqui esta chamando a função do lib e pegando o nome dos arquivos
export async function getStaticPaths() {
  //const paths = getAllPostIds()
  // return {
  //   paths,
  //   fallback: false
  // }
  const eachFile = getContentsTitles();
  // eachFile =
  // [
  //   { params: { title: 'FelipeRangelRibeiro' } },
  //   { params: { title: 'MaryangelaCesconettoRainha' } },
  //   { params: { title: 'TiagoRangelRibeiro' } }
  // ]
  return {
      paths: eachFile,
      fallback: false
  }
  //retorna ao 'getStaticProps'
}