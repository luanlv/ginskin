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
    
  }

  render() {
    return (
      <div>

      {/* Blockchia sẻ */}
            <div className="block_ndchiase">
              <div className="container">
                <div className="chiase" style={{padding: '0 100px'}}>
                  
                  <div className="cs_header">
                    <div className="cs_left">
                      <img src="/images/img_tin.png" />
                    </div>
                    <div className="cs_right">
                      <h2>Chị ĐINH THỊ THU</h2>
                      <hr />
                      <span>Biên tập viên - 32 tuổi</span>
                    </div>
                  </div>

                  <div className="cs_body">
                    <p>
                    Thật sự tôi cũng không tha thiết lắm nhưng nghe chồng nói bạn anh làm bác sĩ da liễu khuyên dùng sản phẩm này.” Vì Ginskin là sản phẩm đi đầu trong nước với chiết xuất thông đỏ nhập khẩu từ pháp. Sản phẩm không chỉ có tác dụng ngoài da hơn hết nó tác dụng sâu bên trong da mà khi ngừng thuốc nám không quay trở lại.”
Vì là quà chồng tặng nên tôi vẫn quyết định dùng thử. Thật không nhờ sau 7 ngày da tôi hồng hào săn chắc hơn hẳn. Vì được bạn bè khen nhiều tôi quyết định theo một liệu trình. Thật không ngờ Ginskin trị nám lại thần kỳ như vậy. Chỉ sau 4 tuần da mặt tôi đã hết nám, căng mịn, hồng hào. Tôi rất hạnh phúc và tự tin hơn hẳn. Tôi thầm cám ơn Ginskin đã đem đến cho tôi sự tự tin của người phụ nữ mà bao lâu nay tôi đã đánh mất.
                    </p>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <img  src="https://via.placeholder.com/550x350" />
                      </div>
                      <div className="col-sm-6">
                        <img src="https://via.placeholder.com/550x350" />
                      </div>
                    </div>
                  </div>

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
     
    </div>    
  );
  }
}

export default Home
