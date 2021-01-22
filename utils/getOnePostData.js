import allPostsDataGet from './allPostsDataGet'
export default function getOnePostData(title){
  const allData = allPostsDataGet();
  const dataFounded = allData.find(function(item) {
    if(item.file === title){
      return item
    }
  });
  return dataFounded;
}