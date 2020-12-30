import ProfileCard from './ProfileCard';
export default function gridArea(){
    return ( 
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
            <div></div>
            <div className="col-span-2 h-screen max-w-2xl bg-gray-800 mx-2 my-8 rounded z-0">
                <div className="mx-5 my-3 max-h-5 bg-orange-500">
                    <h1 className="ml-2 leading-5  text-black font-bold tracking-wide">Web Log</h1>
                </div>
            </div>
            <div className="col-span-1 max-w-xs bg-gray-800 my-8 rounded z-0">
                <ProfileCard />
            </div>
        </div>
    )
};