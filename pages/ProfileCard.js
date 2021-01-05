import SocialLinks from './_SocialLinks';
import MyProjectsLinks from './_MyProjectsLinks';
import MyPictureAndInfo from './_MyPictureAndInfo';
export default function ProfileCard() {
  
  return (
      <div className="lg:w-60 w-72 flex flex-col bg-gray-800 justify-center rounded">
        <MyPictureAndInfo />
        <SocialLinks />
        <MyProjectsLinks />
      </div>
  );
};
