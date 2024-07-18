import React from 'react';

import LogoImg from '../img/logo.svg';
import NikeImg from '../img/papuc.png';
import { useMotionValue, useTransform, motion} from 'framer-motion';

const Card = () => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    {value: '#37b76f' },
    {value: '#272425' },
    {value: '#f2c758' },
    {value: '#ffffff' },
  ];

  return (
  <div style = {{perspective: 2000}}>
    {/* Card */}
    <motion.div
    style={{x, y, rotateX, rotateY, z: 100}}
    drag
    dragElastic={0.18}
    dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
    whileTap={{cursor: 'grabbing'}}
     className='w-[426px] min-h-[600px] bg-[#6bc290]
    rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'>
      {/*Card logo*/}
      <div className='mb-6'>
        <img src={LogoImg} alt=''/>
      </div>
      {/*card title*/}
      <h1 className='text-4xl mb-6 font-extrabold'>Nike Air Force 1 low "Jade Horizon"</h1>
      {/*card subtitle*/}
      <p className='max-w-[300px] text-[#000000] mb-6'>
      The Nike Air Force 1 Low "Jade Horizon" features a jade green leather upper, beige accents, and a white midsole. Iconic style and all-day comfort.
      </p>
      {/*button and price wrapper*/}
      <div className='flex items-center gap-x-[20px] mb-12'>
        <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>Add to bag</button>
        <div className='text-[24px] font-bold text-[#000000]'>$494.99</div>
      </div>
      <ul className='flex gap-x-[10 px]'>
        {colors.map((color, index) =>{
          return (
            <li 
            key = {index} 
            style={{backgroundColor: color.value}} 
            className='w-8 h-8 rounded-full cursor-pointer'>
            </li>
          );
        })}
      </ul>
      {/*card image*/}
      <motion.div 
      style={{x, y, rotateX, rotateY, z: 100000}}
      className='absolute top-12 -right-64 w-[620px]'>
        <img src={NikeImg} alt='' draggable = 'false'/>
      </motion.div>
      </motion.div>
  </div>
  );
};

export default Card;
