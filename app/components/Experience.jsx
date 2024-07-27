import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image from 'next/image';
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
        <VerticalTimelineElement
          visible={true}
          contentStyle={{ background: '#1d1836', color: '#fff'}}
          contentArrowStyle={{ borderRight: '7px solid #232631'}}
          date={experience.date}
          iconStyle={{ background: experience.iconBg }}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <div className='rounded-full items-center bg-white h-5 w-5' />
            </div>
          }
        >
          <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0}}>{experience.company_name}</p>
          </div>

          <ul className='mt-5 list-disc ml-5 space-y-2'>
              { experience.points.map((point, index) => (
                  <li
                    key={`experience-points-${index}`}
                    className='text-white text-[14px] pl-1 tracking-wide'
                  >
                      {point}
                  </li>
              ))}
          </ul>
        </VerticalTimelineElement>
    );
};

//Experience component
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Expereince. </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
              <VerticalTimeline visible={true}>
                {experiences.map((experience, index) => {
                  return <ExperienceCard key={index} experience={experience} />
                })}
              </VerticalTimeline>         
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work");
