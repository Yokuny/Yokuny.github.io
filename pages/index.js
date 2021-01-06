import GridAreaPlan from './GridAreaPlan'
import TagHead from './_tagHead'
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <div className="mb-8 flex justify-center items-cente lg:max-h-20">
        <Image
          src="/saint-machine-animated-VHS.svg"
          alt='mail image'
          width={800}
          height={100}
        />
      </div>
      <TagHead />
      <GridAreaPlan />
    </> 
  );
};
