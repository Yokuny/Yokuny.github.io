import TiagoRangelRibeiro from '../content/TiagoRangelRibeiro'
import FelipeRangelRibeiro from '../content/FelipeRangelRibeiro'
import MaryangelaCesconettoRainha from '../content/MaryangelaCesconettoRainha'
import WemillyVarjaoBorges from '../content/WemillyVarjaoBorges'
import ViniciusGeraldoCaliman from '../content/ViniciusGeraldoCaliman'
import AlexiaCsajkovicsFilgueiras from '../content/AlexiaCsajkovicsFilgueiras'
import RosilaneVasconcelosBraga from '../content/RosilaneVasconcelosBraga'
import AugustoCesarDeAndradeFarias from '../content/AugustoCesarDeAndradeFarias'
export default function allPostsDataGet(){
    const firstPackOfData = [];
    firstPackOfData.unshift(TiagoRangelRibeiro);
    firstPackOfData.unshift(FelipeRangelRibeiro);
    firstPackOfData.unshift(MaryangelaCesconettoRainha);
    firstPackOfData.unshift(WemillyVarjaoBorges);
    firstPackOfData.unshift(ViniciusGeraldoCaliman);
    const secondPackOfData = [];
    secondPackOfData.unshift(AlexiaCsajkovicsFilgueiras);
    secondPackOfData.unshift(RosilaneVasconcelosBraga);
    secondPackOfData.unshift(AugustoCesarDeAndradeFarias);

    const allData = [];
    allData.unshift(firstPackOfData);
    allData.unshift(secondPackOfData);
    return allData;
}