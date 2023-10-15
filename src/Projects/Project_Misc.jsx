import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import '../style.css';

import IntersectionObserverComponent from '../components/IntersectionObserverComponent.jsx';

import Image_Misc_Hero_00 from '/images/Misc/Misc_Hero.webp';

import Image_Misc_Flower_01 from '/images/Misc/Misc_Flower_01.webp';
import Image_Misc_Flower_02 from '/images/Misc/Misc_Flower_02.webp';

import Image_Misc_Mandelbulb from '/images/Misc/Misc_Mandelbulb.webp';
import Image_Misc_Furshark from '/images/Misc/Misc_Furshark.webp';
import Image_Misc_Fte_01 from '/images/Misc/Misc_Fte_01.webp';
import Image_Misc_Fte_02 from '/images/Misc/Misc_Fte_02.webp';

import Image_Misc_Davos_01 from '/images/Misc/Misc_Davos_01.webp';
import Image_Misc_Workflow_02 from '/images/Misc/Misc_Workflow_02.webp';
import Gif_Misc_Davos_avif from '../images/Misc/Misc_Davos_02.1.avif';
import Gif_Misc_Davos_webp from '../images/Misc/Misc_Davos_02.1.webp';

export default function Project_Misc(props) {
    const { t } = useTranslation();

    function closeModal() {
        props.setIsOpen(false);
    }
    function openModal() {
        props.setIsOpen(true);
    }

    return (
        <>
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
                                            className="object-cover md:w-screen  md:max-h-[16rem]"
                                            src={Image_Misc_Hero_00}
                                            alt=""
                                        />
                                    </div>
                                    <main className="overflow-hidden">
                                        {/* Text area */}
                                        <article className="prose">
                                            <div className="text-justify">
                                                {/* Project Intro*/}
                                                <div className="text-left mb-2 max-w-md">
                                                    {/* Title */}
                                                    <div id="title" className="py-8 sm:py-16">
                                                        <div className="sm:text-[40px] px-[20px] sm:pl-[60px] sm:leading-[48px] max-w-xs md:max-w-sm">
                                                            <div className="from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                                                                <div id="content1">
                                                                    MISCELLANEOUS:
                                                                </div>
                                                                <div
                                                                    id="content2"
                                                                    className="font-medium">
                                                                    VERSCHIEDENES
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Intro Text */}
                                                    <div
                                                        id="laufText"
                                                        className="hiddenAnimation text-justify py-[24px] sm:py-[60px] max-w-xs">
                                                        <div className="text-blackish sm:text-[18px] px-[20px] sm:pl-[60px] sm:pr-[.5rem] space-y-2 md:space-y-4">
                                                            <span>
                                                                {' '}
                                                                Whatever you do, homie, give your
                                                                heart to it. And stay strong.{' '}
                                                                <span className="text-[8px]">
                                                                    Colossians 3:23.
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Pokal*/}
                                                <header className="px-[16px] mt-10 py-4 sm:p-[56px] h-fill w-fill  mb-20">
                                                    <div className="grid-cols-1 md:grid-cols-3 md:grid-rows-8 grid gap-4">
                                                        <div className="hiddenAnimationAlt md:order-2 md:col-span-2 w-full max-w-[18rem]">
                                                            <div id="laufText">
                                                                <div className="text-left sm:text-[18px] hyphens-auto">
                                                                    <div>
                                                                        <span>
                                                                            {t('misc.text1')}
                                                                            {/* #NICHTOHNEMEINEMÄDELS: Visualisierungen
                                                                                für Wett&shy;bewerb des DFB für den
                                                                                Pokal der 2. Frauen&shy;bundesliga.
                                                                                2022. */}
                                                                        </span>{' '}
                                                                        {t('misc.text3')}
                                                                        {/* Zusam&shy;men&shy;arbeit mit David Hug */}{' '}
                                                                        <a
                                                                            className="hover:underline"
                                                                            href="https://www.davidhug.ch/"
                                                                            target="_blank">
                                                                            David Hug
                                                                        </a>{' '}
                                                                        &{' '}
                                                                        <a
                                                                            className="hover:underline"
                                                                            href="https://www.hugdorfmueller.com/"
                                                                            target="_blank">
                                                                            HUG&DORFMÜLLER
                                                                        </a>
                                                                        . (Blender, Illu, PSD)
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimation row-span-2 w-full md:-mt-10">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Misc_Flower_02}
                                                                alt="trophy process"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt md:order-3 md:row-span-2 md:col-span-2 w-full md:-mb-20">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Misc_Flower_01}
                                                                alt="trophy rendering"></img>
                                                        </div>
                                                    </div>
                                                </header>
                                                {/* Selbststudium*/}
                                                <header className="px-[16px] mt-10 py-4 sm:p-[56px] h-fill w-fill mb-20">
                                                    <div className="grid-cols-1 grid-rows-1 md:grid-cols-8 md:grid-rows-8 grid gap-2">
                                                        <div className="hiddenAnimation md:col-start-4  md:row-start-3 md:col-span-3 w-full max-w-[18rem]">
                                                            <div id="laufText">
                                                                <div className="text-left sm:text-[18px] md:mt-6">
                                                                    <div>
                                                                        <span>
                                                                            {t('misc.text2')}
                                                                            {/* Selbststudium: Versuche, Tutorials und
                                                                                Auf&shy;träge. 2022/23. */}
                                                                        </span>{' '}
                                                                        (Blender, Photoshop)
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt md:col-span-4 md:row-span-4 md:col-start-1 md:row-start-1 w-full md:-mt-16">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Misc_Mandelbulb}
                                                                alt="rendering mandelbulb"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-1 w-full">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Misc_Furshark}
                                                                alt="rendering fur node shark"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt md:col-span-2 md:row-span-2 md:col-start-7 md:row-start-1 w-full md:-mt-10">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Misc_Fte_01}
                                                                alt="rendering album cover"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt md:col-span-2 md:row-span-2 md:col-start-7 md:row-start-3 w-full md:-mt-10 mb-4">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Misc_Fte_02}
                                                                alt="rendering single cover"></img>
                                                        </div>
                                                    </div>
                                                </header>

                                                {/* Davos*/}
                                                <header className="px-[16px] mt-10 py-4 sm:p-[56px] h-fill w-fill md:mb-10">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 grid gap-4">
                                                        <div className="hiddenAnimationAlt md:order-3 w-full md:max-w-[15rem] md:mt-12">
                                                            <article id="laufText">
                                                                <div className="text-left sm:text-[18px]">
                                                                    <div>
                                                                        <span>
                                                                            Spengler Cup Davos:
                                                                            Animation
                                                                            Event-Sponsoring.
                                                                            2021/22.{' '}
                                                                        </span>
                                                                        {t('misc.text3')}
                                                                        {/* Zusam&shy;men&shy;arbeit mit David Hug */}{' '}
                                                                        <a
                                                                            className="hover:underline"
                                                                            href="https://www.davidhug.ch/"
                                                                            target="_blank">
                                                                            David Hug
                                                                        </a>{' '}
                                                                        &{' '}
                                                                        <a
                                                                            className="hover:underline"
                                                                            href="https://www.hugdorfmueller.com/"
                                                                            target="_blank">
                                                                            HUG&DORFMÜLLER
                                                                        </a>
                                                                        . (Blender, After Effects)
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt md:col-span-2 w-full md:-mt-12">
                                                            <img
                                                                className="my-0 rounded-lg h-auto w-full"
                                                                src={Image_Misc_Davos_01}
                                                                alt="spengler cup davos billboard"></img>
                                                        </div>

                                                        <div className="itemDelay hiddenAnimationAlt md:col-span-2 w-full">
                                                            <img
                                                                className="my-0 rounded-lg h-auto w-full"
                                                                src={Image_Misc_Workflow_02}
                                                                alt="blender workflow"></img>
                                                        </div>
                                                        <div className="hiddenAnimation md:col-span-1 md:-mb-12 md:mt-12 md:drop-shadow-lg">
                                                            <picture>
                                                                <source
                                                                    type="image/avif"
                                                                    srcSet={Gif_Misc_Davos_avif}
                                                                />
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet={Gif_Misc_Davos_webp}
                                                                />
                                                                <img
                                                                    className="flex justify-center h-auto w-full my-0 rounded-lg"
                                                                    src={Gif_Misc_Davos_avif}
                                                                    alt="snowy davos still"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </header>

                                                <div className="pt-10 flex items-center justify-center">
                                                    <button
                                                        type="button"
                                                        className="bg-transparent hover:bg-opacity-40 hover:bg-gray-300 w-8 h-8 rounded-full px-1 fixed bottom-1 md:bottom-4"
                                                        onClick={closeModal}>
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    </main>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
