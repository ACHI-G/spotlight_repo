import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import '../style.css';

import IntersectionObserverComponent from '../components/IntersectionObserverComponent.jsx';

import Image_Floppy_Hero from '/images/Floppy/Floppy_Hero.jpg';
import Image_SDA from '/images/Floppy/SDA.webp';

import Image_Floppy_Research_01 from '/images/Floppy/Floppy_Research_01.webp';
import Image_Floppy_Research_02 from '/images/Floppy/Floppy_Research_02.webp';
import Image_Floppy_Research_03 from '/images/Floppy/Floppy_Research_03.webp';
import Image_Floppy_Research_04 from '/images/Floppy/Floppy_Research_04.webp';

import Image_Floppy_Story_01 from '/images/Floppy/Floppy_Story_01.webp';
import Image_Floppy_Story_02 from '/images/Floppy/Floppy_Story_02.webp';
import Image_Floppy_Story_03 from '/images/Floppy/Floppy_Story_03.webp';

import Image_Floppy_Final_00_1 from '/images/Floppy/Floppy_Final_00.1.webp';
import Image_Floppy_Final_00_2 from '/images/Floppy/Floppy_Final_00.2.webp';
import Image_Floppy_Final_00_3 from '/images/Floppy/Floppy_Final_00.3.webp';
import Image_Floppy_Final_00_4 from '/images/Floppy/Floppy_Final_00.4.webp';
import Image_Floppy_Final_00_5 from '/images/Floppy/Floppy_Final_00.5.webp';
import Image_Floppy_Final_00_6 from '/images/Floppy/Floppy_Final_00.6.webp';
import Image_Floppy_Final_00_7 from '/images/Floppy/Floppy_Final_00.7.webp';

import Image_Floppy_Final_01 from '/images/Floppy/Floppy_Final_01.jpg';

