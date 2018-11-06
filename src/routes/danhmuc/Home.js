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
            <a href="/bai-viet/cach-tri-nam-tai-nha"><img src="/images/img_tin1.png" alt /></a>
            <div className="news-block_vall">
              <a href="/bai-viet/cach-tri-nam-tai-nha">Xem ngay</a>
            </div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/cach-tri-nam-tai-nha">Chống Oxi hoá mạnh gấp 100 lần Vinamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></h5>
            </div>
            <div className="news-block_title">
              <a href="/bai-viet/cach-tri-nam-tai-nha">CÁCH TRỊ NÁM TẠI NHÀ</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 news-block__item">
          <div className="news-block__item__img">
            <a href="/bai-viet/cach-tri-nam-tu-thien-nhien"><img src="/images/anh_chitiet.png" alt style={{maxHeight: 174}} /></a>
            <div className="news-block_vall">
              <a href="/bai-viet/cach-tri-nam-tu-thien-nhien">Xem ngay</a>
            </div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/cach-tri-nam-tu-thien-nhien">Chống Oxi hoá mạnh gấp 100 lần Vinamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></h5>
            </div>
            <div className="news-block_title">
              <a href="/bai-viet/cach-tri-nam-tu-thien-nhien">CÁCH TRỊ NÁM TỪ THIÊN NHIÊN</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 news-block__item">
          <div className="news-block__item__img">
            <a href="/bai-viet/cach-tri-nam-hieu-qua"><img src="/images/img_tin1.png" alt /></a>
            <div className="news-block_vall">
              <a href="/bai-viet/cach-tri-nam-hieu-qua">Xem ngay</a>
            </div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/cach-tri-nam-hieu-qua">Chống Oxi hoá mạnh gấp 100 lần Vinamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></h5>
            </div>
            <div className="news-block_title">
              <a href="/bai-viet/cach-tri-nam-hieu-qua">CÁCH TRỊ NÁM HIỆU QUẢ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Block BÀI NỔI BẬT */}
  <div className="block_bailq w_100">
    <div className="container">
      <h3 className="text-uppercase block_title_left w_100 text-left" style={{fontWeight: 'bold'}} >BÀI NỔI BẬT</h3>
      <div className="ds_bai">
        
        <div className="row">
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>

          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
        </div>
      
        <div className="row" >
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
            </div>
            <div className="news-block_lead">
              Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.
            </div>
          </div>
          <div className="col-md-3 col-sm-3 news-block__item">
            <div className="news-block__item__img"><a href="/bai-viet/demo"><img src="/images/img_tin1.png" alt /></a></div>
            <div className="news-block__inner__txt">
              <h5><a href="/bai-viet/demo">Cách trị nám với hoa quả tại nhà tốt nhất</a></h5>
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
      <h3 className="text-uppercase block_title_left w_100 text-left" style={{fontWeight: 'bold'}}>Tất cả bài viết</h3>
      <div className="all_cauhoi">
        <ul>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
          <li><a href>Cách trị nám với hoa quả tại nhà tốt nhất</a></li>
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
