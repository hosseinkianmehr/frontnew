import React from "react";
import { Typography, Divider } from "antd";
import { Container } from "react-bootstrap";

const { Title, Paragraph, Text, Link } = Typography;

const blockContent =
  " رم افزار Trnsys یک محیط نرم افزاری مبتنی بر گرافیک است که برای شبیه سازی رفتار سیستم های گذرا استفاده می شود. در حالی که اکثریت شبیه سازی های گسترده بر روی ارزیابی عملکرد سیستم های حرارتی و انرژی الکتریکی تمرکز می کنند, TRNSYS به همان اندازه می تواند برای مدل سازی سایر سیستم های پویا مانند جریان ترافیک یا فرایندهای بیولوژیکی مورد استفا یط را گسترش دهند ";

function Abutepage() {
  return (
    <React.Fragment>
      <Container  dir="rtl">
        <Paragraph style={{ marginTop: 20 }}>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development. In the process of internal
          desktop applications development, many different design specs and
          implementations would be involved, which might cause designers and
          developers difficulties and duplication and reduce the efficiency of
          development. In the process of internal desktop applications
          development, many different design specs and implementations would be
          involved, which might cause designers and developers difficulties and
          duplication and reduce the efficiency of development.consoleIn the
          process of internal desktop applications development, many different
          design specs and implementations would be involved, which might cause
          designers and developers difficulties and duplication and reduce the
          efficiency of development.
        </Paragraph>
      </Container>
    </React.Fragment>
  );
}

export default Abutepage;
