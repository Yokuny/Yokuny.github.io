import ProfileCard from './ProfileCard';
export default function gridArea(){
    return (
        <div className="grid w-screen grid-cols-1 lg:grid-cols-5">
            <div className="col-auto w-0 h-0 bg-orange-500"></div>
            <div className="lg:col-span-2 bg-gray-800 lg:max-w-2xl mx-2 my-8 rounded">
                <div className="mx-5 my-3 max-h-5 bg-orange-500">
                    <h1 className="ml-2 leading-5 text-black font-bold tracking-wide">Web Log</h1>
                </div>
            </div>
            <div className="flex justify-center col-span-1 bg-gray-800 my-8 rounded">
                <ProfileCard />
            </div>
            <div className="col-auto w-0 h-0 bg-orange-500"></div>
        </div>
    );
};