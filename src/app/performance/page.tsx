import performanceImg from '/public/performance.jpg';
import Hero from '@/components/hero';

export default function performancePage(){
    return(
        <Hero 
        imgData={performanceImg}
        imgAlt='this is performance image'
        title='welcome to my performance page'
        />
    )
}