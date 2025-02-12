// Main.jsx
export default function Main() {
    return (
        <main>
            <section id="content"><h2> -- Content goes here -- </h2></section>
            <section className="merchandise">
                <div className="shop">
                    <img src="/buy-comics-digital-comics.png" alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="shop">
                    <img src="/buy-comics-merchandise.png" alt="" />
                    <span>DC MERCHANDISE</span>
                </div>
                <div className="shop">
                    <img src="/buy-comics-subscriptions.png" alt="" />
                    <span>SUBSCRIPTION</span>
                </div>
                <div className="shop">
                    <img src="/buy-comics-shop-locator.png" alt="" />
                    <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="shop">
                    <img className="visa" src="/buy-dc-power-visa.svg" alt="" />
                    <span>DC POWER VISA</span>
                </div>
            </section>
        </main>
    );
}