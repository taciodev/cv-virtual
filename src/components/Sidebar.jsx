import Avatar from '../assets/img/eu.jpeg'
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import { Link } from 'react-router-dom'

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt='foto' />
      <p className="title">Desenvolvedor de Software</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="../assets/files/cv2.jpg" download className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
