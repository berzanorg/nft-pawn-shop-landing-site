import Link from "next/link"

const MobileMenu = () => {
    return(
        <div id="uni_mobile_menu" className="uni-mobile-menu uk-offcanvas" data-uk-offcanvas="mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;">
        <div className="uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100">
            <div className="uni-mobile-menu-wrap uk-flex-column uk-flex-between" data-uk-height-viewport="offset-bottom: true;">
                <div className="uni-mobile-menu-content">
                    <header className="uk-card uk-card-2xsmall uk-flex-middle uk-flex-between">
                        <div className="uk-flex-1">
                            <button aria-label="Close Menu" className="uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle" type="button">
                                <i className="uk-icon uk-icon-small unicon-close"></i>
                            </button>
                        </div>
                        <div>
                            <h5 className="uk-h5 uk-text-uppercase uk-margin-remove">Navigation</h5>
                        </div>
                        <div className="uk-flex-1"></div>
                    </header>
                    <hr className="uk-margin-remove" />
                    <div className="uk-card uk-card-small">
                        <div className="uk-panel">
                            <ul className="uk-nav uk-nav-default">
                            <li><a href="#uni_about">About</a></li>
                                        <li><a href="#uni_roadmap">Roadmap</a></li>
                                        <li><a href="#uni_team">Team</a></li>
                                        <li><a href="#uni_collection">Collection</a></li>
                                    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default MobileMenu