export default function Project_Floppy(props) {
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
                                            src={Image_Floppy_Hero}
                                            alt="floppy hero image"
                                        />
                                    </div>
                                    <main>
                                        {/* Text area */}
                                        <article className="prose">
                                            <div className="text-justify">
                                                {/* Project Intro*/}
                                                <div className="text-left mb-2 max-w-md">
                                                    {/* Title */}
                                                    <div id="title" className="py-8 sm:py-16">
                                                        <p className="sm:text-[40px] px-[20px] sm:pl-[60px] sm:leading-[48px] max-w-xs md:max-w-sm">
                                                            <span id="content1">REDEWENDUNG:</span>
                                                            <span
                                                                id="content2"
                                                                className="font-medium">
                                                                {t('floppy.intro1')}
                                                                {/* VIRTUELLE REALITÄT UND
                                                                    ANGST&shy;BE&shy;WÄL&shy;TI&shy;GUNG */}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    {/* Intro Text */}
                                                    <div
                                                        id="laufText"
                                                        className="text-justify py-[24px] sm:py-[60px] max-w-xs">
                                                        <div className="sm:text-[18px] px-[20px] sm:pl-[60px] sm:pr-[.5rem] space-y-2 md:space-y-4">
                                                            <div className="hiddenAnimation">
                                                                {' '}
                                                                {t('floppy.intro2')}
                                                                {/* Zusammenarbeit mit Marc Gämperle */}
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <span className="hiddenAnimation">
                                                                    {t('floppy.intro3')}
                                                                    {/* Eine Vision, wie virtuelle Realität
                                                                        Men&shy;schen im Leben unterstützen kann. */}
                                                                </span>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div className="hiddenAnimation">
                                                                    {t('floppy.intro4')}
                                                                    {/* Ein Moment der Stille. Wie ein
                                                                        Don&shy;nergrollen baut sich der Applaus langsam
                                                                        auf. Alle stehen auf. Ein tosender
                                                                        Bei&shy;fallssturm entfesselt sich. */}
                                                                </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div className="hiddenAnimation">
                                                                    {t('floppy.intro5')}
                                                                    {/* Das alles trotz feuchter Hände, zittriger
                                                                        Glieder und erhöhtem Puls. Im Ram&shy;penlicht
                                                                        stehen und vor Leuten sprechen ist ein Talent,
                                                                        das nicht allen angeboren ist. Viel eher wird
                                                                        der öffentliche Auftritt von Nervosität, Stress
                                                                        und sogar Angst begleitet. Training schwächt sie
                                                                        jedoch ab und stärkt die Selbstsicherheit. */}
                                                                </div>
                                                                <div> {' '} <br />{' '} </div>
                                                                <div> {' '} <br />{' '}  </div>
                                                                <span className="hiddenAnimation">
                                                                    {t('floppy.intro6')}
                                                                    {/* Unser Konzept für eine VR-Anwendung lässt die
                                                                        Spielenden ihre eigene Prä&shy;sentation üben.
                                                                        Techniken und psy&shy;cho&shy;lo&shy;gisch
                                                                        wirkungsvolle Tipps unterstützen sie dabei.
                                                                        Verpackt in eine aufregende
                                                                        Ge&shy;schich&shy;te, wird das Üben zum
                                                                        Erlebnis. */}
                                                                </span>
                                                            </div>
                                                            <div className="hiddenAnimationAlt p-[16px] sm:p-[56px]">
                                                                <div>
                                                                    <img
                                                                        className="mx-auto rounded-full block h-auto w-full max-w-[8rem]"
                                                                        src={Image_SDA}
                                                                        alt="ba award nominee 2021"></img>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Image 1-4*/}
                                                <main className="p-[16px] sm:p-[56px]">
                                                    <div className="flex flex-wrap grid-cols-1 md:grid-cols-2 grid gap-1">
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:basis-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Research_01}
                                                                alt="research scenario"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:basis-1/2 md:order-2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Research_02}
                                                                alt="research eyes and emotions"></img>
                                                        </div>

                                                        <div className="itemDelay hiddenAnimationAlt mb-4 px-[4px] w-full md:basis-1/2  ">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Research_03}
                                                                alt="research faces"></img>
                                                        </div>
                                                        <div className="hiddenAnimationAlt mb-4 px-[4px] w-full md:basis-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Research_04}
                                                                alt="research core concept"></img>
                                                        </div>
                                                    </div>
                                                </main>
                                                {/* Image 5-7*/}
                                                <main className="p-[16px] sm:p-[56px]">
                                                    <div className="md:grid grid-cols-4 grid-flow-col gap-4">
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 w-full md:row-span-2 col-span-2 md:mt-10">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Story_01}
                                                                alt="story concept"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 md:mb-0 w-full md:col-span-2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Story_02}
                                                                alt="story timeline 1"></img>
                                                        </div>

                                                        <div className="itemDelay hiddenAnimationAlt mb-4 w-full md:col-span-2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Story_03}
                                                                alt="story timeline 2"></img>
                                                        </div>
                                                    </div>
                                                </main>

                                                {/* Text 2 und 3*/}
                                                <main>
                                                    <div className="flex flex-wrap">
                                                        <div className="hiddenAnimation mb-4 md:mb-10 w-full  md:w-1/2">
                                                            <div
                                                                id="laufText"
                                                                className="text-left hyphens-auto py-[24px]">
                                                                <div className="sm:text-[18px] px-[20px] sm:px-[60px] md:pr-[14px] space-y-2 md:space-y-4">
                                                                    <div className="text-desert">
                                                                        {t('floppy.textTitle1')}
                                                                        {/* Recherche */}
                                                                    </div>
                                                                    <div>
                                                                        {t('floppy.text1')}
                                                                        {/* Zeitgleich zum Start der Theoriearbeit
                                                                            be&shy;gan&shy;nen wir mit der Konzeption
                                                                            des Projekts. */}
                                                                        <div> {' '} <br />{' '} </div>
                                                                        {t('floppy.text2')}
                                                                        {/* Wir definierten, basierend auf Interviews,
                                                                            Um&shy;fra&shy;gen und Recherchen, die
                                                                            Ziel&shy;gruppe auf 13 bis 25 Jahre alte
                                                                            Ju&shy;gend&shy;liche. Wir dachten uns
                                                                            Sze&shy;na&shy;ri&shy;en aus, analysierten
                                                                            Spielstile, Spiel&shy;mechaniken, Mimik,
                                                                            Gestik, Cha&shy;rak&shy;ter&shy;design und
                                                                            Emotionen. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimation mb-4 md:mb-0 w-full  md:w-1/2">
                                                            <div
                                                                id="laufText"
                                                                className="text-left py-[24px] px-[20px] sm:px-[60px] md:pl-[10px] md:pr-[3rem]">
                                                                <div className="sm:text-[18px] space-y-2 md:space-y-4">
                                                                    <div className="text-desert">
                                                                        {t('floppy.textTitle3')}
                                                                        {/* Geschichte und Spielaufbau */}
                                                                    </div>
                                                                    <div>
                                                                        {t('floppy.text3')}
                                                                        {/* Dann begannen wir eine Geschichte zu
                                                                            ent&shy;wickeln, in welche wir all unser
                                                                            gesammeltes Wissen rein&shy;packten.
                                                                            Gleichzeitig entwickelten wir den
                                                                            Haupt&shy;charakter und die Levels. Um das
                                                                            Konzept schluss&shy;endlich erklären zu
                                                                            können, fertigten wir
                                                                            Con&shy;cept-Art-Bilder, Ani&shy;mationen,
                                                                            Renderings und ein Video an. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </main>

                                                {/* Final Image 1-3*/}
                                                <header className="px-[16px] py-4 sm:p-[56px] h-fill w-fill mb-8">
                                                    <div className="md:grid grid-cols-4 grid-flow-col gap-2">
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 w-full md:row-span-2 col-span-2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Final_00_1}
                                                                alt="conceptart underground"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt mb-4 md:mb-0 w-full md:col-span-2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Final_00_2}
                                                                alt="conceptart control room"></img>
                                                        </div>

                                                        <div className="itemDelay hiddenAnimationAlt mb-4 w-full md:col-span-2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Final_00_3}
                                                                alt="conceptart final act"></img>
                                                        </div>
                                                    </div>
                                                </header>
                                                {/* Final Image 4-5 Final Text 1-2*/}
                                                <header className="px-[16px] py-4 sm:p-[56px] h-fill w-fill mb-8">
                                                    <div className="grid-cols-1 md:grid-cols-2 grid gap-4">
                                                        <div className="itemDelay hiddenAnimationAlt w-full md:basis-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Final_00_4}
                                                                alt="blender scene control room"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimationAlt w-full md:basis-1/2">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Final_00_5}
                                                                alt="blender scene presentation room"></img>
                                                        </div>

                                                        <div className="w-full md:basis-1/2 max-w-[14rem]">
                                                            <div id="laufText">
                                                                <div className="itemDelay hiddenAnimation text-left sm:text-[18px] hyphens-auto">
                                                                    <div className="text-desert font-bold">
                                                                        Story
                                                                    </div>
                                                                    <div> {' '} <br />{' '} </div>
                                                                    <div>
                                                                        {t('floppy.text4')}
                                                                        {/* Die Geschichte soll die Spielenden in eine
                                                                            andere Welt bringen. */}{' '}
                                                                        <span>
                                                                            {t('floppy.text5')}
                                                                            {/* Man soll abtauchen und die Realität
                                                                    vergessen. */}
                                                                        </span>
                                                                        <div> {' '} <br />{' '} </div>
                                                                        <div> {' '} <br />{' '} </div>
                                                                        {t('floppy.text6')}
                                                                        {/* Ausgemustert in der Unterwelt (oder
                                                                            Müllhalde) gilt es sich zurück zu kämpfen.
                                                                            Dazu müssen Levels und Übungen absolviert
                                                                            werden. Wurden alle Auf&shy;gaben
                                                                            gemeistert, eröffnet sich der Weg zurück in
                                                                            die Oberwelt. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:basis-1/2  max-w-[14rem]">
                                                            <div id="laufText">
                                                                <div className="itemDelay hiddenAnimation text-left sm:text-[18px]">
                                                                    <div className="text-desert font-bold">
                                                                        {t('floppy.textTitle7')}
                                                                        {/* Präsentation */}
                                                                    </div>
                                                                    <div>
                                                                        {' '}
                                                                        <br />{' '}
                                                                    </div>
                                                                    <div>
                                                                        {t('floppy.text7')}
                                                                        {/* Wichtig in der ganzen Geschichte bleibt die
                                                                            Prä&shy;sen&shy;ta&shy;tion. Der
                                                                            Präsentationsmodus ist jederzeit zugänglich. */}{' '}
                                                                        <span>
                                                                            {t('floppy.text8')}
                                                                            {/* Er ermöglicht es den Spielenden, eigene
                                                                                Prä&shy;sen&shy;ta&shy;tionen
                                                                                hoch&shy;zuladen und zu trai&shy;nieren. */}
                                                                        </span>{' '}
                                                                        {t('floppy.text9')}
                                                                        {/* Auch ist es möglich, mit und vor
                                                                            Freun&shy;den oder der Klasse zu
                                                                            prä&shy;sentieren. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>

                                                {/* Final Image 6-7 Final Text 3*/}
                                                <header className="p-[16px] pt-4 sm:p-[56px] h-fill w-fill mb-8">
                                                    <div className="flex flex-col md:grid grid-cols-2 grid-flow-col gap-4">
                                                        <div className="itemDelay hiddenAnimationAlt row-span-1">
                                                            <img
                                                                className="rounded-lg block h-auto w-full my-0"
                                                                src={Image_Floppy_Final_00_6}
                                                                alt="character progress"></img>
                                                        </div>
                                                        <div className="itemDelay hiddenAnimation md:row-start-2 w-full">
                                                            <div id="laufText">
                                                                <div className="text-left sm:text-[18px] hyphens-auto">
                                                                    <div className="text-desert font-bold">
                                                                        {t('floppy.titleFinals1')}
                                                                        {/* Entwicklung */}
                                                                    </div>
                                                                    <div> {' '} <br />{' '} </div>
                                                                    <div>
                                                                        {t('floppy.textFinals1')}
                                                                        {/* Das Meistern verschiedener Levels führt
                                                                            dazu, dass immer mehr Inhalte freigeschalten
                                                                            werden. So sollen die Spielenden animiert
                                                                            werden, sich in den ein&shy;zelnen
                                                                            Fä&shy;hig&shy;keiten zu ver&shy;bessern. */}
                                                                        <div> {' '} <br />{' '} </div>
                                                                        {t('floppy.textFinals2')}
                                                                        {/* Der Charakter verbessert sich dabei laufend,
                                                                            bis er wieder zu altem Glanz findet. Übung
                                                                            macht den Meister. */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="itemDelay hiddenAnimationAlt md:row-span-2">
                                                            <img
                                                                className="overflow-visible h-auto w-full my-0"
                                                                src={Image_Floppy_Final_00_7}
                                                                alt="character explosion rendering"></img>
                                                        </div>
                                                    </div>
                                                </header>
                                                {/* Finals 1*/}
                                                <header>
                                                    <div className="relative h-20 md:h-32 w-fill bg-[#151515] mr-0">
                                                        <div
                                                            id="laufTextFinal"
                                                            className="text-left absolute bottom-0 right-0 p-[16px] pt-4 sm:p-[56px]">
                                                            <div className="hiddenAnimation lg:text-[18px] md:space-y-1  md:max-w-[10rem]">
                                                                <div className="text-desert font-bold">
                                                                    REDEWENDUNG:
                                                                </div>
                                                                <div>
                                                                    {t('floppy.textFinals3')}
                                                                    {/* Eine Vision für eine VR-Anwendung, die Spielende
                                                                        ihre eigene Präsentation üben lässt. */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <img
                                                            className="-my-1 h-auto w-full"
                                                            src={Image_Floppy_Final_01}
                                                            alt="final hero rendering"></img>
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
