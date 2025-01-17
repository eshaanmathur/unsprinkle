import React from 'react';
import styled from 'styled-components/macro';
import ResposiveImage from '../ResponsiveImage';

const Hero = () => {
    return (
        <Wrapper>
            <HeroImage
                src={'/images/hero-img.jpg'}
                alt={'An Example image of a cute cat staring at the you with a black background'}
            />
            <Swoop src="/swoop.svg" aria-hidden={true} alt="" />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: relative;
    height: 60vh;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: hsl(0deg 0% 1%);
`;

const HeroImage = styled(ResposiveImage)`
    display: block;
    width: 500px;
    height: 500px;
    max-height: 100%;
`;

const Swoop = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
    bottom: -2px;
    width: 100%;
`;

export default Hero;
