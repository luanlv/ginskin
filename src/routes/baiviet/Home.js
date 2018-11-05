/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../../components/Partials/Header'
import Main4 from '../../components/Partials/Main4'
import Aside from '../../components/Partials/Aside'
import Footer from '../../components/Partials/Footer'
import MenuMobile from '../../components/Partials/MenuMobile'

class Home extends React.Component {

  render() {
    return (
      <div>
  <div className="block_bannerhome">
    <div className="container">
      <a href><img src="/images/banner_cap2.png" alt /></a>
    </div>
  </div>
  {/* Block bệnh */}
  <div className="block_benh">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 news-block__item">
          <div className="news-block__item__img">
            <a href="#"><img src="/images/img_tin1.png" alt /></a>
            <div className="news-block_vall">
              <a href>Xem ngay</a>
            </div>
            <div className="news-block__inner__txt">
              <h5><a href="#">Tình trạng sức khỏe tim mạch người Việt - Những con số đáng báo động</a></h5>
            </div>
            <div className="news-block_title">
              <a href>Bệnh ngoài da</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 news-block__item">
          <div className="news-block__item__img">
            <a href="#"><img src="/images/img_tin1.png" alt /></a>
            <div className="news-block_vall">
              <a href>Xem ngay</a>
            </div>
            <div className="news-block__inner__txt">
              <h5><a href="#">Tình trạng sức khỏe tim mạch người Việt - Những con số đáng báo động</a></h5>
            </div>
            <div className="news-block_title">
              <a href>Bệnh ngoài da</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 news-block__item">
          <div className="news-block__item__img">
            <a href="#"><img src="/images/img_tin1.png" alt /></a>
            <div className="news-block_vall">
              <a href>Xem ngay</a>
            </div>
            <div className="news-block__inner__txt">
              <h5><a href="#">Tình trạng sức khỏe tim mạch người Việt - Những con số đáng báo động</a></h5>
            </div>
            <div className="news-block_title">
              <a href>Bệnh ngoài da</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Main chi tiet */}
  <div className="nd_chitiet w_100">
    <div className="container">
      <div className="col-md-8 col-xs-12">
        <h1>Trị nám da bằng cà chua</h1>
        <div className="tt_ndchitiet">
          <ul>
            <li><i className="fa fa-clock-o" />22/12/2017</li>
            <li><i className="fa fa-user" />Nguyen Minh</li>
          </ul>
        </div>
        <div className="body_ndchitiet">
          Chứa nhiều licopen và các vitamin, từ lâu cà chua đã được biết đến với công dụng làm trắng da, giúp da sáng và mịn màng hơn, ngăn ngừa lão hóa, trị mụn và trị nám hiệu quả. Để trị nám, rất đơn giản, bạn chỉ cần ăn cà chua hoặc uống nước ép cà chua hàng ngày để làm đẹp da từ bên trong. <br />
          Quên không mặc áo chống nắng, đeo khẩu trang khi đi ngoài trời nắng, da của bạn bị rám nắng, bỏng rát và hình thành các vết thâm, bạn có thể sử dụng hỗn hợp nước ép cà chua dưa chuột, hoặc cà chua sữa tươi để khắc phục tình trạng này. Sử dụng hỗn hợp này hàng ngày sẽ giúp vụng da bị cháy nắng của bạn dịu đi, đồng thời giúp giảm nguy cơ bị nám da cho bạn.<br />
          T biệt nó được coi là “thần dược” từ thiên nhiên trong việc chữa nám và khô cho da. Muốn có một làn da trắng mịn màng và không vết thâm, hãy sử dụng mặt nạ đào và sữa chua thường xuyên để đạt được mong ước đó.<br />
          <p className="text-center"><img src="/images/anh_chitiet.png" alt /></p>
          Chứa nhiều licopen và các vitamin, từ lâu cà chua đã được biết đến với công dụng làm trắng da, giúp da sáng và mịn màng hơn, ngăn ngừa lão hóa, trị mụn và trị nám hiệu quả. Để trị nám, rất đơn giản, bạn chỉ cần ăn cà chua hoặc uống nước ép cà chua hàng ngày để làm đẹp da từ bên trong. <br />
          Quên không mặc áo chống nắng, đeo khẩu trang khi đi ngoài trời nắng, da của bạn bị rám nắng, bỏng rát và hình thành các vết thâm, bạn có thể sử dụng hỗn hợp nước ép cà chua dưa chuột, hoặc cà chua sữa tươi để khắc phục tình trạng này. Sử dụng hỗn hợp này hàng ngày sẽ giúp vụng da bị cháy nắng của bạn dịu đi, đồng thời giúp giảm nguy cơ bị nám da cho bạn.<br />
          T biệt nó được coi là “thần dược” từ thiên nhiên trong việc chữa nám và khô cho da. Muốn có một làn da trắng mịn màng và không vết thâm, hãy sử dụng mặt nạ đào và sữa chua thường xuyên để đạt được mong ước đó.<br />
        </div>
      </div>
      <div className="col-md-4 col-xs-12 bl_ndchitiet_right">
        <div className="bai_newest">
          <h3 className="text-uppercase block_title_left w_100 text-left">Bài mới nhất</h3>
          <ul>
            <li><a href>Trị nám với hoa quả</a></li>
            <li><a href>Cách trị nám với cà chua</a></li>
            <li><a href>Trị nám với hoa quả</a></li>
          </ul>
        </div>
        <div className="bai_good">
          <h3 className="text-uppercase block_title_left w_100 text-left">Bài hay nhất</h3>
          <ul>
            <li><a href>Trị nám với hoa quả</a></li>
            <li><a href>Cách trị nám với cà chua</a></li>
            <li><a href>Trị nám với hoa quả</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Block bài liên quan */}
  <div className="block_bailq w_100">
    <div className="container">
      <h3 className="text-uppercase block_title_left w_100 text-left">Bài liên quan</h3>
      <div className="ds_bai">
        <div className="row">
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="#"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="#">110 cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="#"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="#">110 cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="#"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="#">110 cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="#"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="#">110 cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Block tất cả các câu hỏi */}
  <div className="block_asque_tg w_100">
    <div className="container">
      <h3 className="text-uppercase block_title_left w_100 text-left">Tất cả các câu hỏi</h3>
      <div className="all_cauhoi">
        <ul>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>110 cách trị nám với hoa quả tại nhà tốt nhất</a></li>
        </ul>
      </div>
      <div className="viewall_cauhoi text-center w_100">
        <a href>Xem thêm</a>
      </div>
    </div>
  </div>
  {/* Block Tư vấn ngay */}
  <h3 className="text-uppercase block_title text-center w_100">Tư vấn ngay</h3>
  <div className="block_dathang block_guich w_100">
    <div className="container">
      <div className="col-md-12 col-xs-12">
        <form className="form_dathang">
          <div className="form_left col-md-6 col-sm-12 col-xs-12">
            <div className="col-md-12 col-sm-12 col-xs-12 f_item no-gutter">
              <input type="text" className="form-control" placeholder="Họ và Tên" />
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 f_item no-gutter">
              <input type="text" className="form-control" placeholder="Số điện thoại" />
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 f_item no-gutter">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="form_right col-md-6 col-sm-12 col-xs-12">
            <div className="col-md-12 col-sm-12 col-xs-12 f_item no-gutter">
              <input type="text" className="form-control" placeholder="Tiêu đề" />
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 f_item no-gutter">
              <textarea rows={4} height={180} className="form-control" defaultValue={""} />
            </div>
          </div>
        </form>
        <div className="col-md-12 text-center col-sm-12 col-xs-12 f_item">
          <button className="btn_guichngay">Nhận tư vấn ngay</button>
        </div>
      </div>
    </div>
  </div>

</div>

    );
  }
}

export default Home
