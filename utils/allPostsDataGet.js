import FelipeRangelRibeiro from '../content/FelipeRangelRibeiro'
import TiagoRangelRibeiro from '../content/TiagoRangelRibeiro'
import MaryangelaCesconettoRainha from '../content/MaryangelaCesconettoRainha'
import WemillyVarjaoBorges from '../content/WemillyVarjaoBorges'
export default function allPostsDataGet(){
    //mudei para const. olhar se nao vai dar erro
    const allData = [];
    allData.push(WemillyVarjaoBorges);
    allData.push(MaryangelaCesconettoRainha);
    allData.push(FelipeRangelRibeiro);
    allData.push(TiagoRangelRibeiro);
    return allData;
}