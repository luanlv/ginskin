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
      {/* Block Đặt hàng */}
      <br />
      <h2 className="text-uppercase block_title text-center w_100">THÔNG TIN CÔNG TY</h2>
      <br/>
      <h3 style={{textAlign: 'center', fontWeight: 'bolder'}}>CÔNG TY CỔ PHẦN DƯỢC PHẨM GINIC</h3>
      <p style={{textAlign: 'center', fontWeight: 'bolder'}}>Số 13, Liền kề 10, KĐT Văn Phú P.Phú La, Q.Hà Đông</p>
      <p style={{textAlign: 'center', fontWeight: 'bolder'}}>ĐT: 0965916288</p>
      <p style={{textAlign: 'center', fontWeight: 'bolder'}}>GPĐKKD: 0106719468 - Cấp ngày 03 tháng 04 năm 2015</p>

      <div className="block_dathang" style={{marginTop: 50}}>
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
              {/* <div className="col-md-6 col-sm-12 col-xs-12 f_item">
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
              </div> */}
              {/* <div className="tongtien">
                <label className="pull-right">Tổng tiền</label>
                <span className="total_money pull-right">750.000 <b>đ</b></span>
              </div> */}
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

    </div>    
  );
  }
}

export default Home
