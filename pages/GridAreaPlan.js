import ContentField from './ContentField'
import ProfileCard from './ProfileCard';
import Forms from './Forms'
import Footer from './Footer'

export default function GridArea(){
    return (
        <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-5">
            <div className="lg:col-start-2 lg:col-span-2 lg:row-span-2 col-span-1 lg:max-w-2xl lg:mt-8">
                <ContentField />
            </div>
            <div className="lg:col-start-4 col-span-1 flex justify-center my-8">
                <ProfileCard />
            </div>
            <div className="lg:col-start-4 col-span-1 flex justify-center">
                <Forms />
            </div>
            <div className="lg:col-start-2 lg:col-span-3">
                <Footer />
            </div>
        </div>
    );
};