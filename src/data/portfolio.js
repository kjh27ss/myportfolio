const logotext = "JOUNG'S";
const meta = {
    title:"최민정",
    description:"리엑트 웹사이트를 공부하면서 만든 페이지다."
};

const introdata = {
    title:"Hi! I'm Choi",
    animated:{
        first:"환영합니다.",
        second:"리액트 기반으로 제작된",
        third:"저의 포트폴리오 입니다."
    },
    description:`안녕하세요 저는 최민정입니다. 프론트앤드 개발자를 희망하고 있습니다. 새로운 것을 배우고, 만들고, 공유하기를 좋아합니다. 
    많은 사람들과 함께 멋진 프로젝트에 기여하고 싶습니다. 고양이를 좋아합니다. 감사합니다.`,
    img_url:"/images/meee.png"
};

const portfoliodata = {
    title:"Joung's portfolio",
    description:"developer, react, nodejs, next, web and app"
}

const imgData = [
    {img : 12, category:'web'},
    {img : 121, category:'web'},
    {img : 221, category:'app'},
    {img : 123, category:'app'},
    {img : 3, category:'web'},
    {img : 45, category:'web'},
    {img : 254, category:'design'},
    {img : 321, category:'design'},
    {img : 10, category:'web'},
    {img : 443, category:'app'},
    {img : 456, category:'web'},
    {img : 654, category:'web'},
    {img : 666, category:'design'},
    {img : 777, category:'design'},
    {img : 675, category:'design'},
    {img : 435, category:'web'},
    {img : 432, category:'design'},
    {img : 243, category:'web'},
    {img : 233, category:'app'},
    {img : 133, category:'web'},

]

const dataAbout = {
    title:'Welcome, About by self',
    content:`안녕하세요. 프론트앤드 개발자를 희망하고 있는 ooo입니다. 
    처음 프론트앤드를 접했을 때 큰 재미를 느껴 열심히 참여하며 배우고 있습니다. 
    빠르게 변하는 트렌드를 파악하고 습득하여 다양한 시도를 하고 있습니다.
    많은 사람들과 함께 멋진 프로젝트에 기여하고 싶습니다.`
}

const mytimeline = [
    {
        jobtitle:"oo고등학교 졸업",
        where:"경기",
        date:2017
    },
    {
        jobtitle:"oo대학교 컴퓨터 공학과 입학",
        where:"서울",
        date:2018
    },
    {
        jobtitle:"웹/앱 사이트 제작",
        where:"경기",
        date:2022
    },
    {
        jobtitle:"이젠컴퓨터학원 풀스택 과정 수료",
        where:"경기",
        date:2023
    },    
    {
        jobtitle:"풀스택 프로젝트 참여",
        where:"서울",
        date:2023
    }

];

const myskillFront = [
    {
        name:"Javascript",
        value:99
    },
    {
        name:"react",
        value:88
    },
    {
        name:'React Native',
        value:90
    },
    {
        name:'jQuery',
        value:99
    },
    {
        name:'Pug',
        value:60
    },
    {
        name:'HTML5',
        value:85
    },
    {
        name:'CSS3',
        value:90
    },
    {
        name:'Bootstrap',
        value:'85'
    }
];

const myskillBack = [
    {
        name:'nodeJS',
        value:80
    },    
    {
        name:'mongoDB',
        value:60
    }
];

const services = [
    {
        title:'UI & UX Design',
        description:"제안된 헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다. 국가는 청원에 대하여 심사할 의무를 진다. 대한민국은 민주공화국이다. 대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이 공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할 때에는 국회의장이 이를 공포한다."
    },
    {
        title:"Mobile Apps",
        description:"국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다."
    },
    {
        title:"Front & Back END",
        description:"대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다."
    }
];

const contact_config = {
    ADMIN_EMAIL : "kjh27ss@naver.com", 
    ADMIN_PHONE : "010-4500-3867",
    ADMIN_GITHUB : "https://github.com/kjh27ss",
    ADMIN_SERVICED : "service_mkn4xjb",
    ADMIN_TEMPLATE_ID : "template_rh8f6ph",
    ADMIN_API : "RST3lmfRdctq451jF"
};

export {
    meta,
    introdata,
    logotext,
    dataAbout,
    mytimeline,
    myskillFront,
    myskillBack,
    services,
    portfoliodata,
    imgData,
    contact_config
}