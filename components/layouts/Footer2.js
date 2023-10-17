import Link from 'next/link';
import Copyright from '../Copyright';
import ThemeSwitcher from './ThemeSwitcher';

const Footer2 = ({footerSetting = {}}) => {

   return (
    <footer className="uni-footer uk-section uk-section-xlarge@m uk-panel">
    <div className="uk-position-cover uk-background-cover uk-visible@m" style={{backgroundImage:'url("images/footer-bg.png")'}} data-uk-img></div>
        <div className="uk-container">
            <div className="uk-panel">
                <div className="uk-grid uk-flex-center uk-text-center" data-uk-grid>
                    <div className="uk-width-large@m">
                        <div className="uk-panel uk-position-z-index">
                            <ul className="uk-subnav uk-subnav-small uk-flex-center uk-text-gray-70">
                                <li>
                                    <a href="#"><span className="uk-icon uk-icon-large@m unicon-logo-twitter"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="uk-icon uk-icon-large@m unicon-logo-discord"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="uk-icon uk-icon-large@m unicon-logo-instagram"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="uk-icon uk-icon-large@m unicon-logo-facebook"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="uk-icon uk-icon-large@m unicon-logo-youtube"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="uk-panel uk-text-small uk-margin-medium-top">
                    <div className="uk-grid uk-child-width-1-1@m uk-flex-center uk-text-center" data-uk-grid>
                        
                        <div>
                            <Copyright />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <ThemeSwitcher/>
</footer>

    );
};

export default Footer2;
