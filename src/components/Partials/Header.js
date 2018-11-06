import React from 'react'
import Link from '../Link'

class Header extends React.Component {

  render () {
    // let info = ((this.props.data || {}).info || {}).value
    // let menu = JSON.parse(info.menu)
    return (
      <div>
          <div className="topbar fixed-top clearfix">
          <div className="head_topbar">
            <a href="#"><img src="/images/logo.png" alt /></a>
            <a className="icon_menu" href="javascript:;"><i className="fa fa-ellipsis-v" aria-hidden="true" /></a>
          </div>
          <nav className="menu_ex_mobile">
            <ul>
              <li><a href>TRANG CHỦ</a></li>
              <li className="active"><a href="/lp.html" >GINSKIN</a></li>
              <li><a href="/cach-tri-nam">CÁCH TRỊ NÁM</a></li>
              <li><a href="/cach-tri-tan-nhang">CÁCH TRỊ TÀN NHANG</a></li>
              {/* <li><a href>TƯ VẤN DA</a></li> */}
              <li><a href="/hoi-dap-chuyen-gia">HỎI ĐÁP CHUYÊN GIA</a></li>
              <li><a href="/nguoi-dung-chia-se">NGƯỜI DÙNG CHIA SẺ</a></li>
              <li><a href="/he-thong-phan-phoi">HỆ THỐNG PHÂN PHỐI</a></li>
              <li><a href="/goc-tu-van">GÓC TƯ VẤN</a></li>
              <li><a href="/lien-he">LIÊN HỆ - ĐẶT HÀNG</a></li>
            </ul>
          </nav> 
        </div>
        {/* End Menu Mobile */}
        <header className="header_top">
          <div className="container">
            <header className="header pull-left">
              <div className="header__item">
                <a href="#"className="header__item__logo"><img src="/images/logo.png" alt /></a>
              </div>
            </header>
            <div className="hotline_diachi">
              <div className="hotline pull-left">
                <label>Hotline</label><br />
                <span>1900.2056</span><br />
                <span>024.6262.7788</span>
              </div>
              <div className="diachi_top pull-right">
                <div className="bl_dctop">
                  <label>Hà Nội</label><br />
                  <span>Số 13, Liền kề 10, KĐT Văn Phú</span><br />
                  <span>P. Phú La , Q. Hà Đông</span>
                </div>
                <div className="bl_dctop">
                  <label>Hồ Chí Minh</label><br />
                  <span>Số 161 Nguyễn Sỹ Sách</span><br />
                  <span>P.15, Q. Tân Bình</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Menu Home PC */}
        <div className="menu_home">
          <div className="container">
            <div className="menu__inner">
              <a href="/" className="menu__item">TRANG CHỦ</a>
              <a href="/lp.html" className="menu__item">GINSKIN</a>
              <a href="/cach-tri-nam"className="menu__item">CÁCH TRỊ NÁM</a>
              <a href="/cach-tri-tan-nhang"className="menu__item">CÁCH TRỊ TÀN NHANG</a>
              {/* <a href="#"className="menu__item">TƯ VẤN DA</a> */}
              <a href="/hoi-dap-chuyen-gia" className="menu__item">HỎI ĐÁP CHUYÊN GIA</a>
              <a href="/nguoi-dung-chia-se"className="menu__item">NGƯỜI DÙNG CHIA SẺ</a>
              <a href="/he-thong-phan-phoi"className="menu__item">HỆ THỐNG PHÂN PHỐI</a>
              <a href="/goc-tu-van"className="menu__item">GÓC TƯ VẤN</a>
              <a href="/lien-he"className="menu__item">LIÊN HỆ - ĐẶT HÀNG</a>
            </div>
            <div className="search">
              <a href="javascript:;" className="search__img"><img src="/images/icon_tk.png" alt /></a>
              <div className="search_bar">
                <form action method="post">
                  <input placeholder="Viết gì đó" type="text" defaultValue /> 
                  <button className="btn_search_m"><i className="fa fa-search" /></button>
                </form>
              </div>
            </div>
            <div className="cart">
              <a href="#"className="cart__img"><img src="/images/icon_cart.png" alt /></a>
            </div>
          </div>
        </div>
      </div>
     )
  }
}

export {Header as default}
