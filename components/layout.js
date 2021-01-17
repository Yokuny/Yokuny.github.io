import Header from '../pages/subpages/_Header'
import Footer from '../pages/subpages/_Footer'
export default function Layout({ children }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="lg:col-start-2 lg:col-span-4 lg:mt-1 mb-4 mt-2 flex justify-center">
            <Header />
          </div>
          <div className="lg:col-start-2 lg:col-span-4">
            {children}
          </div>
          <div className="lg:col-start-2 lg:col-span-4 ">
            <Footer />
          </div>
        </div>
      )
  }
  