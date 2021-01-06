import SocialLinks from './_SocialLinks';
import Forms from './Forms'
import Head from './_tagHead'
export default function ContactMenu() {
    return (
        <>
            <Head />
            <div className="w-screen h-screen flex justify-center flex-col items-center">
                <div className="">
                    <div className="mb-4">
                        <SocialLinks />
                    </div>
                    <Forms />
                </div>
            </div>
        </>
    );
};
        