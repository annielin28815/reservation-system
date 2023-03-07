import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import  product01  from './assets/images/product01.jpg';
import  product04  from './assets/images/product04.jpg';
import  product08  from './assets/images/product08.jpg';
import  product07  from './assets/images/product07.jpg';
import ServiceCard from './components/serviceCard';

const App = () => {
  const serviceList = [
    {
      title: '美甲服務',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: product01
    },
    {
      title: '眉型設計',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: product04
    },
    {
      title: '日式嫁接',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: product08
    },
    {
      title: '半永久霧眉',
      des: '閒坐悲君亦自悲，萬國衣冠拜冕旒，禁裡疏鐘官舍晚，雙袖龍鍾淚不乾，孤帆遠影碧空盡，望帝春心託杜鵑，曾是寂寥金燼暗，卻話巴山夜雨時，為有雲屏無限嬌，九重誰省諫書函，無邊落木蕭蕭下，日暮聊為梁父吟，煙籠寒水月籠沙，楚腰纖細掌中輕，繁華事散逐香塵，野渡無人舟自橫，關門令尹誰能識，何如此處學長生，別夢依依到謝家，剔開紅燄救飛蛾，日光斜照集靈臺，兩三星火是瓜洲，冰簟銀床夢不成，北斗闌干南斗斜，寂寞空庭春欲晚，顧影無如白髮何，千尋鐵鎖沈江底，袍褲宮人掃御床。',
      pic: product07
    },
  ]
  return (
    <div className='bg-gray-light h-screen'>
        <header className='container mx-auto py-6'>
          <div className='grid grid-cols-12 gap-2 justify-between items-center bg-gray-dark text-skin rounded-xl shadow p-4 '>
            <div className='col-span-2 tracking-widest text-2xl font-logo'>Save us</div>
            <div className='col-span-8 mx-auto'>
              <div className='border border-teal-700 px-4 py-2 rounded-3xl h-10 grid grid-flow-col auto-cols-max justify-between items-center divide-x divide-white'>
                <div className='px-4'>預約項目</div>
                <div className='px-4'>月份</div>
                <div className='px-4'>人數</div>
                <div className='px-4'><FontAwesomeIcon icon={solid('magnifying-glass')} color="#c1b2ab" /></div>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                <div className=''>
                  <div className='bg-skin text-gray-dark px-2 py-2 rounded-full h-10 text-center'>
                    直接預約
                  </div>
                </div>
                <div className='border-2 border-skin rounded-full font-bold text-center w-10 h-10 p-2'>
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className='container mx-auto py-3'>
          <div className="bg-blue-100 grid grid-cols-4 gap-8 justify-center items-center mx-auto ">
            {serviceList.map((item, index) => {
              return <ServiceCard title={item.title} pic={item.pic} des={item.des}/>
            })}
          </div>
          
          <div class="my-3 py-3 grid grid-flow-col gap-x-6 justify-start items-center mx-auto place-items-stretch overflow-x-auto productSection">
            <div class="col-span-3 w-80">
              <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="col-span-3 w-80">
              <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="col-span-3 w-80">
              <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="col-span-3 w-80">
              <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="col-span-3 w-80">
              <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
          </div>
        </main>

        <footer></footer>
    </div>
  );
}
export default App;
