import React from 'react'
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineDribbble } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vinotha21/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/vinothaselvam" target="_blank"><FaGithub/></a>
        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank"><AiOutlineDribbble/></a>
    </div>
  )
}

export default HeaderSocials