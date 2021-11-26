import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Catholic University',
      subTitle: '컴퓨터정보공학부',
      startedAt: '2011-03',
      endedAt: '2018-02',
    },
    {
      title: '광명고등학교',
      subTitle: 'Graduated',
      startedAt: '2007-03',
      endedAt: '2010-02',
    },
  ],
};

export default education;
