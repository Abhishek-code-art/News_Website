import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

// Sample data for the carousel
const items = [
  {
    id: '1',
    title: 'Sample Title 1',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '2',
    title: 'Sample Title 2',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '3',
    title: 'Sample Title 3',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '4',
    title: 'Sample Title 4',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '5',
    title: 'Sample Title 5',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '6',
    title: 'Sample Title 6',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '7',
    title: 'Sample Title 7',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '8',
    title: 'Sample Title 8',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  },
  {
    id: '9',
    title: 'Sample Title 9',
    image: 'https://via.placeholder.com/200x112',
    link: '#'
  }
];

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  padding: 10px;
`;

const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Arrows = styled.div`
  display: flex;
`;

const Arrow = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background: #ddd;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const CarouselContent = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = styled.div`
  min-width: 200px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
`;

const ItemThumbnail = styled.a`
  display: block;
  position: relative;
  width: 100%;
  height: 112px;
  background-size: cover;
  background-position: center;
`;

const ItemTitle = styled.a`
  display: block;
  padding: 10px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(false);

  const handleNextClick = () => {
    if (carouselRef.current) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft += 220; // Scroll by the width of one item plus margin
      setPrevDisabled(false);
      if (carouselRef.current.scrollLeft >= maxScrollLeft) {
        setNextDisabled(true);
      }
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 220; // Scroll by the width of one item plus margin
      setNextDisabled(false);
      if (carouselRef.current.scrollLeft <= 0) {
        setPrevDisabled(true);
      }
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setNextDisabled(carouselRef.current.scrollLeft >= maxScrollLeft);
      setPrevDisabled(carouselRef.current.scrollLeft <= 0);
    }
  }, []);

  return (
    <CarouselWrapper>
      <CarouselHeader>
        <HeaderTitle>Promoted</HeaderTitle>
        <Arrows>
          <Arrow className={`arrow-prev ${isPrevDisabled ? 'disabled' : ''}`} onClick={handlePrevClick}>
            ◀
          </Arrow>
          <Arrow className={`arrow-next ${isNextDisabled ? 'disabled' : ''}`} onClick={handleNextClick}>
            ▶
          </Arrow>
        </Arrows>
      </CarouselHeader>
      <CarouselContent ref={carouselRef}>
        {items.map(item => (
          <CarouselItem key={item.id}>
            <ItemThumbnail href={item.link} style={{ backgroundImage: `url(${item.image})` }} />
            <ItemTitle href={item.link}>{item.title}</ItemTitle>
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselWrapper>
  );
};

export default Carousel;
