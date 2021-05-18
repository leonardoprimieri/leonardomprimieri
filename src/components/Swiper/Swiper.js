import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import './style.css';

import wave from '../../assets/svg/wave-projects.png';

SwiperCore.use([Navigation, Pagination]);

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data }) => {
  return (
    <>
      {data && (
        <Swiper id="main" navigation pagination slidesPerView={1}>
          {data.map(
            ({ id, name, description, image, techs, sold, project }) => (
              <SwiperSlide
                className="lp-main-slider"
                key={id}
                style={{ backgroundImage: `url(${wave})` }}
              >
                <div className="lm-slide__img">
                  <img
                    style={project === false ? { width: '65%' } : {}}
                    src={image}
                    alt={name}
                    className="lp-swiper-slide"
                  />
                </div>
                <div
                  className="lm-slide__info"
                  style={project === false ? { width: '100%' } : {}}
                >
                  <div className="slide-info__name">
                    <h1>{name}</h1>

                    {project ? (
                      !sold ? (
                        <span className={`${'span-study__project'}`}>
                          estudo
                        </span>
                      ) : (
                        <span className={`${'span-sold__project'}`}>
                          vendido
                        </span>
                      )
                    ) : (
                      ''
                    )}
                  </div>
                  <p>{description}</p>
                  {/* {project && (
                    <button className="button button-primary">
                      projeto completo | não hospedado
                    </button>
                  )} */}
                </div>
                {techs && (
                  <div className="lm-slide__techs">
                    <h2>Tecnologias utilizadas</h2>
                    {techs.map(({ name, image }, index) => (
                      <div className="tech-item" key={index}>
                        {image}
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </SwiperSlide>
            )
          )}
        </Swiper>
      )}
    </>
  );
};
