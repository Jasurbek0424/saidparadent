import React from 'react'
import SectionButton from '../shared/buttons/section-title-button/sectionButton'
import Typography from '../Typography/typography'


const WorkVideo = () => {
  return (
    <section className=''>
      <div className='doctor__section-block'>
        <div className='doctor__section-title'>
          <Typography name={'Наши работы'} />
          <SectionButton name={'все видео'} />
        </div>
      </div>


      <div className='workVideo'>
        <video type='video/mp4' controls style={{}}>
          <source src="/video/work.mp4" />
        </video>
      </div>
    </section>
  )
}

export default WorkVideo