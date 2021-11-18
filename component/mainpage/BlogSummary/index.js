import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./indexstyles.module.css";

import { Card, Col } from "antd";
import Image from "next/dist/client/image";
const { Meta } = Card;

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const items = [
  {
    key: "1",
    title: "Web and mobile payment built for developers",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "2",
    title: "Work better together. Schedule meetings",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    title: "The best app to increase your productivity",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "4",
    title: "Web and mobile payment built for developers",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "5",
    title: "Web and mobile payment built for developers",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "6",
    title: "Web and mobile payment built for developers",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];
const handel = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

function BlogSummary() {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      id="main"
      width="480"
      navigation
      spaceBetween={5}
      slidesPerView={1}
    >
      {items.map((item) => {
        return (
          <SwiperSlide className={styles.slide} key={item.key}>
            <Card
              hoverable
              cover={
                <img
                  alt="Modern Design"
                  src={
                    "https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp"
                  }
                />
              }
            >
              <Meta title="Modern Design" />
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default BlogSummary;
