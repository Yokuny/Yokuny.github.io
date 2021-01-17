import ContentFieldTitle from './subpages/_ContentFieldTitle'
import TiagoRangelRibeiroDate from '../utils/TiagoRangelRibeiro'
import RealContent from './subpages/_RealContent'
import Layout from '../components/layout'
export default function TiagoRangelRibeiro() {
    return(
        <Layout>
            <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-start bg-gray-800 mx-2 rounded">
                <ContentFieldTitle title="Tiago Rangel Ribeiro" />
                <ul className="mx-4 mb-8">
                    <RealContent key={TiagoRangelRibeiroDate.key}>{TiagoRangelRibeiroDate}</RealContent>
                </ul>
            </div>
        </Layout>
    )
}