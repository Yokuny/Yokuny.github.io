import ContentFieldTitle from './subpages/_ContentFieldTitle'
import MaryangelaCesconettoRainhaDate from '../utils/MaryangelaCesconettoRainha'
import RealContent from './subpages/_RealContent'
import Layout from '../components/layout'
export default function MaryangelaCesconettoRainha() {
    return(
        <Layout>
            <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-start bg-gray-800 mx-2 rounded">
                <ContentFieldTitle title="Maryangela Cesconetto Rainha" />
                <ul className="mx-4 mb-8">
                    <RealContent key={MaryangelaCesconettoRainhaDate.key}>{MaryangelaCesconettoRainhaDate}</RealContent>
                </ul>
            </div>
        </Layout>
    )
}