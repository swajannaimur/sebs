import Hero from '@/components/Hero';
import OurApproach from '@/components/OurApproach';
import WhoWeHelp from '@/components/WhoWeHelp';
import React from 'react';

const page = () => {
    return (
        <div>
            <Hero/>
            <WhoWeHelp/>
            <OurApproach/>
        </div>
    );
};

export default page;