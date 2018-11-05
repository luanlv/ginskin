/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import axios from 'axios';
import Link from '../../components/Link'
import Aside from '../../components/Partials/Aside'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
  
    }
  }
  render() {
    return (
      <div>
  <div className="block_bannerhome">
    <div className="container">
      <a href><img src="images/banner_cap2.png" alt /></a>
    </div>
  </div>
  {/* Block chuyên gia */}
  <div className="chuyengia_bsi">
    <div className="container">
      <ul>
        <li>
          <div className="img_bsi">
            <img src="images/cgia_bsi.png" />
            <div className="name_bsi"><span>Bs.</span>Trần Thị Thanh Nho</div>
            <div className="icon_thsm"><img src="images/icon-sm.png" alt /></div>
          </div>
          <div className="lead_bsi">
            Pycnogenol là chiết xuất chuẩn từ thông đỏ (Pháp) có hoạt tính mạnh ức chế enzym tyrosinase, chống lại sự hình thành hắc tố melanin. Các nghiên cứu in vitro cho thấy Pycnogenol mạnh gấp vài lần so với vitamin E và vitamin C. Ngoài ra, nó tái chế vitamin C, phục hồi vitamin E và tăng hệ thống enzyme chống oxy hóa nội sinh. Bảo vệ da trước bức xạ tia cực tím UV. 
          </div>
        </li>
        <li>
          <div className="img_bsi">
            <img src="images/cgia_bsi.png" />
            <div className="name_bsi"><span>Bs.</span>Trần Thị Thanh Nho</div>
            <div className="icon_thsm"><img src="images/icon-sm.png" alt /></div>
          </div>
          <div className="lead_bsi">
            Pycnogenol là chiết xuất chuẩn từ thông đỏ (Pháp) có hoạt tính mạnh ức chế enzym tyrosinase, chống lại sự hình thành hắc tố melanin. Các nghiên cứu in vitro cho thấy Pycnogenol mạnh gấp vài lần so với vitamin E và vitamin C. Ngoài ra, nó tái chế vitamin C, phục hồi vitamin E và tăng hệ thống enzyme chống oxy hóa nội sinh. Bảo vệ da trước bức xạ tia cực tím UV. 
          </div>
        </li>
      </ul>
      <div className="video_bsi">
        <ul>
          <li>
            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Ya-btLv0WG0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
          </li>
          <li>
            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Ya-btLv0WG0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
          </li>
        </ul>
      </div>
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
              <div className="title_hd"><a href>Cách trị nám</a></div>
              <div className="hover_hd">
                <div className="title_hover_hd"><a href>Cách trị nám</a></div>
                <div className="lead_hover_hd"><a href>Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                <div className="viewall_hover_hd text-right"><a href>Xem thêm</a></div>
              </div>
            </div>
          </li>
          <li>
            <div className="show_hd">
              <img src="images/sh_hoidap.png" alt />
              <div className="title_hd"><a href>Cách trị nám</a></div>
              <div className="hover_hd">
                <div className="title_hover_hd"><a href>Cách trị nám</a></div>
                <div className="lead_hover_hd"><a href>Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                <div className="viewall_hover_hd text-right"><a href>Xem thêm</a></div>
              </div>
            </div>
          </li>
          <li>
            <div className="show_hd">
              <img src="images/sh_hoidap.png" alt />
              <div className="title_hd"><a href>Cách trị nám</a></div>
              <div className="hover_hd">
                <div className="title_hover_hd"><a href>Cách trị nám</a></div>
                <div className="lead_hover_hd"><a href>Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                <div className="viewall_hover_hd text-right"><a href>Xem thêm</a></div>
              </div>
            </div>
          </li>
          <li>
            <div className="show_hd">
              <img src="images/sh_hoidap.png" alt />
              <div className="title_hd"><a href>Cách trị nám</a></div>
              <div className="hover_hd">
                <div className="title_hover_hd"><a href>Cách trị nám</a></div>
                <div className="lead_hover_hd"><a href>Chống Oxy hóa mạnh gấp 100 lần Vitamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></div>
                <div className="viewall_hover_hd text-right"><a href>Xem thêm</a></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* Block noi dung cau tra loi */}
  <div className="bl_cautraloi w_100">
    <div className="container">
      <div className="title_aw">Cách trị nám</div>
      <div className="nd_aw">
        Chiết xuất thông đỏ: Theo nghiên cứu lâm sàng khi dùng 100m/ngày trong vòng 28 ngày da sẽ sáng dần. ít đỏ hơn,  giảm nám hơn. Trong vòng 56 ngày da bớt nhăn, mịn hơn nám sẽ cải thiện rõ rệt.
        - 2 cơ chế: Hoạt chất trong vỏ cây thông đỏ tác dụng làm mờ trực tiếp, và tác dụng chống viêm. Ức chế men Tyrosin sản sinh  ra sắc tố melanin. <br />Ngoài ra có tác dụng bảo vệ, chống tia UV
        Civitol ( vitamin E thiên nhiên): Chống lại quá trình OXH hiệu quả, ngăn ngừa các tổn thương da gây ra các gốc tự do. Tăng cường phục hồi những tổn thương biểu mô và dưỡng ẩm của lớp sừng.
        Astaxanthin 5 %:  Chiết xuất từ Vi tảo lục có tác dụng Chống OXH mạnh gấp 100 lần vitamin E
        Giúp bảo vệ tiến trình tái tạo collagen và hỗ trợ đến mức tối ưu hóa QT tái tạo da, giảm nếp nhăn, tăng độ đàn hồi , bảo vệ da khỏi tác động tia UV
        Kẽm Gluconat: Giúp sản xuất Collagen. Cân bằng nội tiết tố. Hỗ trợ giảm khó ngủ, mất ngủ
        Hạt nho: Chống lại quá trình OXH hiệu quả. Ngăn ngừa sự lão hóa
        Cà chua ( lycopen, vitamin C, và khoáng chất): Chống lão hóa tăng cường miễn dịch. Bảo vệ chống lại các tổn thương về da do các bức xạ mặt trời gây ra.
        Collagen tuýp 1: Cải thiện độ ẩm, tăng đàn hồi da.
        Mầm đậu nành: Tăng tiết nội tiết tố phụ nữa, giảm thâm nám, giảm mất ngủ, kinh nguyệt đều đặn.
        Nhân sâm: tăng cường thể chất, cải thiện tâm trạng. Chống căng thẳng mệt mỏi. Nguyên liệu chiết xuất thông đỏ, cà chua  nhập khẩu ở Pháp
      </div>
      <div className="toggle_asw w_100 text-center">
        <a className="active" href>Xem thêm</a>/<a href>Rút gọn</a>
      </div>
    </div>
  </div>
  {/* Câu hỏi thường gặp */}
  <div className="block_asque_tg w_100">
    <div className="container">
      <h3 className="text-uppercase block_title w_100 text-center">Câu hỏi thường gặp</h3>
      <div className="ds_chthuonggap">
        <ul>
          <li>
            <a href>Thành phần và tác dụng của từng thành phần của Ginskin ? </a>
          </li>
          <li>
            <a href>Thành phần và tác dụng của từng thành phần của Ginskin ? </a>
          </li>
          <li>
            <a href>Thành phần và tác dụng của từng thành phần của Ginskin ? </a>
          </li>
          <li>
            <a href>Thành phần và tác dụng của từng thành phần của Ginskin ? </a>
          </li>
          <li>
            <a href>Thành phần và tác dụng của từng thành phần của Ginskin ? </a>
          </li>
          <li>
            <a href>Thành phần và tác dụng của từng thành phần của Ginskin ? </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* Block Gửi câu hỏi */}
  <h3 className="text-uppercase block_title text-center w_100">Gửi câu hỏi</h3>
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
          <button className="btn_guichngay">Gửi câu hỏi ngay</button>
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
</div>
    );
  }
}

export default Home
