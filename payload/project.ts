import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '長沙 changesha HKC MES Project',
      startedAt: '2020-10',
      endedAt: '2021-09',
      where: 'Aim system',
      descriptions: [
        {
          content: 'Server Side',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java를 활용한 MES Server 개발 - 공장 자동화 시나리오' },
            { content: 'db 테이블 설계 및 SQL' },
          ],
        },
        {
          content: 'Client',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'winform 을 활용한 MES clinet 개발 - 기준정보 설정 및 history 조회기능' },
            {
              content:
                'wpf 을 활용한 FMC clinet 개발 - 실시간으로 서버의 응답을 받아 설비의 상태 확인 시스템',
            },
          ],
        },
        {
          content: '기타',
          weight: 'MEDIUM',
          descriptions: [
            { content: '트러블 슈팅 : ap log ,db history, oracle AWR 분석' },
            { content: 'mantis 관리자 및 프로젝트 이슈 confluence 기록' },
            { content: '고객과 직접 소통 요구사항 분석' },
          ],
        },
      ],
    },
    {
      title: 'ShangHai EDO MES Project Warranty',
      startedAt: '2019-09',
      endedAt: '2020-09',
      where: 'Aim system',
      descriptions: [
        {
          content: '유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'outOfMemory가 발생하는 부분 (MAT) 를 사용한 java heap dump 분석' },
            { content: 'AWR(오라클 통계)를 활용한 query 분석 및 query refactoring' },
            { content: 'code Refactoring' },
            { content: 'Zabbix 를 활용한 서버 정검 및 db check' },
          ],
        },
        {
          content: '기타',
          weight: 'MEDIUM',
          descriptions: [{ content: 'PM 역할 - 교통비 및 프로젝트 비용 정산' }],
        },
      ],
    },
    {
      title: 'ShangHai EDO MES Project',
      startedAt: '2018-05',
      endedAt: '2019-09',
      where: 'Aim system',
      descriptions: [
        {
          content: 'Server Side',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java를 활용한 MES Server 개발 - 공장 자동화 시나리오' },
            { content: 'db 테이블 설계 및 SQL' },
          ],
        },
        {
          content: 'Client',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'winform 을 활용한 MES clinet 개발 - 기준정보 설정 및 history 조회기능' },
            {
              content:
                'wpf 을 활용한 FMC clinet 개발 - 실시간으로 서버의 응답을 받아 설비의 상태 확인 시스템',
            },
          ],
        },
        {
          content: '기타',
          weight: 'MEDIUM',
          descriptions: [
            { content: '트러블 슈팅 : ap log ,db history, oracle AWR 분석' },
            { content: 'mantis 관리자 및 프로젝트 이슈 confluence 기록' },
            { content: '고객과 직접 소통 요구사항 분석' },
          ],
        },
      ],
    },
  ],
};

export default project;
