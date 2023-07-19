import { useState, useEffect, useRef} from 'react'
import axios from 'axios'
// import stars from './stars'
import Stars from './stars'
// import BadgeStepper from './BadgeStepper'
import BadgeStepper from './BadgeStepper'
import './App.css'



function App() {
  const [visitorCount, setVisitorCount] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect( () => {
     axios.get('https://apcresumeapi.azure-api.net/apcvisitorcount/ResumeHttpTrigger?subscription-key=82b91c6d16254f6583170cd080fec7ac').then((res) => {
      setVisitorCount(res.data.value)
    }).then(() => {
      ref.current!.innerHTML = visitorCount.toString()
    }).catch((err) => {
      console.log(err)
    }
    )
  }, [])



  return (
    <main className='relative h-screen text-white bg-black'>
         <Stars />
            <div className='absolute top-0 left-0 w-screen px-32'>
                <section className='grid items-center h-screen grid-cols-1 gap-8 font-semibold text-center place-content-center'>
                  <h2 className='text-4xl'>Welcome visitor number: <span ref={ref}
                  className='font-bold text-9xl text-grel'
                  ></span></h2>
                  <h1 className='font-bold text-8xl'>Andrew Cichewicz</h1>
                  <h2 className='text-5xl'>System Administrator and aspiring Cloud Engineer</h2>
                  <p className='font 4xl'>AndrewPaulCichewicz@gmail.com | (610) 955-5425 | Lansdowne, Pa 19050 | <a href="https://github.com/APCichewicz">Github</a></p>
                </section>

                <section className='grid h-screen grid-cols-2 mb-8'>
                  <div className='grid grid-cols-1 gap-12 auto-rows-min'>
                    <h2 className='text-6xl'>CERTIFICATONS</h2>
                    <ul className='grid col-start-1 gap-4 pl-16'>
                      <li>Microsoft Certified: Azure Administrator Associate</li>
                      <li>Microsoft Certified: Azure Solutions Architect Expert</li>
                      <li>Axelos ITIL 4 Foundations</li>
                      <li>HashiCorp Certified: Terraform Associate</li>
                      <li>COMPTIA A+</li>
                      <li>COMPTIA Network+</li>
                      <li>COMPTIA IT Operations Specialist</li>
                    </ul>
                  </div>
                  <div className='w-full col-start-2 row-span-2 row-start-1 h-4/6'>
                    <BadgeStepper />
                  </div>
                </section>

                <section className='h-screen'>
                  <h2 className='mb-4 text-6xl'>SKILLS</h2>
                  <ul className='grid grid-cols-4 gap-4 ml-12'>
                    <li>Microsoft Azure</li>
                    <li>Terraform</li>
                    <li>Group Policy</li>
                    <li>SQL</li>
                    <li>HTML & CSS</li>
                    <li>Powershell</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Windows Server</li>
                    <li>Linux</li>
                    <li>Software Troubleshooting</li>
                    <li>Hardware Troubleshooting</li>
                    <li>Networking</li>
                    <li>Active Directory</li>
                    <li>Infrastructure as code</li>
                </ul>
                </section>

                <section className='grid h-screen grid-cols-12 auto-rows-min'>
                  <h2 className='text-6xl col-span-full'>WORK HISTORY</h2>
                  <div className='grid col-start-2 row-start-2 gap-4 mt-8 col-span-full'>
                    <div className='flex justify-between text-3xl font-semibold'>
                      <h3>Baker Tilly Virchow Krouse LLP </h3>
                      <h4>Nov 2021-Present</h4>
                    </div>
                    <p className='text-2xl'>System Administrator</p>
                    <ul className='grid col-start-1 gap-4 py-12 pl-16'>
                      <li>Improved team productivity by creating GUI tools and automation scripts with Powershell and Python.</li>
                      <li>Consulted with cloud engineers on Terraform deployments of Azure Resources.</li>
                      <li>Administrated Azure VDI, Microsoft servers, Group Policy, and line of business applications.</li>
                      <li>Trained junior staff in general troubleshooting of Windows Servers, computer hardware, operating systems, Line of Business Applications, and networking.</li>
                    </ul>
                    <div className='flex justify-between text-3xl font-semibold'>
                      <h3>The Vanguard Group</h3>
                      <h4> May 2021-Nov 2021</h4>
                    </div>
                    <p className='text-2xl'>(Contract) Tier 2 Support Desk Manager,</p>
                    <ul className='grid col-start-1 gap-4 py-12 pl-16'>
                      <li>Educated and trained Tier 1 and 2 technicians on Supporting Infrastructure technologies, troubleshooting Line of Business Applications, and ticketing systems.</li>
                      <li>Managed and monitored Tier 2 team including Ticket assignment and escalation, ensuring Time to Resolution metrics were met.</li>
                      <li>Developed Automation tools for use in supporting business functions.</li>
                    </ul>
                  </div>
                </section>
            </div>
    </main>
  )
}

export default App
