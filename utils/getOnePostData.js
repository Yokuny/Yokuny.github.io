import allPostsDataGet from './allPostsDataGet'
export default function getOnePostData(title){
  const allData = allPostsDataGet();
  const eachFoundedData = [];
  allData.map(function(onePostData){
    onePostData.map(thePostData =>
      eachFoundedData.push(thePostData)
    )
  });
  const dataFounded = eachFoundedData.find(function(item) {
    if(item.file === title){
      return item
    }
  });
  return dataFounded;
}