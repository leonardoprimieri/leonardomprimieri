import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { jobs } from '../../utils/jobs';

import './style.css';

import wave from '../../assets/svg/wave-projects.png';

SwiperCore.use([Navigation, Pagination]);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Swiper id="main" navigation pagination slidesPerView={1}>
        {jobs.map(({ id, name, description, image, techs, sold }) => (
          <SwiperSlide
            className="lp-main-slider"
            key={id}
            style={{ backgroundImage: `url(${wave})` }}
          >
            <div className="lm-slide__img">
              <img src={image} alt={name} className="lp-swiper-slide" />
            </div>
            <div className="lm-slide__info">
              <div className="slide-info__name">
                <h1>{name}</h1>

                <span
                  className={`${
                    sold ? 'span-sold__project' : 'span-study__project'
                  }`}
                >
                  {sold ? 'vendido' : 'estudo'}
                </span>
              </div>
              <p>{description}</p>
              <button className="button button-primary">
                projeto completo
              </button>
            </div>
            <div className="lm-slide__techs">
              <h2>Tecnologias utilizadas</h2>
              {techs.map(({ name, image }, index) => (
                <div className="tech-item" key={index}>
                  {image}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
