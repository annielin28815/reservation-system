import React from "react";
import '../index.css';
import ServiceCard from '../components/serviceCard';

const HomePage = (props) => {
  const serviceList = [
    {
      id: 1,
      title: '給做版面設計的人在版面上塞入一些文字',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: 'https://fakeimg.pl/320x320/'
    },
    {
      id: 2,
      title: '給做版面設計的人在版面上塞入一些文字',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: 'https://fakeimg.pl/320x320/'
    },
    {
      id: 3,
      title: '給做版面設計的人在版面上塞入一些文字',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: 'https://fakeimg.pl/320x320/'
    },
    {
      id: 4,
      title: '給做版面設計的人在版面上塞入一些文字',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: 'https://fakeimg.pl/320x320/'
    },
  ];

  const productList = [
    {
      id: 1,
      img: 'https://fakeimg.pl/320x320/'
    },
    {
      id: 2,
      img: 'https://fakeimg.pl/320x320/'
    },
    {
      id: 3,
      img: 'https://fakeimg.pl/320x320/'
    },
    {
      id: 4,
      img: 'https://fakeimg.pl/320x320/'
    },
    {
      id: 5,
      img: 'https://fakeimg.pl/320x320/'
    },
  ];

  return <main className='container mx-auto py-5'>

    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8 justify-center items-center mx-auto ">
      {serviceList.map((item, index) => {
        return <ServiceCard key={item.id} title={item.title} pic={item.pic} des={item.des}/>
      })}
    </div>
    
    {/* <div className="my-3 py-3 grid grid-flow-col gap-x-6 justify-start items-center mx-auto place-items-stretch overflow-x-auto productSection">
      {productList.map((item, index) => {
        return <ProductCard key={item.id} img={item.img} />
      })}
    </div> */}
  </main>
}

export default HomePage;