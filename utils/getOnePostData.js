import FelipeRangelRibeiro from '../content/FelipeRangelRibeiro'
import TiagoRangelRibeiro from '../content/TiagoRangelRibeiro'
import MaryangelaCesconettoRainha from '../content/MaryangelaCesconettoRainha'
function allPostsDataGet(){
    const allData = [];
    allData.push(TiagoRangelRibeiro);
    allData.push(FelipeRangelRibeiro);
    allData.push(MaryangelaCesconettoRainha);
    return allData;
}
export default function getOnePostData(title){
  const allData = allPostsDataGet();
  const dataFounded = allData.find(function(item) {
    if(item.file === title){
      return item
    }
  });
  return dataFounded;
}