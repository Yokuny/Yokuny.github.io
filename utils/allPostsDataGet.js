import FelipeRangelRibeiro from '../content/FelipeRangelRibeiro'
import TiagoRangelRibeiro from '../content/TiagoRangelRibeiro'
import MaryangelaCesconettoRainha from '../content/MaryangelaCesconettoRainha'
export default function allPostsDataGet(){
    let allData = [];
    allData.push(TiagoRangelRibeiro);
    allData.push(FelipeRangelRibeiro);
    allData.push(MaryangelaCesconettoRainha);
    return allData;
}