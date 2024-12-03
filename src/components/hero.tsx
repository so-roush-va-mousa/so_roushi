import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData
    imgAlt: string;
    title:string;
}

export default function Hero(props: HeroProps){
    return (
        <div className="relative h-screen">
            <div className="absolute -z-10 inset-0">
            <Image 
                src={props.imgData}
                alt={props.imgAlt}
                fill
                style={{ objectFit: 'cover'}}
            />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r z-0 from-slate-900"></div>
            <div className="block left-1/2 -translate-x-1/2 -translate-y-1/2  absolute justify-center items-center text-2xl font-bold text-white z-10 pt-96">
                <h1>
                    {props.title}
                </h1>
            </div>
        </div>
    )
}