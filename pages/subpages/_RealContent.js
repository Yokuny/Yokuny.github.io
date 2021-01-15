import Image from 'next/image';
export default function RealContent(PostInfo){
    let hasImage = false;
    hasImage = ImageCheck();
    function ImageCheck(){
        let imgCounter = 0;
        imgCounter = PostInfo.children.img.length;
        if(imgCounter > 0){
            return true;
        }else
            return false;
    };
    function ImageRender(){
        let imgLinks = PostInfo.children.img;
        const ImageContent = imgLinks.map(function(imgLink){
            return(
                <div className="flex justify-cente items-center">
                    <Image src={imgLink} height={800} width={1200}></Image>
                </div>
            )

        });
        return ImageContent;
    };
    const postComment = PostInfo.children.comment;
    const socialNetworkNamesAndLink =  PostInfo.children.socialNetworkNamesAndLink;
    return(
    <>
        <div className="mt-2 grid grid-cols-1 gap-4">
            {hasImage ? (ImageRender()) : (<></>)}
        </div>
        <div className="mt-4">
            <a className="text-sm xl:text-lg text-fuchsia-300 hover:bg-fuchsia-300 hover:text-black duration-500" href={PostInfo.children.projectLink}>{PostInfo.children.title}</a>
            <a className="mx-4 text-xs xl:text-sm text-lightBlue-400 hover:bg-lightBlue-400 hover:text-black duration-500">{PostInfo.children.platform}</a>
        </div>
        <div className="mt-4">
            {postComment.map(comment => (
                <p className="text-xs xl:text-sm text-green-600">{comment}</p>
            ))}
        </div>
        <div className="mt-4">
            {socialNetworkNamesAndLink.map(nameAndLink => (
                <a href={nameAndLink[1]} className="mx-2 p-0.5 border text-xs xl:text-sm text-fuchsia-300 bg-gray-900 border-fuchsia-300 hover:text-gray-900 hover:border-gray-900 hover:bg-fuchsia-300 duration-500">{nameAndLink[0]}</a>
            ))}
        </div>
    </>
    );
}