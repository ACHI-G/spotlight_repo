import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import '../style.css';

import IntersectionObserverComponent from '../components/IntersectionObserverComponent.jsx';

import Image_B2_Hero from '/images/B2/B2_Hero.webp';

import Image_B2_Madness from '/images/B2/B2_Madness.webp';
import Image_B2_Map_01 from '/images/B2/B2_Map_01.webp';
import Image_B2_Map_02 from '/images/B2/B2_Map_02.webp';

import Image_B2_Bama from '/images/B2/B2_Bama.webp';
import Image_B2_Final from '/images/B2/B2_Final.webp';

export default function Project_B2(props) {
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
                    <div className="fixed inset-0 overflow-auto mx-auto">
                        <div className="flex items-center justify-center 2xl:mr-10 overscroll-none px-2 py-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full w-11/12 max-w-xl overflow-hidden shadow-xl rounded-2xl transition-all">
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
                                            className="rounded-t-lg object-cover md:w-screen  md:max-h-[16rem]"
                                            src={Image_B2_Hero}
                                            alt="hyundai galloper with offroad camper trailer in tajikistan"
                                        />
                                    </div>
                                    <main>
                                        {/* Text area */}
                                        <article className="prose">
                                            <div className="text-justify">
                                                {/* Project Intro */}
                                                <div className="text-left mb-2 max-w-md">
                                                    {/* Title */}
                                                    <div
                                                        id="title"
                                                        className="hiddenAnimation py-8 sm:py-16">
                                                        <p className="sm:text-[40px] px-[20px] sm:pl-[60px] sm:leading-[48px] max-w-xs md:max-w-[22rem]">
                                                            <span id="content1">
                                                                THE FUTURE BELONGS TO THE MAD
                                                            </span>
                                                        </p>
                                                    </div>
                                                    {/* Intro Text */}
                                                    <div
                                                        id="laufText"
                                                        className="hiddenAnimation text-justify py-[24px] sm:py-[60px] max-w-xs">
                                                        <div className="sm:text-[18px] px-[20px] sm:pl-[60px] sm:pr-[.5rem] space-y-2 md:space-y-4">
                                                            <div> {' '}
                                                                {t('b2.intro1')}
                                                                {/* ANGEKNÜPFT WO DIE DAKAR AUF&shy;HÖRTE: */}
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                {t('b2.intro2')}
                                                                {/* Die einst legendäre Dakar Rally hat in Afrika einen
                                                                    geistigen Erben hinter&shy;lassen. Die
                                                                    Budapest-Bamako hält die Flamme der
                                                                    Trans-Sahara-Fahr&shy;abenteuer am Le&shy;ben. Der
                                                                    Start ist nicht Paris, das Ziel ist nicht Dakar, die
                                                                    Kosten sind nicht die&shy;selben, aber das Erlebnis
                                                                    und der Aben&shy;teu&shy;er&shy;geist haben sich
                                                                    nicht verändert. */}
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                {t('b2.intro3')}
                                                                {/* Die Budapest-Bamako ist ein Abenteuer- und
                                                                    Na&shy;vi&shy;ga&shy;ti&shy;ons&shy;ren&shy;nen mit
                                                                    minimaler Un&shy;ter&shy;stüt&shy;zung von Europa
                                                                    nach Afrika. */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Image 1-4*/}
                                                <div className="p-[16px] sm:p-[56px]">
                                                    <div className="hiddenAnimationAlt flex flex-wrap grid-cols-1 md:grid-cols-2 grid gap-1">
                                                        <div className="ml-6 w-full md:basis-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_B2_Map_01}
                                                                alt="daily stages budapest-bamako rally"></img>
                                                        </div>

                                                        <div className="hiddenAnimationAlt mb-4 px-[4px] w-full md:row-span-2 md:basis-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_B2_Map_02}
                                                                alt="map: Rand Mcnally & Co. Map of Africa (1894), elevation data: GMTED2010"></img>
                                                        </div>
                                                        <div className="hiddenAnimation mb-4 px-[4px] md:pr-4 w-full md:basis-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_B2_Madness}
                                                                alt="certified jeep workshop in koundara guinea"></img>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Final Image 4-5 Final Text 1-2*/}
                                                <header className=" px-[16px] py-4 sm:p-[56px] h-fill w-fill mb-20">
                                                    <div className="grid-cols-1 md:grid-cols-2 grid gap-4">
                                                        <div className="w-full md:basis-1/2">
                                                            <div id="laufText">
                                                                <div className="itemDelay hiddenAnimation text-left sm:text-[18px] mt-5 hyphens-auto">
                                                                    <div>
                                                                        {t('b2.text1')}
                                                                        {/* Von Hydrolock spricht man, wenn ein Motor
                                                                            aufgrund des Eindringens
                                                                            be&shy;trächt&shy;licher
                                                                            Was&shy;ser&shy;men&shy;gen in die Zylinder
                                                                            entweder festsitzt oder einen totalen
                                                                            Ausfall erleidet. Der
                                                                            Ver&shy;bren&shy;nungs&shy;motor ist auf die
                                                                            Kom&shy;pres&shy;si&shy;on von Luft
                                                                            ausgelegt. Was&shy;ser hingegen lässt sich
                                                                            praktisch nicht komprimieren. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:basis-1/2">
                                                            <div id="laufText">
                                                                <div className="itemDelay hiddenAnimation text-left sm:text-[18px] md:mt-5">
                                                                    <div>
                                                                        {t('b2.text2')}
                                                                        {/* Naja... kurz bevor wir unseren Jeep in
                                                                            Guinea nahe der Senegalesischen Grenze
                                                                            zurücklassen mussten, machte ich, als
                                                                            kleines Andenken, einen 3D Scan. Aus der
                                                                            Wei&shy;ter&shy;ver&shy;ar&shy;bei&shy;tung
                                                                            des Scans entstand das Titelbild meines
                                                                            Fotobuchs. Eine per&shy;sön&shy;liche
                                                                            Zusammenfassung sowohl der Reise, aber auch
                                                                            dessen, was mir super viel Spass macht:
                                                                            Geschichten zu erzählen und sie hier und da
                                                                            etwas auszuschmücken. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="itemDelay hiddenAnimationAlt mx-auto md:-ml-10">
                                                        <img
                                                            className="h-auto w-full my-0 -mb-20"
                                                            src={Image_B2_Bama}
                                                            alt="3d scan of our jeep grand cherokee wj 4.7 v8 plus magnum opus extensions"></img>
                                                    </div>
                                                </header>
                                                {/* Finals 1*/}
                                                <header className="relative">
                                                    <div className="w-fill mt-28 md:mt-40">
                                                        <img
                                                            className="-my-1 h-auto w-full"
                                                            src={Image_B2_Final}
                                                            alt="peugeot 505 familiale in guinea"></img>
                                                    </div>
                                                    <div>
                                                        <div
                                                            id="laufTextFinal"
                                                            className=" text-left absolute top-0 right-0 sm:p-[60px]">
                                                            {' '}
                                                            {/* hiddenAnimation */}
                                                            <div className="lg:text-[18px] md:space-y-1  md:max-w-[14rem] p-1 bg-black bg-opacity-50">
                                                                <div className="text-white font-bold">
                                                                    THE FUTURE BELONGS TO THE MAD:
                                                                </div>
                                                                <div className="text-white">
                                                                    {t('b2.textFinal')}
                                                                    {/* In drei Wochen von Zürich nach Freetown. Nach
                                                                        dem Abtauchen des Jeeps weiter im Peugeot 505
                                                                        Familiale (Baujahr 1982 bis 1994) */}
                                                                </div>
                                                            </div>
                                                        </div>
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
