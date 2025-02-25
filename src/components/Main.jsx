// Main.jsx


import ComicsList from "./products/ComicsList.jsx";







export default function Main() {
    return (
        <main>
            <section id="jumbo"></section>
            <ComicsList />
            <section className="merchandise">
                <div className="shop">
                    <img src="../img/buy-comics-digital-comics.png" alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="shop">
                    <img src="../img/buy-comics-merchandise.png" alt="" />
                    <span>DC MERCHANDISE</span>
                </div>
                <div className="shop">
                    <img src="../img/buy-comics-subscriptions.png" alt="" />
                    <span>SUBSCRIPTION</span>
                </div>
                <div className="shop">
                    <img src="../img/buy-comics-shop-locator.png" alt="" />
                    <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="shop">
                    <img src="../img/buy-dc-power-visa.svg" alt="" />
                    <span>DC POWER VISA</span>
                </div>
            </section>
        </main>
    );
}