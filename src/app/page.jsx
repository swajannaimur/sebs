import Hero from '@/components/Hero';
import OurApproach from '@/components/OurApproach';
import Services from '@/components/Services';
import WhoWeHelp from '@/components/WhoWeHelp';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react';

const page = () => {
    return (
        <div>
            <Hero/>
            <WhoWeHelp/>
            <OurApproach/>
            <Services/>
            <WhyChooseUs/>
        </div>
    );
};

export default page;