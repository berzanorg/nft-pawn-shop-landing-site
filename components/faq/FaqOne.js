import Link from "next/link";

const FaqOne = () => {
    return(
        <>
            <div id="uni_faq" className="uni-faq uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                        <div className="uk-panel">
                            <h2 className="uk-h3 uk-h1@m">FAQ</h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                        <ul className="uk-card uk-card-small uk-card-large@m uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto uk-box-shadow-xsmall dark:uk-background-white-5" data-uk-accordion="collapsible: false" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What exactly is the NFT Pawn Shop?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">NFT Pawn Shop is a decentralized platform that enables you to secure loans by using your NFTs as collateral, as well as to earn interest by lending funds.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">How does borrowing work?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">NFT Pawn Shop is a decentralized platform that enables you to secure loans by using your NFTs as collateral, as well as to earn interest by lending funds.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What’s the process for lenders?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">Browse available loan requests to find one that suits your lending criteria. When you spot a favorable opportunity, you can fund the loan and, in return, hold the borrower’s NFT as collateral until the loan is repaid with interest.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What if a loan isn’t repaid?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">Should a borrower fail to repay the loan within the agreed timeframe, the collateralized NFT is forfeited and transferred to the lender, ensuring the protection of your investment.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What makes us unique?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">We go beyond typical services by offering lightweight SDKs and comprehensive documentation for easy integration, allowing even our competitors to extend the same services through seamless integration. This commitment to openness and accessibility sets us apart in the NFT financial space.</p>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqOne;