import SocialLinks from './subpages/_SocialLinks';
import Forms from './subpages/_Forms'
export default function ContactMenu() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center flex-col items-center">
                <div className="mb-4">
                    <SocialLinks />
                </div>
                <Forms />
            </div>
        </>
    );
};