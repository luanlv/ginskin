import React from 'react'
import Link from '../Link'
import FacebookProvider, { Page } from 'react-facebook';

class Footer extends React.Component {
  render () {
    // let info = (((this.props.data || {}).info) || {}).value
    // let menuBottom = JSON.parse(info.menuBottom)
    return (
      <div className="footer">
        <div className="container">
          <div className="block_footer_top">
            <div className="block_taiungdung pull-left">
              <div className="logo_footer">
                <a href="#"><img src="images/logo_footer.png" alt /></a>
              </div>
              <ul className="social_footer">
                <li><a href="#"><img src="images/social_facebook.png" alt /></a></li>
                <li><a href="#"><img src="images/social_email.png" alt /></a></li>
                <li><a href="#"><img src="images/social_youtube.png" alt /></a></li>
                <li><a href="#"><img src="images/social_gplus.png" alt /></a></li>
              </ul>
            </div>
            <div className="menu_footer pull-right">
              <div className="block_footer">
                <h3>Chính sách</h3>
                <ul>
                  <li><a href="#">Chính sách thanh toán</a></li>
                  <li><a href="#">Chính sách đổi trả</a></li>
                  <li><a href="#">Chính sách vận chuyển</a></li>
                  <li><a href="#">Chính sách đại lý</a></li>
                  <li><a href="#">Chính sách bảo mật</a></li>
                  <li><a href="#">Quy trình xử lý khiếu nại</a></li>
                </ul>
              </div>
              <div className="block_footer">
                <h3>Trụ sở</h3>
                <h4 className="text-uppercase">Hà nội</h4>
                <span>Số 13, Liền kề 10, KĐT Văn Phú</span><br />
                <span>P.Phú La, Q.Hà Đông</span><br />
                <span>ĐT: 0965916288</span><br />
                <h4 className="text-uppercase">Hồ Chí Minh</h4>
                <span>Số 161 Nguyễn Sỹ Sách</span><br />
                <span>P.15, Q.Tân Bình</span><br />
                <span>ĐT: 0965916288</span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="text-uppercase text-left pull-left col-lg-6 col-md-6 col-sm-6 col-xs-12 no-gutter">
              Công ty cổ phần dược phẩm Ginic - 2018
            </div>
            <div className="pull-right text-right col-lg-6 col-md-6 col-sm-6 col-xs-12 no-gutter">
              <a href="#">Điều khoản</a> - <a href="#">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
        <div className="chat_support">
          <a href><img src="images/support_text.png" alt /></a>
        </div>
      </div>
    )
  }
}

export {Footer as default}
