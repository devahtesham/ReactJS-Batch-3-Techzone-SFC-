import CardSection from "./components/CardSection"
import { NAV_LINKS } from "./data"
import "./index.css"
function App() {
  return (
    <>
      <header className="bg-dark text-white py-2">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-3">
              <h1 className="m-0">LOGO</h1>
            </div>
            <div className="col-7">
              <ul className="list-unstyled d-flex align-items-center justify-content-around m-0 fs-5">
                {
                  NAV_LINKS.map((nav,index) => {
                    return (
                      <li key={index}>
                        <a href={nav.navUrl}>{nav.navTitle}</a>
                      </li>

                    )
                  })
                }
                {/* <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li></li>
                <li></li>
                <li></li> */}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="product-listing">
        <CardSection />
      </section>
    </>
  )
}

export default App
