import { faArrowTrendUp, faBookOpen, faBullseye, faCamera, faChartColumn, faCloud, faMicrochip, faPercent, faServer, faShield, faShieldHalved, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Faqs from "@/components/Faqs";
import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
    return (
        <main className="bg-black">
            <Header/>
            <div className=" text-white mt-[60px] lg:mt-40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-left mb-[44px] lg:mb-16">
                        <h1 className="text-[40px] md:text-[40px] lg:text-9xl font-bold">LOREM IPSUM</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Article
                            title="DOLOR SIT"
                            content="Lorem ipsum dolor sit amet consectetur. In nibh nam vel iaculis et. Neque venenatis est risus id eros qui sit. In iaculis mattis faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tristique congue sem turpis. Nulla eu lorem cras leo."
                            icon={faUserPlus}
                        />
                        <Article
                            title="LOREM IPSUM DOLOR SIT"
                            content="Dolor adipiscing condimentum aliquam nulla amet ante ipsum vel nisi. Dignissim molestie mauris purus feugiat amet. Eget. Vutera malesuada ultrices nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus."
                            icon={faServer}
                        />
                        <Article
                            image="https://i.ibb.co/HzBwSv9/blog-image.jpg"
                            title="LOREM IPSUM DOLOR SIT"
                            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                            imageAlt="Woman in a red dress standing in front of a microphone at an event"
                            icon={faBullseye}
                        />
                        <Article
                            title="LOREM IPSUM"
                            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                            icon={faPercent}
                        />
                        <Article
                            title="DOLOR SIT AMET"
                            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                            icon={faMicrochip}
                        />
                        <Article />
                        <Article />
                        <Article
                            image="https://i.ibb.co/XZDLXvs/Frame-1321314691.jpg"
                            imageAlt="Man with painted face wearing a headset and sunglasses"
                        />
                        <Article
                            title="LOREM IPSUM DOLOR"
                            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                        />
                    </div>
                </div>
                <About/>
                <div className="py-3 bg-[url('../asset/images/sliderBGimg.png')] bg-center	"> 
                    <div className="overflow-hidden whitespace-nowrap">
                        <div className="inline-block animate-slide">
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                            <span className="mx-4 uppercase text-lg font-bold">lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-left mb-[60px] lg:mb-16 mt-[60px]">
                            <h1 className=" text-[40px] lg:text-9xl font-bold uppercase">lorem ipsum dolor set</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Article
                                title="Lorem ipsum dolor"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                icon={faShield}
                            />

                            <Article
                                title="dolor sit amet"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                icon={faArrowTrendUp}
                            />
                            <Article />
                            <Article />
                            <Article
                                image="https://i.ibb.co/bK2NKky/Frame-1321314690.jpg"
                            />
                            <Article
                                title="LOREM IPSUM DOLOR SIT"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                imageAlt="Woman in a red dress standing in front of a microphone at an event"
                                icon={faChartColumn}
                            />
                        </div>
                    </div>
                </div>
                <Faqs/>
            </div>
        </main >
    );
}

function Article({ title, content, icon, image, imageAlt }: any) {
    return (
        <article className="rounded-lg">
            {image && <img src={image} alt={imageAlt} className="mb-10" />}
            <h2 className="font-montserrat text-2xl font-semibold">{title}</h2>
            <p className="mb-4 opacity-70 leading-7">{content}</p>
            {/* {icon && <Image className={` text-red-500 text-2xl`} src={icon} alt="this is an icon"/>}
             */}
            {
                icon && <FontAwesomeIcon icon={icon} className={'text-green-700 w-5'} />
            }
        </article>
    );    
}
