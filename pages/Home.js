import ContentField from './subpages/_ContentField'
import ProfileCard from './subpages/_ProfileCard';
import Forms from './subpages/_Forms'
export default function Home(){
    return (
        <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-x-4">
            <div className="row-start-1 row-span-2 col-span-2 lg:col-span-3 lg:row-span-2 lg:mt-8">
                <ContentField />
            </div>
            <div className="row-start-3 row-span-1 lg:col-start-5 lg:row-start-1 flex justify-center my-8">
                <ProfileCard />
            </div>
            <div className="row-start-4 row-span-1 lg:col-start-5 lg:row-start-2 flex justify-center my-3">
                <Forms />
            </div>
        </div>
    );
};