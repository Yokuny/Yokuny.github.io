import FelipeRangelRibeiro from '../content/FelipeRangelRibeiro'
import TiagoRangelRibeiro from '../content/TiagoRangelRibeiro'
import MaryangelaCesconettoRainha from '../content/MaryangelaCesconettoRainha'
import WemillyVarjaoBorges from '../content/WemillyVarjaoBorges'
import ViniciusGeraldoCaliman from '../content/ViniciusGeraldoCaliman'
import AlexiaCsajkovicsFilgueiras from '../content/AlexiaCsajkovicsFilgueiras'
export default function allPostsDataGet(){
    //mudei para const. olhar se nao vai dar erro
    const allData = [];
    allData.push(AlexiaCsajkovicsFilgueiras);
    allData.push(ViniciusGeraldoCaliman);
    allData.push(WemillyVarjaoBorges);
    allData.push(MaryangelaCesconettoRainha);
    allData.push(FelipeRangelRibeiro);
    allData.push(TiagoRangelRibeiro);
    return allData;
}