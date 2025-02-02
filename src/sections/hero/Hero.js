import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import './Hero.css'

// Import Illustration
import workGif from './work.png'

// Import social icons
import emailIcon from '@assets/social-icons/email.svg'
import githubIcon from '@assets/social-icons/github.svg'
import linkedinIcon from '@assets/social-icons/linkedin.svg'
import linkedinIconButton from '@assets/social-icons/linkedin-button.svg'
import itchIcon from '@assets/social-icons/itchio.svg'


const Hero = () => {
    const roles = [
        'Software Engineer',
        2000,
        'Game Programmer',
        2000,
        'IT Solutions Analyst',
        2000,
        'Unity Developer',
        2000,
        'UE5 Developer',
        2000,
        'AI Programmer',
        2000
    ];

    const socialLinks = [
        { name: 'Email', url: 'mailto:mohammed_bajaman@hotmail.com', title: 'mohammed_bajaman@hotmail.com', icon: emailIcon },
        { name: 'GitHub', url: 'https://github.com/mbajaman', title: 'https://github.com/mbajaman', icon: githubIcon },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mbajaman/', title: 'https://www.linkedin.com/in/mbajaman/', icon: linkedinIcon },
        { name: 'Itch', url: 'https://mbajaman.itch.io/', title: 'https://mbajaman.itch.io/', icon: itchIcon }
    ];

    return (
        <section className="hero-section section-tracker">
            <div className="hero-text">
                <h1>
                    Hello, I'm
                    <span className="highlight"> Mohammed</span>
                </h1>
                <h2>
                    a <span className="typewriter">
                        <TypeAnimation
                            sequence={roles}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                            preRenderFirstString={true}
                        />
                    </span>
                </h2>
                <p className="hero-subtitle">
                    Passionate about creating elegant solutions through code. 
                    Specializing in software engineering, game development, and IT solutions.
                </p>
                <div className="hero-social-links-vertical">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.url}
                            title={link.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <img src={link.icon} alt={link.name} />
                        </a>
                    ))}
                </div>
                <div className="hero-actions">
                    <div className="cta-buttons">
                        <div 
                            onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                            className="primary-button"
                            style={{ cursor: 'pointer' }}
                        >
                            View My Work
                        </div>
                        <Link to="https://www.linkedin.com/in/mbajaman/" className="secondary-button">
                        <img src={linkedinIconButton} alt="LinkedIn" className='button-icon'/>
                        Let's Connect
                        </Link>
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src={workGif} alt="Developer working" />
            </div>
        </section>
    )
}

export default Hero;