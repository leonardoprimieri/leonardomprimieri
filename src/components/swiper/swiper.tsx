import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import "./style.css";
import { JobsModel } from "@/models/jobs-model";

SwiperCore.use([Navigation, Pagination]);

type Props = {
  data: JobsModel[];
};

const Swiper = ({ data }: Props) => {
  return (
    <>
      {Boolean(data) && (
        <SwiperContainer id='main' navigation pagination slidesPerView={1}>
          {data.map(({ id, name, description, image, techs, project }) => (
            <SwiperSlide
              className='lp-main-slider'
              key={id}
              style={{ background: "url(/images/svg/wave-projects.png)" }}
            >
              <div className='lm-slide__img'>
                <img
                  style={!project ? { width: "65%" } : {}}
                  src={image}
                  alt={name}
                  className='lp-swiper-slide'
                />
              </div>
              <div className='lm-slide__info' style={!project ? { width: "100%" } : {}}>
                <div className='slide-info__name'>
                  <h1>{name}</h1>

                  {Boolean(project) ? (
                    <span className={`${"span-study__project"}`}>estudo</span>
                  ) : (
                    ""
                  )}
                </div>
                <p>{description}</p>
              </div>
              {Boolean(techs) && (
                <div className='lm-slide__techs'>
                  <h2>Tecnologias utilizadas</h2>
                  <div className='lm-slide__techs_container'>
                    {techs.map(({ name, icon }, index) => (
                      <div className='tech-item' key={index}>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </SwiperContainer>
      )}
    </>
  );
};

export default Swiper;
