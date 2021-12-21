import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요~',
    '4년 가까이 MES라는 도메인에서 일했습니다.',
    'MES는 매일 200만건이 넘는 트랜잭션이 발생하며,설비와 통신하는 중요 시스템입니다.',
    '저의 주 업무는 아래와 같습니다.',
    '공장에서 직접 고객들과 소통 요구사항 수집',
    '요구사항을 분석 및 테이블설계 그리고 구현',
    '주 사용기술  Java, C#, Oracle, tibrv',
    '트러블 슈팅 : ap log, db history ,heap dump, gc log, AWR 분석',
    'mantis 및 svn 관리',
    '프로젝트 특이사항 confluence 기록',
    '일하면서 도메인의 중요성을 알게 되었습니다. 그리고 고객분들이 제가 만든 기능이나화면을 편리하게 사용해주시는 것을 보고 즐거움을 느꼈습니다.',
    '어떤 분야에서든 도메인과 즐거움을 느끼는 개발자가 되고 싶습니다.',
    '감사합니다!',
  ],
  sign: 'JEONGSU',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
