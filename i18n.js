import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    de: {
        translation: {
            loadingScreen: {
                welcome: 'WILLKOMMEN'
            },

            about: {
                intro1: 'Ein praktischer, pragmatischer Kreativer mit einer Leidenschaft fürs Detail. Sei es in der physischen oder virtuellen Welt. Immer bestrebt, neue Herausforderungen anzunehmen und sich zu neuen Höchstleistungen anzutreiben. In der Freizeit beim Bouldern, Boxen, Motorradfahren oder im Atelier zu finden.',
                intro2: 'Industriedesign bedeutet Kreativität und Problemlösung. Es geht darum, sinnvolle, auf den Menschen bezogene Erlebnisse zu gestalten. Es geht um Verantwortung für die Zukunft. In sozialer, ethischer und ökologischer Hinsicht. Darum, uns zu berühren, uns zum Nachdenken anregen und zu ermutigen. Darüber, wie die Welt sein könnte.'
            },

            at: {
                intro1: 'Das Hauptprojekt, das ich im Austauschsemester an der University of Cincinnati bearbeitete, hatte zum Ziel, basierend auf Trendforschung einen Opportunity Gap zu finden und ein Produkt dazu zu entwickeln.',
                intro2: 'Der AT-420 Sparrow. Ein Offroad-Teardrop-Trailer für Connected Nomads am Ende der Welt.',
                textTitle1: 'Recherche',
                text1: 'Analyse von SET Factors (social trends, economic forces und technological advances), Produktgebiet, Konkurrenz, Markeneinflüsse, Produktanforderungen, Testpersonen und Zielgruppe.',
                textTitle2: 'Konzeption & Überprüfung',
                text2: 'Im nächsten Schritt mussten 50 Konzepte zum gewählten Opportunity Gap entwickelt, drei davon ausgewählt, verfeinert und anhand von Interviews, auf ihre Tauglichkeit überprüft werden.',
                textTitle3: 'Visualisierung',
                text3: 'Das CAD-Modell und die Finalen Renderings wurden im Autodesk Fusion erstellt.',
                titleContext: 'Kontext',
                textContext:'62 Tage, 20 Staaten, 22000 Kilometer, vier Jungs, ein Auto, ein Abenteuer. Die Seidenstrasse ist die älteste Handelsroute der Welt. Seit dem Altertum verbindet sie China, Zentralasien und Persien mit Europa. Innerhalb von zwei Monaten bereisten 2016 drei Freunde und ich historische Stätten und Länder entlang der Seidenstrasse. Von Istanbul über Teheran nach Almaty. Von Byzanz über Persien zu den Mongolen. Viele verschiedene Länder, Geschichten, Menschen und Kulturen.',
                titleFinal: 'AT-420 Sparrow',
                textFinal: 'Ein Offroad-Teardrop-Trailer für Connected Nomads am Ende der Welt'
            },

            b2: {
                intro1: 'ANGEKNÜPFT WO DIE DAKAR AUFHÖRTE:',
                intro2: 'Die einst legendäre Dakar Rally hat in Afrika einen geistigen Erben hinterlassen. Die Budapest-Bamako hält die Flamme der Trans-Sahara-Fahrabenteuer am Leben. Der Start ist nicht Paris, das Ziel ist nicht Dakar, die Kosten sind nicht dieselben, aber das Erlebnis und der Abenteuergeist haben sich nicht verändert.',
                intro3: 'Die Budapest-Bamako ist ein Abenteuer- und Navigationsrennen mit minimaler Unterstützung von Europa nach Afrika.',
                text1: 'Von Hydrolock spricht man, wenn ein Motor aufgrund des Eindringens beträchtlicher Wassermengen in die Zylinder entweder festsitzt oder einen totalen Ausfall erleidet. Der Verbrennungsmotor ist auf die Kompression von Luft ausgelegt. Wasser hingegen lässt sich praktisch nicht komprimieren.',
                text2: 'Naja... kurz bevor wir unseren Jeep in Guinea nahe der Senegalesischen Grenze zurücklassen mussten, machte ich, als kleines Andenken, einen 3D Scan. Aus der Weiterverarbeitung des Scans entstand das Titelbild meines Fotobuchs. Eine persönliche Zusammenfassung sowohl der Reise, aber auch dessen, was mir super viel Spass macht: Geschichten zu erzählen und sie hier und da etwas auszuschmücken.',
                textFinal:
                    'In drei Wochen von Zürich nach Freetown. Nach dem Abtauchen des Jeeps weiter im Peugeot 505 Familiale (Baujahr 1982 bis 1994)'
            },

            cosmo: {
                intro1: 'SCHNITTSCHUTZ FÜR DEN RETTUNGSHUND',
                intro2: 'Zusammenarbeit mit Giorgio Biasco',
                intro3: 'Das Thema des Hauptmoduls im 5. Semester hiess Protected. Gesucht wurden neuartige Schutzkonzepte für Profis aus unterschiedlichen Berufsgruppen.',
                intro4: 'Testudo ist ein modularer Schutzanzug mit Schnitt schutz und integrierten Leuchtelementen für den Rettungshund der Zukunft.',
                intro5: 'Das modulare System besteht aus drei Teilen: Anzug, Halsband und Geschirr. Der Anzug besteht aus der UVEX Dyneema Textiltechnologie mit integrierten Reflektoren an den Gelenken und am Körper des Anzuges. Das Halsband besitzt LED-Leuchten an der Front, um dem Hund die Sicht in der Dunkelheit zu ermöglichen, aber auch aktive Leuchtelemente, die im Textil eingenäht werden. Das Geschirr besitzt ebenfalls aktive Leuchtelemente und Klett auf der Oberseite, um den Anzug mit verschiedenen anderen Schutzelementen zu erweitern.',
                intro6: 'Bestellt wird der Anzug auf der Webseite. Durch die Masseingabe per klassischen Massband oder der Testudo-Scan-App kann ein massgeschneidertes Produkt hergestellt werden. Ausserdem bietet die ScanApp nicht nur die Möglichkeit, den Hund zu vermessen, sondern auch das konfigurierte Produkt per Smartphone-Kamera virtuell anzuprobieren.',

                textTitle1: 'Ausgangslage',
                text1: 'Der Profi, für den wir uns entschieden haben, war der Hund. Unsere Ideen haben wir mit Mitgliedern des Schweizerischen Verein für Such- und Rettungshunde (REDOG) besprochen. Da die Werkstätten der HGK geschlossen wurden, entschieden wir uns das Konzept rein digital zu bearbeiten und befassten uns mit Marvelous Designer (Schnittmuster), Substance Painter (Material und Oberfläche) und Blender (modeling).',
                textTitle2: 'Zielgruppe',
                text2: 'Hunde unterscheiden sich natürlich stark in Form und Grösse. Wir beschränkten uns für das Konzept, auf den belgischen Schäferhund.',
                text3: 'Das Model, dass uns unterstützte, war der Rettungshund «Quiros».',

                contextTitle: 'Kontext',
                textContext1:'Die Motorfahrer der Armee werden ca. in der 16 Woche in neue Kompanien verteilt. Für mich hiess dies, zur Rettungstruppe nach Genf zu gehen. Unterstützt wurden diese von Rettungshunden und ihren Führerinnen und Führern.',
                textContext2:'Die Rettungshunde der Armee können in der militärischen Katastrophenhilfe im In- wie auch im Ausland eingesetzt werden und sind innert Stunden (auch an Sonn- und Feiertagen) bereit, zusammen mit den Rettungsformationen eingesetzt zu werden.',

                titleFinals1: 'Schnittfest',
                textFinals1:'Der Ganzkörperanzug ist aus einem schnittfesten Smarttextil mit Dyneema Technologie gefertigt und verhindert, dass der Rettungshund stecken bleibt oder sich an scharfen Kanten oder Glassplittern schneiden kann.',
                textFinals2:'Die Schutzbekleidung kann mit weiteren Produkten ergänzt und mit verschiedenen Mustern und Farben passend zum Einsatzgebiet konfiguriert werden.',
                textFinals3:'Das Set besteht aus einem schnittfesten Ganzkörperanzug, einem Leuchthalsband und einem Geschirr.',
                titleFinals4: 'Sicht & Sichtbarkeit',
                textFinals4:'Testudo bietet dem Rettungshund durch seine aktiven und passiven Leuchtelemente an Anzug, Geschirr und Halsband genug Sichtbarkeit bei einem Einsatz in der Dunkelheit.',
                textFinals5:'Ein modularer Schutzanzug mit Schnittschutz und integrierten Leuchtelementen für den Rettungshund.'
            },

            floppy: {
                intro1: 'VIRTUELLE REALITÄT UND ANGSTBEWÄLTIGUNG',
                intro2: 'Zusammenarbeit mit Marc Gämperle',
                intro3: 'Eine Vision, wie virtuelle Realität Menschen im Leben unterstützen kann.',
                intro4: 'Ein Moment der Stille. Wie ein Donnergrollen baut sich der Applaus langsam auf. Alle stehen auf. Ein tosender Beifallssturm entfesselt sich.',
                intro5: 'Das alles trotz feuchter Hände, zittriger Glieder und erhöhtem Puls. Im Rampenlicht stehen und vor Leuten sprechen ist ein Talent, das nicht allen angeboren ist. Viel eher wird der öffentliche Auftritt von Nervosität, Stress und sogar Angst begleitet. Training schwächt sie jedoch ab und stärkt die Selbstsicherheit.',
                intro6: 'Unser Konzept für eine VR-Anwendung lässt die Spielenden ihre eigene Präsentation üben. Techniken und psychologisch wirkungsvolle Tipps unterstützen sie dabei. Verpackt in eine aufregende Geschichte, wird das Üben zum Erlebnis.',

                textTitle1: 'Recherche',
                text1: 'Zeitgleich zum Start der Theoriearbeit begannen wir mit der Konzeption des Projekts.',
                text2: 'Wir definierten, basierend auf Interviews, Umfragen und Recherchen, die Zielgruppe auf 13 bis 25 Jahre alte Jugendliche. Wir dachten uns Szenarien aus, analysierten Spielstile, Spielmechaniken, Mimik, Gestik, Charakterdesign und Emotionen.',
                textTitle3: 'Geschichte und Spielaufbau',
                text3: 'Dann begannen wir eine Geschichte zu entwickeln, in welche wir all unser gesammeltes Wissen reinpackten. Gleichzeitig entwickelten wir den Hauptcharakter und die Levels. Um das Konzept schlussendlich erklären zu können, fertigten wir Concept-Art-Bilder, Animationen, Renderings und ein Video an.',

                text4: 'Die Geschichte soll die Spielenden in eine andere Welt bringen.',
                text5: 'Man soll abtauchen und die Realität vergessen.',
                text6: 'Ausgemustert in der Unterwelt (oder Müllhalde) gilt es sich zurück zu kämpfen. Dazu müssen Levels und Übungen absolviert werden. Wurden alle Aufgaben gemeistert, eröffnet sich der Weg zurück in die Oberwelt.',
                textTitle7: 'Präsentation',
                text7: 'Wichtig in der ganzen Geschichte bleibt die Präsentation. Der Präsentationsmodus ist jederzeit zugänglich.',
                text8: 'Er ermöglicht es den Spielenden, eigene Präsentationen hochzuladen und zu trainieren.',
                text9: 'Auch ist es möglich, mit und vor Freunden oder der Klasse zu präsentieren.',

                titleFinals1: 'Entwicklung',
                textFinals1: 'Das Meistern verschiedener Levels führt dazu, dass immer mehr Inhalte freigeschalten werden. So sollen die Spielenden animiert werden, sich in den einzelnen Fähigkeiten zu verbessern.',
                textFinals2: 'Der Charakter verbessert sich dabei laufend, bis er wieder zu altem Glanz findet. Übung macht den Meister.',
                textFinals3: 'Eine Vision für eine VR-Anwendung, die Spielende ihre eigene Präsentation üben lässt.'
            },

            misc: {
                text1: '#NICHTOHNEMEINEMÄDELS: Visualisierungen für Wettbewerb des DFB für den Pokal der  2. Frauen-Bundesliga. 2022.',
                text2: 'Selbststudium: Versuche, Tutorials und Aufträge. 2022/23.',
                text3: 'Mit'
            }
        }
    },
    en: {
        translation: {
            loadingScreen: {
                welcome: 'WELCOME'
            },

            about: {
                intro1: 'A hands-on, pragmatic creative with a passion for details. Be it in the physical or virtual world. Always eager to take on new challenges and push himself to new heights. In his spare time found bouldering, boxing, motorcycling or in the studio.',
                intro2: "Industrial design is about creativity and problem solving. It's about designing meaningful experiences that relate to people. It's about responsibility for the future. Socially, ethically and environmentally. About moving us, making us wonder, and to encourage us. About how the world could be."
            },

            at: {
                intro1: 'The main project I worked on during my exchange semester at the University of Cincinnati aimed to identify an opportunity gap based on trend research and to develop a product for it.',
                intro2: 'The AT-420 Sparrow. An offroad teardrop trailer designed for connected nomads at the end of the world.',
                textTitle1: 'Research',
                text1: 'Analysis of SET Factors (social trends, economic forces, and technological advances), product area, competition, brand influences, product requirements, test subjects, and target audience.',
                textTitle2: 'Conception & Evaluation',
                text2: 'The next step was to develop 50 concepts related to the selected opportunity gap, three of which were selected, refined, and evaluated for their suitability through interviews.',
                textTitle3: 'Visualization',
                text3: 'The CAD model and final renderings were created using Autodesk Fusion.',
                titleContext: 'Context',
                textContext: '62 days, 20 states, 22000 kilometres, four guys, one car, one adventure. The Silk Road is the oldest trade route in the world. Since ancient times, it has connected China, Central Asia and Persia with Europe. Within two months in 2016, three friends and I travelled to historical sites and countries along the Silk Road. From Istanbul via Tehran to Almaty. From Byzantium via Persia to the Mongols. Many different countries, histories, people and cultures.',
                titleFinal: 'AT-420 Sparrow',
                textFinal: 'An offroad teardrop trailer designed for Connected Nomads at the end of the world.'
            },

            b2: {
                intro1: 'WHERE THE DAKAR LEFT OFF:',
                intro2: 'The once legendary Dakar Rally has left a spiritual heir in Africa. The Budapest-Bamako keeps the flame of trans-Saharan driving adventures alive. The start is not Paris, the finish is not Dakar, the costs are not the same, but the experience and the spirit of adventure have not changed.',
                intro3: 'The Budapest-Bamako is an adventure and navigation race with minimal support from Europe to Africa.',
                text1: 'Hydrolock is when an engine either seizes or suffers total failure due to the intrusion of water into the cylinders. The internal combustion engine is designed to compress air. Water, on the other hand, is virtually impossible to compress.',
                text2: 'Well... just before we had to abandon our jeep in Guinea near the Senegalese border, I made a 3D scan as a small remembrance. From this scan, the cover of my photo book was created. A personal summary of both the trip, but also of what I really enjoy doing: telling stories and decorating them a little here and there.',
                textFinal: 'From Zurich to Freetown in three weeks. After submerging the jeep, onwards in the Peugeot 505 Familiale (built 1982 to 1994).'
            },

            cosmo: {
                intro1: 'CUT PROTECTION FOR THE RESCUE DOG',
                intro2: 'Collaboration with Giorgio Biasco',
                intro3: 'The topic of the main module in the 5th semester was called Protected. Novel protection concepts for professionals from different professions were sought.',
                intro4: 'Testudo is a modular protective suit with cut protection and integrated light elements for the rescue dog of the future.',
                intro5: 'The modular system consists of three parts: Suit, collar and harness. The suit is made of UVEX Dyneema textile technology with integrated reflectors on the joints and body of the suit. The collar has LED lights on the front to allow the dog to see in the dark, but also active light elements sewn into the textile. The harness also has active light elements and Velcro on the top to expand the suit with various other protective elements.',
                intro6: 'The suit is ordered on the website. By entering the measurements using the classic measuring tape or the Testudo scan app, a customised product can be produced. Furthermore, the ScanApp not only offers the possibility to measure the dog, but also to virtually try on the configured product via smartphone camera.',

                textTitle1: 'Starting position',
                text1: 'The professional we opted for was the dog. We discussed our ideas with members of the Swiss Association for Search and Rescue Dogs (REDOG). Since the workshops of the HGK were closed, we decided to work on the concept purely digitally and dealt with Marvelous Designer (pattern), Substance Painter (material and surface) and Blender (modelling).',
                textTitle2: 'Target group',
                text2: 'Dogs differ greatly in shape and size, of course. For the concept, we limited ourselves to the Belgian shepherd dog.',
                text3: 'The model that assisted us was the rescue dog «Quiros».',

                contextTitle: 'Context',
                textContext1: 'The truck drivers of the Swiss army are distributed to new companies around the 16th week of their service. For me, this meant going to the Military Disaster Relief unit in Geneva. They were supported by rescue dogs and their operators.',
                textContext2: 'The rescue dogs of the Armed Forces can be used in military disaster relief at home as well as abroad and are ready within hours (also on Sundays and public holidays) to be deployed together with the rescue formations.',

                titleFinals1: 'Cutproof',
                textFinals1:'The full body suit is made of a cut-proof smart textile with Dyneema technology and prevents the rescue dog from getting stuck or cut on sharp edges and shattered glass.',
                textFinals2:'The protective garment can be supplemented with further products and configured with different patterns and colours to suit the area of use.',
                textFinals3:'The set consists of a cut-resistant full body suit, a light collar and a harness.',
                titleFinals4: 'Vision & Visibility',
                textFinals4:'Testudo provides the rescue dog with enough visibility during an operation in the dark due to its active and passive light elements on the suit, harness and collar.',
                textFinals5:'A modular protective suit with cut protection and integrated luminous elements for the rescue dog.'
            },

            floppy: {
                intro1: 'VIRTUAL REALITY AND ANXIETY MANAGEMENT',
                intro2: 'Collaboration with Marc Gämperle',
                intro3: 'A vision how virtual reality can empower people in their lives.',
                intro4: 'A moment of silence. Like a roll of thunder, the applause slowly builds. The audience all rise to their feet. A thundering storm of applause is unleashed.',
                intro5: 'All this despite sweaty hands, shaky limbs and a raised pulse. Being in the spotlight and speaking in front of people is a talent that not everybody is born with. Public appearances are much more likely to be accompanied by nervousness, stress and even fear. Training, however, softens them and strengthens self-confidence.',
                intro6: 'Our concept for a VR application lets the players practise their own presentation. Techniques and psychologically effective tips provide them with valuable assistance. Packed into an exciting story, practising becomes an experience.',

                textTitle1: 'Research',
                text1: 'Simultaneously with the start of the theory thesis, we began with the conception of the project',
                text2: ' Based on interviews, surveys and research, we defined the target group as 13 to 25 year old youths. We thought up scenarios, analysed game styles, game mechanics, facial expressions, gestures, character design and emotions.',
                textTitle3: 'Story and Game Design',
                text3: 'Then we started to develop a story in which we put all our accumulated knowledge. At the same time, we developed the main character and the levels. To finally explain the concept, we made concept art images, animations, renderings and a video.',

                text4: 'The story is meant to carry the players into a different world.',
                text5: 'One is supposed to immerse oneself and leave reality behind.',
                text6: "Having been discarded into the underworld (or junkyard), the goal is to fight one's way back. To do this, levels and exercises must be completed. If all tasks have been mastered, the way back to the overworld opens up.",
                textTitle7: 'Presentation',
                text7: 'What remains important throughout the story is the presentation. The presentation mode is accessible at all times.',
                text8: 'It allows players to upload and train their own presentations.',
                text9: 'It is also possible to present with and in front of friends or the entire class.',

                titleFinals1: 'Development',
                textFinals1: 'Mastering different levels leads to more and more content being unlocked. This is to encourage the players to improve in the individual skills.',
                textFinals2: 'The character improves continuously until it regains its former glory. Practice makes perfect.',
                textFinals3: 'A vision for a VR app that lets players practice their own presentation.'
            },

            misc: {
                text1: "#NICHTOHNEMEINEMÄDELS: Visualizations for the DFB's 2nd Frauen-Bundesliga Trophy Design Competition. 2022.",
                text2: 'Independent study: experiments, tutorials and jobs. 2022/23.',
                text3: 'With'
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
});

export default i18n;
