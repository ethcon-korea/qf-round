import "@fontsource/archivo";
let projects = [
  {
    "recipientId": 1,
    "projectName": "1일차",
    "tagline": "1일차에는 컨퍼런스와 해커톤을 개시합니다 (+ 전통놀이)",
    "description": "1일차에는 컨퍼런스와 해커톤을 개시합니다 (+ 전통놀이)",
    "ethereumAddress": "0x33c8C9D6ba627725Ea08322Ce60078F9b6f7E355",
    "website": "https://2023.ethcon.kr/",
    "thumbnailImageLink": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "logoCdnUrl": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "bannerImageLink": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "id": "1"
  },
  {
    "recipientId": 2,
    "projectName": "2일차",
    "tagline": "2일차에는 스폰서 워크샵과 해커톤 멘토링 그리고 전통 놀이를 합니다",
    "description": "2일차에는 스폰서 워크샵과 해커톤 멘토링 그리고 전통 놀이를 합니다",
    "ethereumAddress": "0x2215a197a32834ef93C4D1029551bB8D3B924DCc",
    "website": "https://2023.ethcon.kr/",
    "thumbnailImageLink": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "logoCdnUrl": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "bannerImageLink": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "id": "2"
  },
  {
    "recipientId": 3,
    "projectName": "3일차",
    "tagline": "3일차에는 해커톤 발표와 데모데이가 있습니다",
    "description": "3일차에는 해커톤 발표와 데모데이가 있습니다",
    "ethereumAddress": "0x131CF758d9EF6bcA88928442DC715c8Fdc113952",
    "website": "https://2023.ethcon.kr/",
    "thumbnailImageLink": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "logoCdnUrl": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "bannerImageLink": "https://cdn.imweb.me/thumbnail/20230802/a400018f805fd.png",
    "id": "3"
  }
]

export function getProjects() {
  return projects;
}

export function getRecipientIdbyId(id) {
  console.log(id);
  const p = projects.find((p) => p.id === id);

  return p.recipientId;
}

export function getProject(id: string) {
  return (
    projects.find((p) => p.id === id) ?? {
      projectName: "404 Project not found",
      tagline: "404 Tagline not found",
      description: "404 Description not found",
      ethereumAddress: "404 Address not found",
      website: "404 URL not found",
      thumbnailImageLink: "https://source.unsplash.com/random",
      logoCdnUrl: "https://source.unsplash.com/random",
      bannerImageLink: "https://source.unsplash.com/random",
      recipientId: 0,
      id: "0",
    }
  );
}

function shuffleFisherYates(array: any) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

//return shuffled version of allprojects array
export function getShuffledProjects() {
  // return shuffleFisherYates(getProjects());
  return getProjects();
}
