import ContentFieldTitle from './subpages/_ContentFieldTitle'
import FelipeRangelRibeiroDate from '../utils/FelipeRangelRibeiro'
import RealContent from './subpages/_RealContent'
import Layout from '../components/layout'
export default function FelipeRangelRibeiro() {
    return(
        <Layout>
            <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-start bg-gray-800 mx-2 rounded">
                <ContentFieldTitle title="Felipe Rangel Ribeiro" />
                <ul className="mx-4 mb-8">
                    <RealContent key={FelipeRangelRibeiroDate.key}>{FelipeRangelRibeiroDate}</RealContent>
                </ul>
            </div>
        </Layout>
    )
}