import Header from './subpages/_Header'
import ContentFieldTitle from './subpages/_ContentFieldTitle'
import Maryangela_Cesconetto_Rainha from '../utils/Maryangela_Cesconetto_Rainha'
import LinkContents from './subpages/_RealContent'

import Footer from './subpages/_Footer'

export default function ContentPage(props) {
    return(
        <>
            <Header />
            <div className="grid grid-cols-1 grid-row-2 lg:grid-cols-4">
                <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-start bg-gray-800 mx-2 rounded">
                    <ContentFieldTitle title="Maryangela Cesconetto Rainha" />
                    <ul className="mx-4 mb-8">
                        <LinkContents key={Maryangela_Cesconetto_Rainha.key}>{Maryangela_Cesconetto_Rainha}</LinkContents>
                    </ul>
                </div>
                <div className="lg:col-start-2 lg:col-span-2">
                    <Footer />
                    {/* <props.children /> */}
                </div>
            </div>
        </>
    )
}