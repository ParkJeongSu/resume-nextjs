import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'MES 개발자로서 4년 가까이 일해왔습니다. 주로 java와 C# 그리고 오라클을 많이 사용했습니다. 고객과 직접 대면하여 요구사항을 듣고 제안하는 환경에서 일했습니다.',
    '프로젝트를 3개 경험하는 동안 다양한 트러블 슈팅에 대응했습니다.',
    '회사에서 처음으로 MAT를 활용해서 oom 을 잡기도 했습니다. 또한 기록을 중요시 생각해서 회사에서 confluence를 가장 많이 작성했습니다.',
    '자동화에 관심이 많습니다. ',
    '개발과 패치를 하면서 많은 인재를 경험했습니다. 그래서 어떻게 하면 컴퓨터에게 단순하고 반복되는 일을 시킬수 있는지 관심이 많습니다.',
    'MES 개발을 하면서 도메인의 중요성을 알게되었습니다. 도메인의 중요성을 이해하는 개발자가 되겠습니다.',
    '감사합니다.',
  ],
  sign: 'JEONGSU',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
