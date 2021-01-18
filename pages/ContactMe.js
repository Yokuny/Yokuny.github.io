import SocialLinks from './subpages/_SocialLinks';
import Forms from './subpages/_Forms'
export default function ContactMenu() {
    return (
        <div className="h-screen flex justify-center flex-col items-center">
            <div className="mb-4 w-72 lg:w-60">
                <SocialLinks />
            </div>
            <Forms />
        </div>
    );
};