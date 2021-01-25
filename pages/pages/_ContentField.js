import ContentFieldTitle from './_ContentFieldTitle'
import LinkContent from './_LinkContent'
import MyPostsLinkContent from './_MyPostsLinkContent'
export default function ContentField(){
    return(
        <div className="flex flex-col justify-start bg-gray-800 mx-2 rounded">
            <ContentFieldTitle title="Web log" />
            <ul className="mx-6 mb-8">
                <MyPostsLinkContent />
            </ul>
            {/* <ul className="mx-6 mb-8">
                <LinkContent />
            </ul> */}
        </div>
    )
};