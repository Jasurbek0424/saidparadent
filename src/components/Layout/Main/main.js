import React from 'react'
import Doctor from '../../Doctor/doctor'
import Sertificats from '../../Sertificats/sertificats'
import Works from '../../Works/works'
import WorkVideo from '../../Workvideo/workVideo'
import Clinic from '../../Clinic/clinic'
import Form from '../../Form/Form'
import Service from '../../Service/Service'
import Location from '../../Location/Location'
import Result from '../../Results/results'
import Standarts from '../../Standarts/standarts'

const Main = () => {
  return (
    <main className='container'>
        <Service />
        <Doctor />
        <Sertificats />
        <WorkVideo />
        <Works />
        <Clinic />
        <Standarts />
        <Location />
        <Result />
    </main>
  )
}

export default Main