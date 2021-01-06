import ContentFieldTitle from './_ContentFieldTitle'
import Content from './_Content'
export default function ContentField(){
    return(
        <div className="flex flex-col justify-start bg-gray-800 mx-2 rounded">
            <ContentFieldTitle />
            <ul className="ml-4 mb-8">
                <Content />
            </ul>
        </div>
    )
};