import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import '../style.css';

import IntersectionObserverComponent from '../components/IntersectionObserverComponent.jsx';

import Image_AT420_Hero from '/images/AT-420/AT_Hero.webp';
import Image_AT_Research_01 from '/images/AT-420/AT_Research_01.webp';
import Image_AT_Research_02 from '/images/AT-420/AT_Research_02.webp';
import Image_AT_AT_Concept_review from '/images/AT-420/AT_Concept_review2.webp';
import Image_AT_Final_01 from '/images/AT-420/AT_Final_01.webp';
import Image_AT_Final_02 from '/images/AT-420/AT_Final_02.webp';
import Image_AT_Final_03 from '/images/AT-420/AT_Final_03.webp';
import Image_AT_Final_04 from '/images/AT-420/AT_Final_04.webp';
import Image_AT_Final_05 from '/images/AT-420/AT_Final_05.webp';
import Image_AT_Logo_Cincy from '/images/AT-420/AT_Logo_Cincy.png';
import Image_AT_Context from '/images/AT-420/AT_Context.webp';

export default function Project_AT(props) {
    const { t } = useTranslation();

    //let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        props.setIsOpen(false);
    }
    function openModal() {
        props.setIsOpen(true);
    }

    return (
        <>
        {/* old backup modal (daisyUI) */}
        {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
        </div> */}

            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    {/* BG Darkend */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    {/* Modal */}
                    <div className="fixed inset-0 overflow-auto">
                        <div className="flex items-center justify-center 2xl:mr-10 container mx-auto overscroll-none px-2 py-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full w-11/12 max-w-xl overflow-hidden shadow-xl rounded-2xl transition-all">
                                    {/* modal-box max-h-none h-[95%] w-11/12 max-w-xl p-0 overflow-auto overscroll-none bg-transparent"> */}
                                    <IntersectionObserverComponent />

                                    <button
                                        type="button"
                                        className="bg-transparent hover:bg-opacity-40 hover:bg-gray-300 w-8 h-8 rounded-full px-1 fixed  right-1 top-1 md:right-4 md:top-4 "
                                        onClick={closeModal}>
                                        ✕
                                    </button>

                                    {/* Hero Image */}
                                    <div>
                                        <img
                                            className="object-cover object-right-bottom md:h-[16rem] md:w-screen md:max-h-[16rem]"
                                            src={Image_AT420_Hero}
                                            alt="hyundai galloper with offroad camper trailer in tajikistan"
                                        />
                                    </div>
                                    <main>
                                        {/* Text area */}
                                        <article className="prose">
                                            <div className="text-justify">
                                                {/* Project Intro*/}
                                                <div className="text-left mb-2 max-w-sm">
                                                    {/* Title */}
                                                    <div id="title" className=" py-8 sm:py-16">
                                                        <p className="sm:text-[40px] px-[20px] sm:pl-[60px] sm:leading-[48px]">
                                                            <span id="content1">
                                                                AT-420 SPARROW:
                                                            </span>
                                                            <span
                                                                id="content2"
                                                                className="font-medium">
                                                                BEYOND THE GRID
                                                            </span>
                                                        </p>
                                                    </div>
                                                    {/* Intro Text */}
                                                    <div
                                                        id="laufText"
                                                        className="hiddenAnimation text-justify py-[24px] sm:py-[60px] max-w-xs">
                                                        <div className="sm:text-[18px] px-[20px] sm:pl-[60px] md:pr-[20px] space-y-2 md:space-y-4">
                                                            <div>
                                                                {t('at.intro1')}
                                                                {/* Das Hauptprojekt, das ich im
                                                                    Aus&shy;tausch&shy;se&shy;mes&shy;ter an der
                                                                    University of Cincinnati bearbeitete, hatte zum
                                                                    Ziel, basierend auf Trend&shy;for&shy;schung einen
                                                                    Opportunity Gap zu finden und ein Produkt dazu zu
                                                                    ent&shy;wi&shy;ck&shy;eln. */}
                                                            </div>
                                                            <div>
                                                                <span>
                                                                    {t('at.intro2')}
                                                                    {/* Der AT-420 Sparrow. Ein Offroad-Teardrop-Trailer
                                                                        für Connected Nomads am Ende der Welt. */}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Container Image 1*/}
                                                <div className="container p-[16px] sm:p-[56px]">
                                                    <div className="flex flex-wrap">
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:w-1/2  ">
                                                            <img
                                                                className="block rounded-lg h-auto w-full my-0"
                                                                src={Image_AT_Research_01}
                                                                alt="mountaineer on the mount damawand in iran"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:w-1/2">
                                                            <img
                                                                className="block rounded-lg h-auto w-full my-0"
                                                                src={Image_AT_Research_02}
                                                                alt="adventurers in the pamir mountains tajikistan"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Text 1*/}
                                                <div className="text-left mb-2 max-w-sm">
                                                    <div
                                                        id="laufText"
                                                        className="text-left py-[24px] sm:py-[60px] max-w-xs">
                                                        <div className="sm:text-[18px] px-[20px] sm:px-[60px] md:pr-[20px] space-y-2 md:space-y-4">
                                                            <div className="hiddenAnimation text-desert">
                                                                {t('at.textTitle1')}
                                                                {/* Recherche */}
                                                            </div>
                                                            <div className="hiddenAnimation hyphens-auto">
                                                                {t('at.text1')}
                                                                {/* Analyse von SET Factors (social trends, economic
                                                                    forces und technological advances), Produktgebiet,
                                                                    Konkurrenz, Markeneinflüsse, Produktanforderungen,
                                                                    Testpersonen und Zielgruppe. */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Image 2*/}
                                                <section className="hiddenAnimationAlt container p-[16px] sm:p-[56px]">
                                                    <div className="flex flex-wrap">
                                                        <div className="mb-4 px-[4px] w-full">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_AT_AT_Concept_review}
                                                                alt="concept review"></img>
                                                        </div>
                                                    </div>
                                                </section>
                                                {/* Text 2*/}
                                                <section className="container ">
                                                    <div className="flex flex-wrap">
                                                        <div className="itemDelay hiddenAnimation text-left mb-4 md:mb-0 w-full  md:w-1/2">
                                                            <div
                                                                id="laufText"
                                                                className="text-left py-[24px]">
                                                                <div className="sm:text-[18px] px-[20px] sm:px-[60px] md:pr-[20px] space-y-2 md:space-y-4">
                                                                    <div className="text-desert">
                                                                        {t('at.textTitle2')}
                                                                        {/* Konzeption & Überprüfung */}
                                                                    </div>
                                                                    <div>
                                                                        {t('at.text2')}
                                                                        {/* Im nächsten Schritt mussten 50 Konzepte zum
                                                                            gewählten Opportunity Gap entwickelt, drei
                                                                            davon ausgewählt, verfeinert und anhand von
                                                                            Interviews, auf ihre Tauglichkeit überprüft
                                                                            werden. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimation mb-4 md:mb-0 w-full  md:w-1/2">
                                                            <div
                                                                id="laufText"
                                                                className="text-left py-[24px]">
                                                                <div className="sm:text-[18px] px-[20px] sm:px-[60px] md:pl-[20px] space-y-2 md:space-y-4">
                                                                    <div className="text-desert">
                                                                        {t('at.textTitle3')}
                                                                        {/* Visualisierung */}
                                                                    </div>
                                                                    <div>
                                                                        {t('at.text3')}
                                                                        {/* Das CAD-Modell und die Finalen Renderings
                                                                            wurden im Autodesk Fusion erstellt. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                {/* Context*/}
                                                <section className="container p-[20px] sm:p-[60px]">
                                                    {/* Context Image */}
                                                    <div>
                                                        <img
                                                            className="hiddenAnimationAlt rounded-lg block my-0"
                                                            src={Image_AT_Context}
                                                            alt="pamir highway tajikisan"></img>
                                                    </div>
                                                    {/* Context Text */}
                                                    <div className="hiddenAnimation mb-2 max-w-sm">
                                                        <div
                                                            id="laufText"
                                                            className="text-left py-[24px] sm:py-[60px] max-w-xs">
                                                            <div className="sm:text-[18px] md:pr-[20px] space-y-2 md:space-y-4">
                                                                <div className="text-desert">
                                                                    {t('at.titleContext')}
                                                                    {/* Kontext */}
                                                                </div>
                                                                <div className="italic hyphens-auto">
                                                                    {t('at.textContext')}
                                                                    {/* 62 Tage, 20 Staaten, 22000 Kilometer, vier
                                                                        Jungs, ein Auto, ein Abenteuer. Die
                                                                        Seidenstrasse ist die älteste Handelsroute der
                                                                        Welt. Seit dem Altertum verbindet sie China,
                                                                        Zentralasien und Persien mit Europa. Innerhalb
                                                                        von zwei Monaten bereisten 2016 drei Freunde und
                                                                        ich historische Stätten und Länder entlang der
                                                                        Seidenstrasse. Von Istanbul über Teheran nach
                                                                        Almaty. Von Byzanz über Persien zu den Mongolen.
                                                                        Viele verschiedene Länder, Geschichten, Menschen
                                                                        und Kulturen. */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                {/* Finals*/}
                                                <section>
                                                    <header className="box h-fill w-fill">
                                                        {/* Finals Image 1-4*/}
                                                        <div className="container p-4">
                                                            <div className="flex flex-wrap">
                                                                <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-1/2 md:w-1/4  ">
                                                                    <img
                                                                        className="block h-auto w-full my-0"
                                                                        src={Image_AT_Final_03}
                                                                        alt="teardrop-trailer concept top view closed"></img>
                                                                </div>
                                                                <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-1/2 md:w-1/4">
                                                                    <img
                                                                        className="block h-auto w-full my-0"
                                                                        src={Image_AT_Final_04}
                                                                        alt="teardrop-trailer concept top view open"></img>
                                                                </div>
                                                                <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-1/2 md:w-1/4">
                                                                    <img
                                                                        className="block h-auto w-full my-0"
                                                                        src={Image_AT_Final_05}
                                                                        alt="teardrop-trailer concept side view with pop-up tent"></img>
                                                                </div>
                                                                <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-1/2 md:w-1/4">
                                                                    <img
                                                                        className="block   h-auto w-full my-0"
                                                                        src={Image_AT_Final_02}
                                                                        alt="teardrop-trailer concept with extended kitchen"></img>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Finals Image Text Image*/}
                                                        <div className="container">
                                                            <div className="flex basis-3 flex-wrap">
                                                                {/* Logo*/}
                                                                <div className="hiddenAnimation md:basis-3/12 order-last md:order-first">
                                                                    <img
                                                                        className="h-auto p-[3rem] sm:p-[5rem] md:p-0 md:pl-8"
                                                                        src={Image_AT_Logo_Cincy}
                                                                        alt="logo of the university of cincinnati"></img>
                                                                </div>
                                                                {/* Text*/}
                                                                <div className=" md:basis-4/12">
                                                                    <div className="hiddenAnimation p-[20px] md:-ml-[5.8rem] md:mt-10 lg:ml-0 lg:mt-0 sm:pt-0 sm:p-[60px]">
                                                                        <div
                                                                            id="laufTextFinal"
                                                                            className="text-left">
                                                                            <div className="sm:text-[18px] md:space-y-1 max-w-[9rem]">
                                                                                <div className="text-desert leading-4 font-bold">
                                                                                    {t(
                                                                                        'at.titleFinal'
                                                                                    )}
                                                                                    {/* AT-420 Sparrow */}
                                                                                </div>
                                                                                <span className="text-clip  leading-2  hiddenAnimation">
                                                                                    {t(
                                                                                        'at.textFinal'
                                                                                    )}
                                                                                    {/* Ein Offroad-Teardrop-Trailer für
                                                                                        Connected Nomads am Ende der
                                                                                        Welt */}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Final Image*/}
                                                                <div className="hiddenAnimation md:w-5/12">
                                                                    <img
                                                                        className="object-bottom pl-6 md:pl-0 py-0 m-0"
                                                                        src={Image_AT_Final_01}
                                                                        alt="teardrop-trailer concept front view"></img>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </header>
                                                </section>
                                            </div>
                                        </article>
                                    </main>

                                    <div className="flex items-center justify-center">
                                        <button
                                            type="button"
                                            className="bg-transparent hover:bg-opacity-40 hover:bg-gray-300 w-8 h-8 rounded-full px-1 fixed bottom-1 md:bottom-4"
                                            onClick={closeModal}>
                                            ✕
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
