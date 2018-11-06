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
              <h5><a href="#">Chống Oxi hoá mạnh gấp 100 lần Vinamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></h5>
            </div>
            <div className="news-block_title">
              <a href>CÁCH TRỊ NÁM TẠI NHÀ</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 news-block__item">
          <div className="news-block__item__img">
            <a href="#"><img src="/images/anh_chitiet.png" alt style={{maxHeight: 174}} /></a>
            <div className="news-block_vall">
              <a href>Xem ngay</a>
            </div>
            <div className="news-block__inner__txt">
              <h5><a href="#">Chống Oxi hoá mạnh gấp 100 lần Vinamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></h5>
            </div>
            <div className="news-block_title">
              <a href>CÁCH TRỊ NÁM TỪ THIÊN NHIÊN</a>
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
              <h5><a href="#">Chống Oxi hoá mạnh gấp 100 lần Vinamin E. Giúp bảo vệ tiến trình tái tạo collagen</a></h5>
            </div>
            <div className="news-block_title">
              <a href>CÁCH TRỊ NÁM HIỆU QUẢ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Main chi tiet */}
  <div className="nd_chitiet w_100">
    <div className="container">
      <div className="col-md-12 col-xs-12">
        <h1>Cách trị tàn nhang</h1>
        <div className="tt_ndchitiet">
          <ul>
            <li><i className="fa fa-clock-o" />22/12/2017</li>
            <li><i className="fa fa-user" />Admin</li>
          </ul>
        </div>
        <div className="body_ndchitiet">
          <p><b>Nám da không chỉ ảnh hưởng đến thẩm mỹ mà còn khiến phái đẹp cảm thấy thiếu tự tin. Nắm được nguyên nhân gây nám sẽ giúp bạn điều trị hiệu quả, nhanh chóng.</b></p>
          <br/>
          <p>Nám da thường thấy ở phụ nữ ngoài 30 tuổi. Vậy nguyên nhân gây nám da là gì và chúng ta cần bảo vệ da như thế nào?</p>
          <br/>
          <h2>Nguyên nhân gây tàn nhang</h2>
          <br/>
          Theo các nghiên cứu khoa học, khoảng 20-70% người bị nám da có yếu tố di truyền. Bởi vậy, nếu trong gia đình có người bị nám da thì khả năng bạn bị nám sẽ cao hơn những người khác.
          <br/><br/>
          Nám da có thể xảy ra do sự thay đổi của nội tiết tố bên trong cơ thể khi mang thai, rối loạn kinh nguyệt, đặc biệt là sau tuổi 30. Bên cạnh đó, trong giai đoạn tiền mãn kinh, mãn kinh, các hắc tố melanin tăng cao do sự suy giảm, rối loạn của nội tiết tố Estrogen và Progesterone cũng là nguyên nhân gây ra hiện tượng này.
          <br /><br/>
          Ngoài ra, một số loại thuốc cũng có tác dụng phụ gây nám da, sạm da như: thuốc tránh thai, thuốc chữa loạn thần clopromazin và thuốc chữa dị ứng phenothiazin, các loại thuốc nhóm kháng sinh cyclin…
          <br /><br/>
          Một lý do khác gây ra nám da đó là sự lạm dụng các loại mỹ phẩm không đảm bảo chất lượng. Rất nhiều phụ nữ có thói quen sử dụng các loại mỹ phẩm, kem trộn được bán trôi nổi trên thị trường với nguồn gốc, xuất sứ không rõ ràng. Các sản phẩm này khi mới dùng sẽ thấy da mờ nám và trắng lên nhanh chóng. Nhưng đồng nghĩa với điều đó là da bị bào mòn và trở nên yếu ớt khi tiếp xúc với ánh nắng, khói bụi. Điều này tạo điều kiện thuận lợi cho sự hình thành nám da, đặc biệt ở vùng mặt.
          <br /><br/>
          Ngoài ra, khi liên tục gặp phải những áp lực và căng thẳng sẽ gây các vấn đề về nám da, mụn, lão hóa… Đặc biệt, khi stress gia tăng, chế độ ăn uống mất cân bằng, thiếu nước, uống bia rượu, thuốc lá, nghỉ ngơi sinh hoạt không hợp lý thì những mảng nám sẽ phát triển mạnh mẽ hơn.
          <br /><br/>
          Dưới tác động của các tia UV trong ánh nắng mặt trời, làn da có khả năng bị nám và tối màu hơn. Không chỉ khiến nám da nặng hơn, tia UV còn gia tăng hình thành các vết nám mới và nếp nhăn trên da, khiến da thô ráp, mẫn cảm hơn.
          <br/>
          <h2>Phòng ngừa và điều trị nám</h2>
          <br/>
          Việc cung cấp đầy đủ vitamin cần thiết cho cơ thể như A, C, E, B12; uống nhiều nước, tránh thức ăn cay nóng, các loại rượu, bia… sẽ giúp bạn bù đắp cho cơ thể một lượng chất nhất định, tái tạo da và ngăn ngừa sự biến đổi, rối loạn của các hormone, làm giảm nguy cơ xuất hiện nám.
          <br /><br/>
          Bạn không nên lạm dụng mỹ phẩm, đặc biệt là những mỹ phẩm tẩy trắng có chứa thành phần gây teo da như thủy ngân hoặc gây kích ứng viêm da như corticoid. Tránh căng thẳng, lo lắng, thức đêm và sử dụng kem chống nắng cũng là cách phòng ngừa nám hiệu quả.
          <br /><br/>
          Tuy nhiên, khi đã bị nám, việc áp dụng những cách thức trên sẽ chỉ giúp bạn chống nám da phát triển và lây lan. Nếu đã xuất hiện những đốm nâu trên mặt, bạn nên tìm đến các trung tâm điều trị về da để được tư vấn và có liệu pháp điều trị tốt nhất.
          <br /><br/>
          Tại trung tâm chống lão hóa Xuân Hùng, khách hàng sẽ được thăm khám và tìm ra nguyên nhân gây bệnh, điều trị nám bằng công nghệ cao Laser Q-Switched với những bước sóng ánh sáng đặc trị và thời gian xung (thời gian phát bước sóng phù hợp). Đây là một trong những cách điều trị nám da hiệu quả và an toàn nhất hiện nay.
          <br /><br/>
          Tùy thuộc vào từng cấp độ nám, mỗi người sẽ có cách điều trị khác nhau, bước sóng khác nhau. Nhưng việc sử dụng công nghệ sẽ giúp đánh bật các vết nám, kích thích collagen giúp phát triển và tái tạo da, làm cho làn da bạn sáng hồng hào, mịn màng hơn…
        </div>
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
