import scaleImg from '/public/scale.jpg'
import Hero from '@/components/hero'

export default function scalePage(){
    return(
        <Hero 
        imgData={scaleImg}
        imgAlt='this is my scale alt for scale picture'
        title='welcome to my scale work'
        />
    )
}