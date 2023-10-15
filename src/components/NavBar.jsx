import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import DarkSide from './DarkSide.jsx';
import InfinityBirdSVG from '../images/ui/InfinityBird.svg';

export default function NavBar() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const lngs = {
        en: { nativeName: 'EN' },
        de: { nativeName: 'DE' }
    };

    return (
        <>
            <div>
                {/* Menu Button Main */}
                <div
                    className="MenuButton absolute flex  justify-center mb-[5%] ml-[5%] rotate-90"
                    style={{
                        bottom: 0,
                        left: '20px',
                        borderRadius: '50%',
                        zIndex: 1,
                        boxShadow: '1px 2px 10px 1px rgba( 0, 0, 0, 0.4 )'
                    }}
                    onClick={(e) => {
                        e.nativeEvent.stopImmediatePropagation();
                    }}>
                    
                    {/* Main hover button */}
                    <infinity-button
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={InfinityBirdSVG}
                            alt="Infinity Bird"
                            style={{ width: '52px', height: '52px' }}
                        />
                    </infinity-button>

                    {/* Main background element */}
                    <div
                        className="MenuBackgroundHidden MenuButton"
                        style={{
                            position: 'absolute',
                            zIndex: -2,
                            height: 250,
                            bottom: 50,
                            padding: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                            alignItems: 'center'
                        }}>

                        {/* BlurredBackground */}
                        <main
                            className="MenuBackgroundHidden"
                            style={{
                                position: 'absolute',
                                zIndex: -2,
                                overflow: 'hidden',
                                borderRadius: 8,
                                bottom: -24,
                                // backdropFilter: 'blur(8px)',
                                touchAction: 'none'
                            }}>

                            {/* GrabberButton (Pünktli obe) */}
                            <div
                                style={{
                                    rotate: '90deg',
                                    marginTop: '40%',
                                    alignItems: 'center',
                                    height: 17,
                                    borderRadius: 8,
                                    border: 'none'
                                }}>
                                {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                            />
                        </svg> */}
                            </div>
                            <div className="bg-[#a99e90] w-full h-4 -mt-7 shadow" />
                        </main>

                        {/* Menu Button Children (Contact, LanguageSelector & ModeSelector) */}
                        <div>
                            <div
                                className="group btnDelay animateMenuSubButton MenuSubButtonBackgroundHidden"
                                style={{ marginTop: 10, zIndex: -1 }}>

                                {/* Contact button */}
                                <contact-button
                                    onClick={() => {
                                        const emailAddress = 'achim.gafner@outlook.com'; // Replace with the desired email address
                                        const subject = 'Portfolio Inquiry';
                                        const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(
                                            subject
                                        )}`;

                                        window.location.href = mailtoURL;
                                    }}>
                                </contact-button>

                                {/* Contact-button click opens mail but on hover the address is also displayed as text */}
                                <span
                                    id="laufText"
                                    className="absolute text-center w-36 -rotate-90 top-10 -right-7 scale-0 transition-all  p-2 sm:text-[18px] text-white group-hover:scale-100">
                                    💌{' '}
                                    <a href="mailto:gafner.achim@gmail.com?subject=Portfolio%20Inquiry">
                                        gafner.achim@gmail.com
                                    </a>
                                </span>
                            </div>

                            {/* Join me on the DarkSide button */}
                            <div
                                className="btnDelay animateMenuSubButton MenuSubButtonBackgroundHidden"
                                style={{ marginTop: 8, zIndex: -1 }}>
                                <div>
                                    <DarkSide />
                                </div>
                            </div>

                            {/* Language selector*/}
                            <div
                                className="text-center btnDelay animateMenuSubButton MenuSubButtonBackgroundHidden"
                                style={{ zIndex: -1 }}>
                                <div className="-rotate-90">
                                    {Object.keys(lngs).map((lng) => (
                                        <div key={lng} style={{ lineHeight: '1.4' }}>
                                            <button
                                                className="text-[16px]"
                                                style={{
                                                    fontWeight:
                                                        i18n.resolvedLanguage === lng
                                                            ? 'bold'
                                                            : 'normal'
                                                }}
                                                type="submit"
                                                onClick={() => i18n.changeLanguage(lng)}>
                                                {lngs[lng].nativeName}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
