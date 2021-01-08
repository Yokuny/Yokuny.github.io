import Header from './_Header'
import ContentFieldTitle from './_ContentFieldTitle'
import Footer from './_Footer'
import Content from './_Content'
export default function ContentPage() {
    return(
        <>
            <Header />
            <div className="grid grid-cols-1 grid-row-2 lg:grid-cols-4">
                <div className="lg:col-start-2 lg:col-span-2 flex flex-col justify-start bg-gray-800 mx-2 rounded">
                    <ContentFieldTitle />
                    <ul className="ml-4 mb-8">
                        <Content />
                    </ul>
                </div>
                <div className="lg:col-start-2 lg:col-span-2">
                    <Footer />
                </div>
            </div>
        </>
    )
}