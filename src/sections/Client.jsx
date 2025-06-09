import { clientReviews } from '../constants/index.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const boxColors = [
  'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
  'bg-gradient-to-br from-blue-500 via-cyan-500 to-green-400',
  'bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400',
  'bg-gradient-to-br from-orange-400 via-pink-500 to-red-500',
  'bg-gradient-to-br from-teal-400 via-green-400 to-lime-300',
  'bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500',
];

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">
        <span className="bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 bg-clip-text text-transparent font-extrabold">
          Word on the street
        </span>
        <br />
        <span className="text-white">about me</span>
      </h3>

      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={24}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={4000}
        loop
        centeredSlides={false}
        allowTouchMove={true}
        className="w-full"
        style={{ padding: '2rem 0' }}
      >
        {clientReviews.map((item, idx) => (
          <SwiperSlide key={`review-${item.id}`} style={{ width: 320, maxWidth: '90vw' }}>
            <div
              className={`border border-gray-700 ${boxColors[idx % boxColors.length]} bg-opacity-90 rounded-xl p-6 flex flex-col items-center justify-between w-80 h-80 mx-auto shadow-lg`}
            >
              <p className="text-white font-light mb-6 text-center">{item.review}</p>
              <div className="flex gap-3 items-center mb-4">
                <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-white/80 md:text-base text-sm font-light">{item.position}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Clients;
