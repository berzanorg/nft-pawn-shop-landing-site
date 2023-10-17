import Link from "next/link";
import { useState, useEffect } from "react";
import Countdown from "./Countdown";




const HomeOneCollection = () => {
    
     


    return (
        <>
            <div id="uni_collection" className="uni-collection uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m swiper-parent">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;">
                        <div className="uk-panel">
                            <h2 className="uk-h3 uk-h1@m">Latest Pawned NFTs</h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-top uk-margin-xlarge-top@m">
                        <div className="uk-grid-xsmall uk-grid@m uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid" data-uk-grid="masonry: true;" data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(100);">
                            <div className="uk-padding-medium-top@m">
                                <div className="uni-artwork uk-card uk-card-xsmall uk-text-center uk-overflow-hidden uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                                        <div className="uk-panel uk-image-middle"><img src="images/artwork/06.jpg" alt="" className="uk-radius-small uk-radius-medium@m" loading="lazy" /> <Link href="#" className="uk-position-cover" aria-label="Metaverse"></Link></div>
                                    </div>

                                    <div className="uni-artwork-content uk-panel uk-margin-small-top uk-margin-2xsmall-bottom uk-flex-column uk-flex-middle">                                      
                                        <h2 className="uk-h6 uk-h5@m uk-margin-remove">
                                            <a className="uk-link-reset" href="#">#Metaverse</a>
                                        </h2>
                                        <span className="uk-text-meta uk-margin-xsmall-top uk-visible@m">Mad Lads</span>

                                        <Countdown initialTime={{days: 10, hours: 0, minutes: 0, seconds: 0}} />

                                        <div className="uni-btn uk-margin-medium-top uk-margin-top@m uk-flex-center" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;">
                                            <Link href="#view_in_opensea" className="uk-button uk-button-small uk-button-large@m uk-button-gradient">
                                                <span>Go To App</span>
                                                <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uni-artwork uk-card uk-card-xsmall uk-text-center uk-overflow-hidden uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                                        <div className="uk-panel uk-image-middle"><img src="images/artwork/07.jpg" alt="" className="uk-radius-small uk-radius-medium@m" loading="lazy" /> <Link href="#" className="uk-position-cover" aria-label="Polly Doll"></Link></div>
                                    </div>

                                    <div className="uni-artwork-content uk-panel uk-margin-small-top uk-margin-2xsmall-bottom uk-flex-column uk-flex-middle">
                                        <h2 className="uk-h6 uk-h5@m uk-margin-remove">
                                            <a className="uk-link-reset" href="#">#Polly Doll</a>
                                        </h2>
                                        <span className="uk-text-meta uk-margin-xsmall-top uk-visible@m">Okay Bears</span>

                                        <Countdown initialTime={{days: 8, hours: 12, minutes: 0, seconds: 0}} />

                                        <div className="uni-btn uk-margin-medium-top uk-margin-top@m uk-flex-center" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;">
                                            <Link href="#view_in_opensea" className="uk-button uk-button-small uk-button-large@m uk-button-gradient">
                                                <span>Go To App</span>
                                                <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-padding-medium-top@m">
                                <div className="uni-artwork uk-card uk-card-xsmall uk-text-center uk-overflow-hidden uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                                        <div className="uk-panel uk-image-middle"><img src="images/artwork/16.jpg" alt="" className="uk-radius-small uk-radius-medium@m" loading="lazy" /> <Link href="#" className="uk-position-cover" aria-label="Alec Art"></Link></div>
                                    </div>

                                    <div className="uni-artwork-content uk-panel uk-margin-small-top uk-margin-2xsmall-bottom uk-flex-column uk-flex-middle">
                                        <h2 className="uk-h6 uk-h5@m uk-margin-remove">
                                            <Link className="uk-link-reset" href="#">#Alec Art</Link>
                                        </h2>
                                        <span className="uk-text-meta uk-margin-xsmall-top uk-visible@m">Reavers</span>

                                        <Countdown initialTime={{days: 6, hours: 4, minutes: 30, seconds: 0}} />

                                        <div className="uni-btn uk-margin-medium-top uk-margin-top@m uk-flex-center" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;">
                                            <Link href="#view_in_opensea" className="uk-button uk-button-small uk-button-large@m uk-button-gradient">
                                                <span>Go To App</span>
                                                <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uni-artwork uk-card uk-card-xsmall uk-text-center uk-overflow-hidden uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                                        <div className="uk-panel uk-image-middle"><img src="images/artwork/11.jpg" alt="" className="uk-radius-small uk-radius-medium@m" loading="lazy" /> <Link href="#" className="uk-position-cover" aria-label="Toxic Poeth"></Link></div>
                                    </div>

                                    <div className="uni-artwork-content uk-panel uk-margin-small-top uk-margin-2xsmall-bottom uk-flex-column uk-flex-middle">
                                        <h2 className="uk-h6 uk-h5@m uk-margin-remove">
                                            <Link className="uk-link-reset" href="#">#Toxic Poeth</Link>
                                        </h2>

                                        <span className="uk-text-meta uk-margin-xsmall-top uk-visible@m">CETS</span>

                                        <Countdown initialTime={{days: 4, hours: 15, minutes: 20, seconds: 0}} />

                                        <div className="uni-btn uk-margin-medium-top uk-margin-top@m uk-flex-center" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;">
                                            <Link href="#view_in_opensea" className="uk-button uk-button-small uk-button-large@m uk-button-gradient">
                                                <span>Go To App</span>
                                                <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                                            </Link>
                                        </div>
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

export default HomeOneCollection;