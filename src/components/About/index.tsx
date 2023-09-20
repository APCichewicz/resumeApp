import React from 'react'
import './index.scss'
import { BadgeStepper } from '../BadgeStepper/index.tsx'
import { AnimatedLetters } from '../AnimatedLetters/index.tsx'

const About = () => {
  return (
        <div className="container about-page">
                <h1 className='title'>
                    <AnimatedLetters 
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                    letterClass='text-animate'
                    />
                </h1>
                <div className="about-content">
                    <h2>Description</h2>
                    <p>I'm Andrew Cichewicz, an IT Engineer at Baker Tilly US, where I specialize in cloud engineering and automation. 
                        Utilizing technologies like Azure, Python, and Terraform, I've successfully designed robust and scalable cloud solutions. 
                        My background includes key roles such as leading Tier 2 Support at The Vanguard Group and executing on-demand hardware solutions at Worldwide Tech Services. 
                        I view myself as more than just a technologist; I'm a change agent in the evolving landscape of DevOps and IT governance.</p>
                    <p>
                    I hold a diverse range of industry-recognized certifications, underscoring my commitment to continuous learning and staying ahead in the cloud innovation curve. 
                    This drive for self-improvement doesn't stop at personal development; I'm equally passionate about elevating my teams. 
                    I take pride in mentoring junior staff and enriching our collective skill set.
                    </p>
                    <p>
                    From configuring Azure RBAC to fine-tuning CI/CD pipelines, my ultimate aim is to drive technological transformation and achieve operational excellence.
                    My focus is always on delivering maximum value while pushing the boundaries of what's possible in the tech arena.
                    </p>
                    <h2>Work Experience</h2>
                        <h3>Baker Tilly US</h3>
                        <h4>IT Engineer</h4>
                        <p>10/21 – Present</p>
                        <ul>
                            <li>Developed Automation and GUI tools with Powershell and Python to boost team productivity and streamline workflows.</li>
                            <li>Wrote from scratch, modified, and troubleshot Terraform templates for use in Terraform cloud-based Azure deployments, enhancing the robustness and efficiency of cloud solutions.</li>
                            <li>Administered Azure RBAC, VDI, Microsoft Servers (on-prem and cloud-based), and Group Policy for smooth and reliable IT operations.</li>
                            <li>Trained junior staff on Git workflows, Azure principles, and system troubleshooting concepts including servers, hardware, and operating systems to elevate team capabilities and enhance service quality.</li>
                        </ul>

                        <h3>The Vanguard Group (Contract)</h3>
                        <h4>IT Support Engineer level 2</h4>
                        <p>05/21 - 10/21</p>
                        <ul>
                            <li>Orchestrated comprehensive training programs for Tier 1 and Tier 2 technicians on infrastructure technologies, including cloud-based solutions, thereby enhancing team competence and service quality.</li>
                            <li>Led and managed the Tier 2 support team, optimizing ticket assignment and escalation procedures to ensure swift issue resolution and elevate customer satisfaction metrics.</li>
                            <li>Designed and deployed automation tools specifically focused on streamlining support for critical business functions, contributing to a measurable improvement in operational efficiency.</li>
                        </ul>

                        <h3>Worldwide Tech Services</h3>
                        <h4>Field Engineer</h4>
                        <p>12/20 – 05/21</p>
                        <ul>
                            <li>Specialized in OEM hardware repair, showcasing deep technical expertise in diagnosing, troubleshooting, and resolving hardware issues for HP, Dell, and Lenovo products in a client-facing environment.</li>
                            <li>Responded to on-site service calls for hardware malfunctions, delivering quick and effective solutions that minimized downtime and maintained high customer satisfaction rates.</li>
                        </ul>
                    <h2>Education</h2>
                    <ul>
                        <li>Western Governors University, Computer Science - BS (incomplete) 2023</li>
                        <li>Montgomery County Community College, Computer Science- AS (3.86) 2020</li>
                    </ul>
                    <h2>Skills</h2>
                    <ul className='skill-list'>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Flask</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>linux</li>
                        <li>bash</li>
                        <li>docker</li>
                        <li>aws</li>
                        <li>terraform</li>
                        <li>ansible</li>
                        <li>jenkins</li>
                        <li>packer</li>
                        <li>Azure</li>
                        <li>Azure Devops</li>
                        <li>CI/CD</li>
                        <li>Kubernetes</li>
                    </ul>
                    <h2>Interests</h2>
                </div>
                <div className='about-side'>
                    <div className='cert-section-title'>
                        <h2>Certifications</h2>
                        <BadgeStepper />
                    </div>
                    <div className='upcoming-certs'>
                        <h2>In Progress</h2>
                        <ul>
                            <li>Certified Kubernetes Administrator</li>
                            <li>Red Had Certified System Administrator</li>
                            <li>Azure Data Engineer Associate (DP-203)</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default About
