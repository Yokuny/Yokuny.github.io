import TiagoRangelRibeiro from '../content/TiagoRangelRibeiro'
import FelipeRangelRibeiro from '../content/FelipeRangelRibeiro'
import MaryangelaCesconettoRainha from '../content/MaryangelaCesconettoRainha'
import WemillyVarjaoBorges from '../content/WemillyVarjaoBorges'
import ViniciusGeraldoCaliman from '../content/ViniciusGeraldoCaliman'
import AlexiaCsajkovicsFilgueiras from '../content/AlexiaCsajkovicsFilgueiras'
import RosilaneVasconcelosBraga from '../content/RosilaneVasconcelosBraga'
import AugustoCesarDeAndradeFarias from '../content/AugustoCesarDeAndradeFarias'
import AmandaDaSilvaSouza from '../content/AmandaDaSilvaSouza'
import LaraPravatoFigueiredo from '../content/LaraPravatoFigueiredo'
import AliceUliana from '../content/AliceUliana'
import DiegoDiasCosta from '../content/DiegoDiasCosta'
import GiovanaBonassina from '../content/GiovanaBonassina'
export default function allPostsDataGet(){
    const firstPackOfData = [];
    firstPackOfData.unshift(TiagoRangelRibeiro);
    firstPackOfData.unshift(FelipeRangelRibeiro);
    firstPackOfData.unshift(MaryangelaCesconettoRainha);
    firstPackOfData.unshift(WemillyVarjaoBorges);
    firstPackOfData.unshift(ViniciusGeraldoCaliman);
    firstPackOfData.unshift(AlexiaCsajkovicsFilgueiras);
    const secondPackOfData = [];
    secondPackOfData.unshift(RosilaneVasconcelosBraga);
    secondPackOfData.unshift(AugustoCesarDeAndradeFarias);
    secondPackOfData.unshift(AmandaDaSilvaSouza);
    secondPackOfData.unshift(LaraPravatoFigueiredo);
    secondPackOfData.unshift(AliceUliana);
    secondPackOfData.unshift(GiovanaBonassina);
    const thirdPackOfData = [];
    thirdPackOfData.unshift(DiegoDiasCosta)

    const allData = [];
    allData.unshift(firstPackOfData);
    allData.unshift(secondPackOfData);
    allData.unshift(thirdPackOfData);
    return allData;
}