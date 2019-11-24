import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Input, Button , Col, Row} from "antd";

export default class Login extends React.Component {
  render() {
    return (
      <div className="video mt-2">
        <Row>
          <Col md={10} xs={24} lg={10}>
            <iframe
              width="100%"
              height="315px"
              src="https://www.youtube.com/embed/pUg4KaZ3BEg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
          <Col md={14} xs={24} lg={14} className="video-detail">
            <p className="text-primary ml-3 font-weight-bold">
              Những Bản Hit Cover Triệu Views Làm Mưa Làm Gió 2019
            </p>
            <p className="ml-3">Share by phanlequang@gmail.com</p>
            <div className=" ml-3 video-reaction">
              <div className="mt-2 font-weight-bold"> 132</div>
              <Icon
                style={{
                  fontSize: 30,
                  marginLeft: 6
                }}
                type="like"
              />
              <div className=" ml-3 mt-2 font-weight-bold"> 132</div>
              <Icon
                style={{
                  fontSize: 30,
                  marginLeft: 6
                }}
                theme="filled"
                type="like"
              />
            </div>
            <p className="ml-3">
              <b>Descriptipn : </b>
              Pinned by TaLaGio TaLaGio 3 days ago Một năm 2019 gần qua đi với
              biết bao nhiêu bản HIT. Dưới đây là 1 playlist tổng hợp những bản
              hit cover triệu views đã làm mưa làm gió trong suốt thời gian qua.
              Kính mời mọi người cùng nghe thử. ^^ Ai cần file MP3 không có
              quảng cáo thì hãy comment để lại email, mình sẽ gửi cho các bạn
              trong thời gian sớm nhất.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
