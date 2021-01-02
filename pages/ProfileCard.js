import SocialLinks from './SocialLinks';
import MyProjectsLinks from './MyProjectsLinks';
import MyPictureAndInfo from './MyPictureAndInfo';
export default function ProfileCard() {
  
  return (
      <div className="lg:w-60 w-72 flex flex-col bg-gray-800 justify-center rounded">
        <MyPictureAndInfo />
        <SocialLinks />
        <MyProjectsLinks />
      </div>
  );
};
