import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import '../style.css';

import IntersectionObserverComponent from '../components/IntersectionObserverComponent.jsx';

import Image_Cosmo_Hero from '/images/TESTUDO/Cosmo_Hero.jpg';

import Image_Cosmo_Research_01 from '/images/TESTUDO/Cosmo_Research_01.webp';
import Image_Cosmo_Research_02 from '/images/TESTUDO/Cosmo_Research_02.webp';
import Image_Cosmo_Research_03 from '/images/TESTUDO/Cosmo_Research_03.webp';
import Image_Cosmo_Research_04 from '/images/TESTUDO/Cosmo_Research_04.webp';

import Image_Cosmo_Context_01 from '/images/TESTUDO/Cosmo_Context_01.webp';

import Image_Cosmo_Final_00_1 from '/images/TESTUDO/Cosmo_Final_00.1.webp';
import Image_Cosmo_Final_00_2 from '/images/TESTUDO/Cosmo_Final_00.2.webp';
import Image_Cosmo_Final_00_3 from '/images/TESTUDO/Cosmo_Final_00.3.webp';
import Image_Cosmo_Final_00_5 from '/images/TESTUDO/Cosmo_Final_00.5.webp';

import Image_Cosmo_Final_01 from '/images/TESTUDO/Cosmo_Final_01.webp';
import Image_Cosmo_Final_02 from '/images/TESTUDO/Cosmo_Final_02.webp';

