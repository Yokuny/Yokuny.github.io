import ContentField from './ContentField'
import ProfileCard from './ProfileCard';
import Forms from './Forms'

export default function GridArea(){
    return (
        <div className="grid w-screen grid-cols-1 grid-rows-2 lg:grid-cols-5">
            <div className="col-auto w-0 h-0 bg-orange-500">1</div>
            <div className="lg:col-span-2 lg:row-span-2 bg-gray-800 lg:max-w-2xl mx-2 mt-8 rounded">
                <ContentField />
            </div>
            <div className="flex justify-center col-span-1 my-8">
                <ProfileCard />
            </div>
            <div className="col-auto w-0 h-0 bg-orange-500">4</div>
            <div className="col-auto w-0 h-0 bg-orange-500">5</div>
            <div className="flex justify-center col-span-1 rounded">
                <Forms />
            </div>
            <div className="col-auto w-0 h-0 bg-orange-500">7</div>
            <div className="col-auto w-0 h-0 bg-orange-500">8</div>
            <div className="col-auto w-0 h-0 bg-orange-500">9</div>
            <div className="col-auto w-0 h-0 bg-orange-500">11</div>
            <div className="col-auto w-0 h-0 bg-orange-500">12</div>
            <div className="col-auto w-0 h-0 bg-orange-500">13</div>
        </div>
    );
};