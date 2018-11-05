import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../../components/Partials/Header'
import Main from '../../components/Partials/Main'
import Aside from '../../components/Partials/Aside'
import Footer from '../../components/Partials/Footer'
import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link'
// import IronImage from 'react-image-lazy-load-component';
import ProgressiveImage from 'react-progressive-image';

class Home extends React.Component {

  componentDidMount(){
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);
  }

  render() {
    return (
      <div>
      {/* Block banner home */}
      <div className="block_bannerhome">
        <div className="container">
          <a href="#"><img src="images/banner_home.png" alt /></a>
        </div>
      </div>
      {/* Block cách trị nám */}
      <div className="block_cachtrinam">
        <div className="container">
          <ul>
            <li>
              <div className="img_trinam">
                <img src="images/trinam_1.png" />
                <div className="timhieu_trinam">
                  <div className="title_trinam"><a href="#">CÁCH TRỊ NÁM</a></div>
                  <div className="lead_trinam">Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen </div>
                </div>
                <div className="vm_trinam"><a href="$">Tìm hiểu</a></div>
              </div>
            </li>
            <li>
              <div className="img_trinam">
                <img src="images/trinam_2.png" />
                <div className="timhieu_trinam">
                  <div className="title_trinam"><a href="#">CÁCH TRỊ TÀN NHAN</a></div>
                  <div className="lead_trinam">Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen </div>
                </div>
                <div className="vm_trinam"><a href="$">Tìm hiểu</a></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Block hỏi đáp chuyên gia */}
      <div className="block_hoidap">
        <div className="container">
          <h3 className="text-uppercase block_title text-center w_100">Hỏi đáp chuyên gia</h3>
          <div className="ds_hoidap">
            <ul>
              <li>
                <div className="show_hd">
                  <img src="images/sh_hoidap.png" alt />
                  <div className="title_hd"><a href="#">Cách trị nám</a></div>
                  <div className="hover_hd">
                    <div className="title_hover_hd"><a href="#">Cách trị nám</a></div>
                    <div className="lead_hover_hd"><a href="#">Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                    <div className="viewall_hover_hd text-right"><a href="#">Xem thêm</a></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="show_hd">
                  <img src="images/sh_hoidap.png" alt />
                  <div className="title_hd"><a href="#">Cách trị nám</a></div>
                  <div className="hover_hd">
                    <div className="title_hover_hd"><a href="#">Cách trị nám</a></div>
                    <div className="lead_hover_hd"><a href="#">Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                    <div className="viewall_hover_hd text-right"><a href="#">Xem thêm</a></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="show_hd">
                  <img src="images/sh_hoidap.png" alt />
                  <div className="title_hd"><a href="#">Cách trị nám</a></div>
                  <div className="hover_hd">
                    <div className="title_hover_hd"><a href="#">Cách trị nám</a></div>
                    <div className="lead_hover_hd"><a href="#">Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                    <div className="viewall_hover_hd text-right"><a href="#">Xem thêm</a></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="show_hd">
                  <img src="images/sh_hoidap.png" alt />
                  <div className="title_hd"><a href="#">Cách trị nám</a></div>
                  <div className="hover_hd">
                    <div className="title_hover_hd"><a href="#">Cách trị nám</a></div>
                    <div className="lead_hover_hd"><a href="#">Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                    <div className="viewall_hover_hd text-right"><a href="#">Xem thêm</a></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Block người dùng chia sẻ */}
      <div className="block_ndchiase">
        <div className="container">
          <h3 className="text-uppercase block_title text-center w_100">Người dùng chia sẻ</h3>
          <div className="nguoi_chiase">             
            <ul>
              <li>
                <div className="ava_nguoidung">
                  <img src="images/img_tin.png" alt />
                </div>
                <div className="name_nd text-center">
                  Chị Đinh Thị Thu<br />
                  <span>Hà Nội – 32 tuổi</span>
                </div>
                <div className="lead_nd">
                  <span>Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.</span>
                </div>
              </li>
              <li>
                <div className="ava_nguoidung">
                  <img src="images/img_tin.png" alt />
                </div>
                <div className="name_nd text-center">
                  Chị Đinh Thị Thu<br />
                  <span>Hà Nội – 32 tuổi</span>
                </div>
                <div className="lead_nd">
                  <span>Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.</span>
                </div>
              </li>
              <li>
                <div className="ava_nguoidung">
                  <img src="images/img_tin.png" alt />
                </div>
                <div className="name_nd text-center">
                  Chị Đinh Thị Thu<br />
                  <span>Hà Nội – 32 tuổi</span>
                </div>
                <div className="lead_nd">
                  <span>Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen Chống Oxy hóa mạnh gấp 100 lần Vitamin E.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Block Đặt hàng */}
      <h3 className="text-uppercase block_title text-center w_100">Đặt hàng</h3>
      <div className="block_dathang">
        <div className="container">
          <div className="text_giamgia">
            Đặt hàng ngay<br />
            <strong>ĐỂ ĐƯỢC GIẢM</strong><br />
            <span>350.000 <b>đ</b></span>
          </div>
          <div className="giatri_giam">
            <div className="percent_giam">11.4%</div>
            <div className="tien_giam">350.000 <b>đ</b></div>
          </div>
          <div id="clockdiv" className="clockdiv col-lg-12 col-md-12 col-sm-6 no-gutter">
            <label>Còn lại: </label>
            <div style={{display: 'none'}}>
              <span className="days">14</span>
              <div className="smalltext">Ngày</div>
            </div>
            <div>
              <span className="hours">23</span>
              <div className="smalltext">Giờ</div>
            </div>
            <div>
              <span className="minutes">59</span>
              <div className="smalltext">Phút</div>
            </div>
            <div>
              <span className="seconds">37</span>
              <div className="smalltext">Giây</div>
            </div>
          </div>
          <div className="col-md-12 col-xs-12">
            <form className="form_dathang">
              <div className="col-md-6 col-sm-12 col-xs-12 f_item">
                <input type="text" className="form-control" placeholder="Họ và Tên" />
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 f_item">
                <input type="text" className="form-control" placeholder="Địa chỉ giao hàng" />
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 f_item">
                <input type="text" className="form-control" placeholder="Số điện thoại" />
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 f_item">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 f_item">
                <select className="form-control">
                  <option value={1}>Sản phẩm</option>
                  <option value={2}>2</option>
                </select>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 f_item">
                <select className="form-control">
                  <option value={1}>Số lượng</option>
                  <option value={2}>2</option>
                </select>
              </div>
              <div className="tongtien">
                <label className="pull-right">Tổng tiền</label>
                <span className="total_money pull-right">750.000 <b>đ</b></span>
              </div>
            </form>
            <div className="col-md-12 text-center col-sm-12 col-xs-12 f_item">
              <button className="btn_dhngay">Đặt hàng ngay</button>
            </div>
          </div>
          <div className="hinhanh_sp">
            <img src="images/hinhanh_sp.png" alt />
          </div>
          <div className="icon_th">
            <img src="images/icon_th.png" alt />
          </div>
        </div>
      </div>
      {/* Block các sản phẩm Ginic */}
      <div className="block_spginic">
        <div className="container text-center">
          <h3 className="text-uppercase block_title text-center col-md-12 col-xs-12">Các sản phẩm ginic</h3>
          <div className="sp_ginic">             
            <ul>
              <li><a href="#"><img src="images/kh_1.png" alt /></a></li>
              <li><a href="#"><img src="images/kh_2.png" alt /></a></li>
              <li><a href="#"><img src="images/kh_3.png" alt /></a></li>
              <li><a href="#"><img src="images/kh_4.png" alt /></a></li>
              <li><a href="#"><img src="images/kh_5.png" alt /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>    
  );
  }
}

export default Home