export default function Project_Cosmo(props) {
    const { t } = useTranslation();

    function closeModal() {
        props.setIsOpen(false);
    }
    function openModal() {
        props.setIsOpen(true);
    }

    return (
        <>
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
                                            className="object-cover  md:w-screen  md:max-h-[16rem]"
                                            src={Image_Cosmo_Hero}
                                            alt="material closeup rendering"
                                        />
                                    </div>

                                    <main>
                                        {/* Text area */}
                                        <article className="prose">
                                            <div className="text-justify">
                                                {/* Project Intro*/}
                                                <div className="text-left mb-2 max-w-md">
                                                    {/* Title */}
                                                    <div
                                                        id="title"
                                                        className="hiddenAnimation py-8 sm:py-16">
                                                        <p className="sm:text-[40px] px-[20px] sm:pl-[60px] sm:leading-[48px] max-w-xs">
                                                            <span id="content1">TESTUDO:</span>
                                                            <span
                                                                id="content2"
                                                                className="font-medium ]">
                                                                {t('cosmo.intro1')}
                                                                {/* SCHNITTSCHUTZ FÜR DEN RETTUNGSHUND */}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    {/* Intro Text */}
                                                    <div
                                                        id="laufText"
                                                        className="text-justify py-[24px] sm:py-[60px] max-w-xs">
                                                        <div className="sm:text-[18px] px-[20px] sm:pl-[60px] sm:pr-[.5rem] space-y-2 md:space-y-4 hyphens-auto">
                                                            <div className="hiddenAnimation">
                                                                {' '}
                                                                {t('cosmo.intro2')}
                                                                {/* Zusammenarbeit mit Giorgio Biasco */}
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div className="hiddenAnimation">
                                                                    {t('cosmo.intro3')}
                                                                    {/* Das Thema des Hauptmoduls im 5. Semester hiess
                                                                        Pro&shy;tected. Gesucht wurden neuartige
                                                                        Schutz&shy;konzepte für Profis aus
                                                                        unter&shy;schiedlichen Berufen und
                                                                        Be&shy;rufs&shy;grup&shy;pen. */}
                                                                </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <span className="hiddenAnimation">
                                                                    {t('cosmo.intro4')}
                                                                    {/* Testudo ist ein modularer Schutzanzug mit
                                                                        Schnitt&shy; schutz und integrierten
                                                                        Leucht&shy;ele&shy;menten für den Rett&shy;
                                                                        ungs&shy;hund der Zu&shy;kunft. */}
                                                                </span>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div className="hiddenAnimation">
                                                                    {t('cosmo.intro5')}
                                                                    {/* Das modulare System besteht aus drei Teilen:
                                                                        Anzug, Halsband und Geschirr. Der Anzug besteht
                                                                        aus der UVEX Dyneema Textiltechnologie mit
                                                                        integrierten Re&shy;flek&shy;toren an den
                                                                        Gelenken und am Körper des Anzuges. Das Halsband
                                                                        besitzt LED-Leuchten an der Front, um dem Hund
                                                                        die Sicht in der Dunkelheit zu ermöglichen, aber
                                                                        auch aktive Leucht&shy;elemente, die im Textil
                                                                        eingenäht werden. Das Geschirr besitzt ebenfalls
                                                                        aktive Leucht&shy;elemente und Klett auf der
                                                                        Oberseite, um den Anzug mit verschiedenen
                                                                        anderen Schutz&shy;ele&shy;menten zu erweitern. */}
                                                                </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div className="hiddenAnimation">
                                                                    {t('cosmo.intro6')}
                                                                    {/* Bestellt wird der Anzug auf der Webseite. Durch
                                                                        die Masseingabe per klassischen Massband oder
                                                                        der Testudo-Scan-App kann ein
                                                                        mass&shy;ge&shy;schnei&shy;dertes Pro&shy;dukt
                                                                        her&shy;ge&shy;stellt werden. Ausserdem bietet
                                                                        die ScanApp nicht nur die Möglichkeit, den Hund
                                                                        zu ver&shy;messen, sondern auch das
                                                                        konfigurierte Produkt per Smartphone-Kamera
                                                                        virtuell anzuprobieren. */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Image 1-4*/}
                                                <main className="p-[16px] sm:p-[56px]">
                                                    <div className="flex flex-wrap">
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:w-1/2  ">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Cosmo_Research_01}
                                                                alt="research material"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:w-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Cosmo_Research_02}
                                                                alt="research usecase"></img>
                                                        </div>

                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:w-1/2  ">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Cosmo_Research_03}
                                                                alt="research design"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:w-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Cosmo_Research_04}
                                                                alt="quiros the rescue dog"></img>
                                                        </div>
                                                    </div>
                                                </main>
                                                {/* Text 1 und 2*/}
                                                <main>
                                                    <div className="flex flex-wrap">
                                                        <div className="mb-4 md:mb-0 w-full  md:w-1/2">
                                                            <div
                                                                id="laufText"
                                                                className="text-left hyphens-auto py-[24px]">
                                                                <div className="hiddenAnimation sm:text-[18px] px-[20px] sm:px-[60px] md:pr-[15px] space-y-2 md:space-y-4">
                                                                    <div className="text-desert">
                                                                        {t('cosmo.textTitle1')}
                                                                        {/* Ausgangslage */}
                                                                    </div>
                                                                    <div>
                                                                        {t('cosmo.text1')}
                                                                        {/* Der Profi, für den wir uns entschieden
                                                                            haben, war der Hund. Unsere Ideen haben wir
                                                                            mit Mit&shy;gliedern des
                                                                            Schwei&shy;zer&shy;ischen Verein für Such-
                                                                            und Ret&shy;tungs&shy;hun&shy;de (REDOG)
                                                                            besprochen. Da die Werkstätten der HGK
                                                                            geschlossen wurden, entschieden wir uns das
                                                                            Kon&shy;zept rein digital zu bearbeiten und
                                                                            be&shy;fas&shy;sten uns mit Marvelous
                                                                            Designer (Schnittmuster), Substance Painter
                                                                            (Material und Oberfläche) und Blender
                                                                            (modeling). */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-4 md:mb-0 w-full  md:w-1/2">
                                                            <div
                                                                id="laufText"
                                                                className="text-left py-[24px] px-[20px] sm:px-[60px] md:pl-[10px] md:pr-[3rem]">
                                                                <div className="hiddenAnimation sm:text-[18px] space-y-2 md:space-y-4">
                                                                    <div className="text-desert">
                                                                        {t('cosmo.textTitle2')}
                                                                        {/* Visualisierung */}
                                                                    </div>
                                                                    <div>
                                                                        {t('cosmo.text2')}
                                                                        {/* Hunde unterscheiden sich natürlich stark in
                                                                            Form und Grösse. Wir beschränkten uns für
                                                                            das Konzept, auf den belgischen
                                                                            Schäfer&shy;hund. */}
                                                                        <div> {' '} <br />{' '} </div>
                                                                        <span>
                                                                            {t('cosmo.text3')}
                                                                            {/* Das Model, dass uns unterstützte, war
                                                                                der Katastrophenhund «Quiros». */}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </main>
                                                {/* Context*/}
                                                <main className="p-[20px] sm:p-[60px]">
                                                    {/* Context Image */}
                                                    <div>
                                                        <img
                                                            className="hiddenAnimationAlt rounded-lg block my-0"
                                                            src={Image_Cosmo_Context_01}
                                                            alt="military search and rescue training facility in geneva"></img>
                                                    </div>

                                                    {/* Context Text */}
                                                    <div className="hiddenAnimation text-left mb-2 max-w-sm">
                                                        <div
                                                            id="laufText"
                                                            className="text-left py-[24px] sm:py-[60px] max-w-xs">
                                                            <div className="sm:text-[18px] md:pr-[20px] space-y-2 md:space-y-4">
                                                                <div className="text-desert">
                                                                    {t('cosmo.contextTitle')}
                                                                    {/* Kontext */}
                                                                </div>
                                                                <div className="italic">
                                                                    {t('cosmo.textContext1')}
                                                                    {/* Die Motorfahrer der Armee werden ca. in der 16
                                                                        Woche in neue Kompanien verteilt. Für mich hiess
                                                                        dies, zur Rettungs&shy;truppe nach Genf zu
                                                                        gehen. Unterstützt wurden diese von
                                                                        Rettungshunden und ihren Führerinnen und
                                                                        Führern. */}
                                                                    <div> {' '} <br />{' '} </div>
                                                                    {t('cosmo.textContext2')}
                                                                    {/* Die Rettungshunde der Armee können in der
                                                                        militärischen Katastrophenhilfe im In- wie auch
                                                                        im Ausland eingesetzt werden und sind innert
                                                                        Stunden (auch an Sonn- und Feier&shy;tagen)
                                                                        bereit, zusammen mit den Rettungsformationen
                                                                        eingesetzt zu werden. */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </main>

                                                {/* Finals 1*/}
                                                <header className="box h-fill w-fill mb-10">
                                                    {/* Finals Image 1-4*/}
                                                    <div className="p-2 pt-10 sm:p-6">
                                                        <div className="text-left flex flex-wrap">
                                                            <div className="mb-4 px-2 sm:w-1/2 md:w-1/4">
                                                                <img
                                                                    className="itemDelay hiddenAnimationAlt block rounded-md h-auto w-full my-0"
                                                                    src={Image_Cosmo_Final_00_1}
                                                                    alt="closeup cutproof"></img>
                                                                <div>
                                                                    <div id="laufText">
                                                                        <div className="pt-6 sm:text-[18px] hyphens-auto">
                                                                            <div className="text-desert font-bold">
                                                                                {t(
                                                                                    'cosmo.titleFinals1'
                                                                                )}
                                                                                {/* Schnittfest */}
                                                                            </div>
                                                                            <div> {' '} <br />{' '} </div>
                                                                            <div>
                                                                                {t(
                                                                                    'cosmo.textFinals1'
                                                                                )}
                                                                                {/* Der Ganz&shy;kör&shy;per&shy;anzug
                                                                                    ist aus einem schnitt&shy;festen
                                                                                    Smart&shy;textil mit
                                                                                    Dy&shy;nee&shy;ma Tech&shy;nologie
                                                                                    gefertigt und verhindert, dass der
                                                                                    Ret&shy;tungs&shy;hund ste&shy;cken
                                                                                    bleibt oder sich an scharfen Kanten
                                                                                    oder Glas&shy;splittern schneiden
                                                                                    kann. */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="itemDelay hiddenAnimationAlt mb-4 px-2 sm:w-1/2 md:w-1/4">
                                                                <img
                                                                    className="block rounded-md h-auto w-full my-0"
                                                                    src={Image_Cosmo_Final_00_2}
                                                                    alt="various designs"></img>
                                                                <div>
                                                                    <div id="laufText">
                                                                        <div className="pt-6 sm:text-[18px] hyphens-auto">
                                                                            <div className="text-desert font-bold">
                                                                                Design
                                                                            </div>
                                                                            <div> {' '} <br />{' '} </div>
                                                                            <div>
                                                                                {t(
                                                                                    'cosmo.textFinals2'
                                                                                )}
                                                                                {/* Die Schutz&shy;beklei&shy;dung kann
                                                                                    mit weiteren Pro&shy;dukten ergänzt
                                                                                    und mit ver&shy;schie&shy;denen
                                                                                    Mustern und Farben passend zum
                                                                                    Ein&shy;satz&shy;gebiet
                                                                                    kon&shy;figu&shy;riert werden. */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="itemDelay hiddenAnimationAlt mb-4 px-2 sm:w-1/2 md:w-1/4">
                                                                <img
                                                                    className="block rounded-md h-auto w-full my-0"
                                                                    src={Image_Cosmo_Final_00_3}
                                                                    alt="closeup modular set"></img>
                                                                <div>
                                                                    <div id="laufText">
                                                                        <div className="pt-6 sm:text-[18px] hyphens-auto">
                                                                            <div className="text-desert font-bold">
                                                                                Modular
                                                                            </div>
                                                                            <div> {' '} <br />{' '} </div>
                                                                            <div>
                                                                                {t(
                                                                                    'cosmo.textFinals3'
                                                                                )}
                                                                                {/* Das Set besteht aus einem
                                                                                    schnitt&shy;festen
                                                                                    Ganz&shy;kör&shy;per&shy;anzug,
                                                                                    einem Leucht&shy;hals&shy;band und
                                                                                    einem Geschirr. */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="itemDelay hiddenAnimationAlt mb-4 px-2  sm:w-1/2 md:w-1/4">
                                                                <img
                                                                    className="block rounded-md h-auto w-full my-0"
                                                                    src={Image_Cosmo_Final_00_5}
                                                                    alt="reflectors and light"></img>
                                                                <div>
                                                                    <div id="laufText">
                                                                        <div className="pt-6 sm:text-[18px] hyphens-auto">
                                                                            <div className="text-desert font-bold">
                                                                                {t(
                                                                                    'cosmo.titleFinals4'
                                                                                )}
                                                                                {/* Sicht & Sichtbarkeit */}
                                                                            </div>
                                                                            <div> {' '} <br />{' '} </div>
                                                                            <div>
                                                                                {t(
                                                                                    'cosmo.textFinals4'
                                                                                )}
                                                                                {/* Testudo bietet dem
                                                                                    Ret&shy;tungs&shy;hund durch seine
                                                                                    aktiven und passiven
                                                                                    Leucht&shy;ele&shy;mente an Anzug,
                                                                                    Geschirr und Hals&shy;band genug
                                                                                    Sicht&shy;bar&shy;keit bei einem
                                                                                    Ein&shy;satz in der Dun&shy;kelheit. */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>

                                                {/* Finals 2*/}
                                                <header className="relative flex flex-wrap box h-fill w-fill ">
                                                    <div className="container relative h-20 w-fill">
                                                        <div
                                                            id="laufTextFinal"
                                                            className="itemDelay hiddenAnimation text-left absolute top-0 right-0 p-[16px] pt-4 sm:p-[56px]">
                                                            <div className="lg:text-[18px] md:space-y-1  md:max-w-[10rem]">
                                                                <div className="text-desert font-bold">
                                                                    TESTUDO: panthera C500:
                                                                </div>
                                                                <div>
                                                                    {t('cosmo.textFinals5')}
                                                                    {/* Ein modularer Schutzanzug mit Schnittschutz und
                                                                        integrierten Leuchtelementen für den
                                                                        Rettungshund. */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="itemDelay hiddenAnimation overflow-visible md:w-1/3">
                                                        <img
                                                            className="md:scale-125 h-auto w-full md:ml-5 -mt-6 md:-mt-20 mb-0"
                                                            src={Image_Cosmo_Final_02}
                                                            alt="set pieces"></img>
                                                    </div>
                                                    <div className="itemDelay hiddenAnimationAlt px-[4px] md:w-2/3 object-right ">
                                                        <img
                                                            className="h-auto w-full m-0 "
                                                            src={Image_Cosmo_Final_01}
                                                            alt="rendering of doggo wearing the suit"></img>
                                                    </div>
                                                </header>
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
