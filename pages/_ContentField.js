import ContentFieldTitle from './_ContentFieldTitle'
import LinkContents from './_LinkContents'
import PostLinks from '../utils/PostLinks'
export default function ContentField(){
    return(
        <div className="flex flex-col justify-start bg-gray-800 mx-2 rounded">
            <ContentFieldTitle />
            <ul className="ml-4 mb-8">
                {PostLinks.map((LinksInfo) =>
                    <LinkContents>{LinksInfo}</LinkContents>
                )}
            </ul>
        </div>
    )
};