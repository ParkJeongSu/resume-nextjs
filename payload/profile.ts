import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/PARKJEONGSU.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'PARK JEONGSU',
    small: '(31)',
  },
  contact: [
    {
      title: 'pjs91_marrow@naver.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-4767-6182',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/ParkJeongSu',
      link: 'https://github.com/ParkJeongSu',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/marrow.Jeongsu',
      icon: faFacebook,
    },
    {
      title: 'https://jeongsu.tistory.com/135?category=737281',
      link: 'https://jeongsu.tistory.com/135?category=737281',
      // icon: faRss,
      icon: faBlogger,
    },
  ],
  notice: {
    title: '휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
