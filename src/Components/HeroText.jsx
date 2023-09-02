import React from 'react';
import Style from './Home/Home.module.scss';
import me from './Home/self.png';
import classNames from 'classnames';
import SocialIcon from "./Home/SocialIcon";
import { info } from "./Home/Info";
import EmojiBullet from "./Home/EmojiBullet";

const HeroText = () => {
  const darkMode = true;

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <main className={classNames("flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-175px)]", "p-4 md:p-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black")}>
        <div className={classNames("avatar shadowed", "mb-4 md:mb-0", `bg-gradient-to-tr from-${info.gradient[0]} to-${info.gradient[1]}`)}>
          <img className="avatar-image w-[25vh] h-[50.5vh] rounded-full p-3 mb-4 md:mb-0 md:mr-8" src={me} alt="developer" />
        </div>
        <div style={{
          borderRadius: '1rem',
          background: darkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.2)',
          boxShadow: darkMode
            ? '0 0 10px 0 rgba(0, 0, 0, 0.7)'
            : '0 0 10px 0 rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '1rem 2rem',
          transition: 'all 0.3s ease',
        }}>
          <h1 className={`custom-h1 text-2xl md:text-3xl text-center md:text-left`}>
            Hi, I'm <span className={`bg-clip-text text-transparent bg-gradient-text-${info.gradient[0]}`}>{info.firstName}</span>
            <span className={Style.hand}>🤚</span>
          </h1>
          <h2 className={`custom-h2 text-lg md:text-2xl text-center md:text-left`}>
            I'm {info.position}.
          </h2>
          <ul className="bio-list p-2 md:p-4">
            {info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </ul>
          <div className="social-icons flex gap-6 justify-center md:justify-start text-4xl md:text-5xl">
            {info.socials.map((social, index) => (
              <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroText;
