import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '에임시스템',
      position: 'MES Developer',
      startedAt: '2018-04',
      endedAt: '2021-11',
      descriptions: [
        '중국 출장(상해, 창사)',
        '공장 자동화에 관련된 시나리오 업무',
        '공장에 보안으로 전산실에서 개발하는 on-premise 환경에서 개발',
        '하루 200만건 이상의 트랜잭션이 발생하는 시스템',
        'Server Side 는 aim System 내부의 엔진을 사용하며 java를 통한 개발',
        'Client Side 는 C#를 사용 Winform 과 wpf 그리고 infragistic library 를 사용',
        'AWR을 사용한 오라클 통계 활용 및 SQL',
        'on-premise 환경에서 mantis 및 svn Server 구축',
        '프로젝트가 어떤 식으로 진행이 되는지, 공장에는 어떤 시스템들이 있는지 알게 된 경험',
        '좋은 사람들과 프로젝트를 많이 했고, 문제해결능력을 성장시켜준 회사',
      ],
      skillKeywords: [
        'JAVA',
        'C#',
        'Oracle',
        'Linux',
        'infragistic',
        'Mantis',
        'Confluence',
        'tibrv',
      ],
    },
    {
      title: '티켓몬스터',
      position: '인턴',
      startedAt: '2017-06',
      endedAt: '2017-08',
      descriptions: [
        'Angular 사용한 쇼핑몰 ui 구현',
        '웹브라우저에서 어떤식으로 화면이 보여지는지 알게 된 경험',
        '정적페이지 호출 후 프록시 서버를 통한 data 호출 경험',
      ],
      skillKeywords: ['javascript', 'Angular', 'nginx'],
    },
    {
      title: '대원씨앤씨',
      position: '인턴',
      startedAt: '2016-09',
      endedAt: '2016-11',
      descriptions: [
        'javascript 를 사용한 sk 내부시스템 ui 구현',
        '첫 회사였고, 전반적인 회사의 감각을 느낄 수 있었던 회사',
      ],
      skillKeywords: ['javascript'],
    },
  ],
};

export default experience;
