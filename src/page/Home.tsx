import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import Section8 from '../components/Section8';

const Home = () => {
    return (
        <div className='max-w-[1425px] mx-auto overflow-x-hidden'>
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <ContactForm />
        </div>
    );
};

export default Home;