import ContentField from './subpages/_ContentField'
import ProfileCard from './ProfileCard';
import Forms from './subpages/_Forms'
import Footer from './subpages/_Footer'

export default function GridArea(props){
    return (
        <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-6 gap-x-4">
            <div className="lg:col-start-2 lg:col-span-3 lg:row-span-2 col-span-1 lg:max-w-2xl lg:mt-8">
                <ContentField />
            </div>
            <div className="lg:col-start-5 col-span-1 flex justify-center my-8">
                <ProfileCard />
            </div>
            <div className="lg:col-start-5 col-span-1 flex justify-center">
                <Forms />
            </div>
            <div className="lg:col-start-2 lg:col-span-4">
                <Footer />
            </div>
        </div>        
    );
};