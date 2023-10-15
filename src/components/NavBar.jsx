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
                                    <a href="mailto:bruce.wayne@gmail.com?subject=Portfolio%20Inquiry">
                                        bruce.wayne@gmail.com
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
