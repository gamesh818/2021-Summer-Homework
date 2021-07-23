
import { Carousel } from 'antd-mobile';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {



  // 模拟componentDidMount
  useEffect(() => {
    // 获取轮播图数据
    getCarouselData()
  }, [])

//#region 轮播图
// 轮播图数据
const [CarouselData, setCarousel] = useState([])
// 轮播图状态
const [isCarousel, setIsCarousel] = useState(false)

  // 轮播图数据
  const getCarouselData = async () => {
    await axios.get('http://localhost:8080/home/swiper').then((res) => {
      if (res.data.status === 200) {
        // 赋值获取的数据
        setCarousel(res.data.body)
        // 数据赋值后 改变数据存在的状态
        setIsCarousel(true)
      }
    })
  }

  // 轮播图结构
  const CarouselTa = ()=>{
    return(
      CarouselData.map((item) => {
        return (
          <img key={item.id} src={`http://localhost:8080${item.imgSrc}`} alt="" style={{ width: '100%', height: 212, verticalAlign: 'top' }} />
        )
      })
    )
  }

//#endregion


  return (
    <div className="Home">


      {
        // 判断数据是否存在 如果存在 则渲染
        isCarousel ? <Carousel
          // 是否自动切换
          autoplay={true}
          // 是否循环播放
          infinite={true}

          hidden={CarouselData.length > 0}
        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        // afterChange={index => console.log('slide to', index)}
        >
          {
            CarouselTa()
          }
        </Carousel> : ('')
      }



    </div>
  );
}

export default Home;
