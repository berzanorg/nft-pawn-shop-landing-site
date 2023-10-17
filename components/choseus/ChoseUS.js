const ChoseUs = () => {
    return( 
        <>
            <div id="uni_whyus" className="uni-whyus uk-section uk-section-xlarge@m uk-panel">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid>
                        <div className="uk-panel uk-text-center">
                            <h2 className="uk-h3 uk-h1@m">Why choose us?</h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                        <img className="uk-position-top-left uk-text-secondary" width="16" src="images/objects/circle-01.png" alt="Object" style={{top: "-16%", left: "8%"}} />
                        <img className="uk-position-bottom-right uk-text-primary" width="24" src="images/objects/circle-02.png" alt="Object" style={{bottom: "16%", right: "-8%"}} />
                        <img className="uk-position-bottom-left uk-text-muted" width="28" src="images/objects/x.png" alt="Object" style={{bottom: "16%", left: "-8%"}} />
                        <div className="uk-grid uk-child-width-1-4@s" data-uk-grid="masonry: true;">
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">01.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                        Full Focus and Expertise
                                            
                                        </h3>
                                        <p className="uk-text-muted">  We are solely focused on NFT-collateralized loans. With all our energy and knowledge in this field, we provide our users with unparalleled and expert solutions. </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5 uk-margin-large-top@m">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">02.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                        Fast and User-Friendly
                                          
                                        </h3>
                                        <p className="uk-text-muted">  Our platform is designed to be lightweight, fast, and compatible with every device. We aim to meet our users' needs in the simplest and most effective way possible. </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">03.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                        Secure and Transparent
                                        </h3>
                                        <p className="uk-text-muted">  We protect our users' data and transactions with robust security protocols and ensure transaction transparency through the blockchain. </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5 uk-margin-large-top@m">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">04.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                        Easy Integration
                                        </h3>
                                        <p className="uk-text-muted">  We can integrate with every NFT marketplace and DApp, also providing APIs and SDKs that offer easy integration opportunities for developers. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChoseUs;