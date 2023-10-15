import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import '../style.css';

import Image_About_Intro from '/images/About/AboutIntro.webp';
import Image_About_Boii from '/images/About/About_Boii.webp';

export default function Project_About(props) {
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
                        <div className="flex items-center justify-center 2xl:mr-10 container mx-auto overscroll-none px-2 py-4 2xl:py-24">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full w-11/12 max-w-xl overflow-hidden shadow-xl rounded-2xl transition-all">
                                    <button
                                        type="button"
                                        className="bg-transparent hover:bg-opacity-40 hover:bg-gray-300 w-8 h-8 rounded-full px-1 fixed  right-1 top-1 md:right-4 md:top-4 z-50"
                                        onClick={closeModal}>
                                        ✕
                                    </button>

                                    {/* Container */}
                                    <main className="px-[16px] sm:px-[56px] pt-4">
                                        <div className="flex flex-col lg:grid grid-cols-2 grid-flow-col gap-6 gap-x-2">
                                            {/* Image 1 */}
                                            <div className="md:row-span-1 pt-4 relative">
                                                <img
                                                    className="h-auto w-full"
                                                    src={Image_About_Intro}
                                                    alt=""></img>
                                            </div>

                                            {/* Text area */}
                                            <div className="md:row-start-2 w-full">
                                                <div id="laufText">
                                                    <div className="text-left sm:text-[18px] hyphens-auto lg:mb-10">
                                                        <section className=" font-bold">
                                                            Name
                                                        </section>
                                                        <div> {' '} <br />{' '} </div>
                                                        <div>
                                                            {t('about.intro1')}
                                                            <div> {' '} <br />{' '} </div>
                                                            <div> {' '} <br />{' '} </div>
                                                            {t('about.intro2')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Image 2 */}
                                            <div className="md:row-span-2 relative">
                                                <img
                                                    className="h-auto w-full pt-6 lg:absolute bottom-0 top-0 right-0"
                                                    src={Image_About_Boii}
                                                    alt="the protagonist"></img>
                                            </div>
                                        </div>
                                    </main>

                                    <div className="flex items-center justify-center">
                                        <button
                                            type="button"
                                            className="bg-transparent hover:bg-opacity-40 hover:bg-gray-300 w-8 h-8 rounded-full px-1 fixed bottom-1 md:bottom-4 md:hidden"
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
