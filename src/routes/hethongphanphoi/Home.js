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
      {/* Block Đặt hàng */}
      <div style={{textAlign: 'center', marginTop: 100}}>
        <div
        style={{
          display: 'inline-block',
          width: 100,
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.41 17.36"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#98259E;fill-rule:evenodd;}" }} /></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path className="cls-1" d="M11.87,11.91H6c-.29,0-.39-.12-.39-.41V9.74c0-.15,0-.2-.2-.2q-1.61,0-3.21,0a.78.78,0,0,1-.78-1A.76.76,0,0,1,2.16,8H5.39c.07,0,.18,0,.19-.11s0-.2-.17-.2H3.83a.77.77,0,0,1-.75-.6.79.79,0,0,1,.41-.91.89.89,0,0,1,.36-.07H5.4c.11,0,.18,0,.18-.15s-.07-.15-.18-.15H.83A.75.75,0,0,1,0,5.12a.76.76,0,0,1,.76-.93c1.5,0,3,0,4.51,0a.86.86,0,0,1,.16,0c.09,0,.13,0,.13-.14s0-.18-.12-.18H2.75a.81.81,0,0,1-.58-.17A.8.8,0,0,1,2,2.79a.71.71,0,0,1,.73-.49H5.35c.23,0,.23,0,.23-.23v-1a1,1,0,0,1,.94-1A3.59,3.59,0,0,1,7,0h9.9a2.16,2.16,0,0,1,.51.06,1,1,0,0,1,.75,1V11.51c0,.26-.09.36-.34.4H11.87Zm-6-7.41H.8a.46.46,0,0,0-.46.64c.07.22.23.31.53.31H11a.45.45,0,0,0,.41-.38.46.46,0,0,0-.5-.57ZM8.93,7.34H14a.46.46,0,0,0,.44-.59c-.05-.25-.21-.36-.51-.36H3.8a.45.45,0,0,0-.42.55c.05.28.21.4.53.4ZM7.78,2.61H2.69A.43.43,0,0,0,2.21,3a.46.46,0,0,0,.38.51H12.85a.47.47,0,0,0,.48-.5.46.46,0,0,0-.51-.45C11.14,2.62,9.46,2.61,7.78,2.61ZM7.25,8.27H2.17a.46.46,0,0,0-.43.23.49.49,0,0,0,0,.52.47.47,0,0,0,.45.21H12.39a.48.48,0,0,0-.1-1Z" /><path className="cls-1" d="M13.84,13H19c.24,0,.24,0,.24-.24v-.1c0-3.16,0-6.31,0-9.47,0-.12,0-.24,0-.36a.65.65,0,0,1,.69-.67q1.62,0,3.24,0a2.77,2.77,0,0,1,2.41,1.27l2.09,3.1a2.94,2.94,0,0,1,.5,1.7v4.52c0,.23,0,.24.25.24l.51,0a.4.4,0,0,1,.48.43v.91a.32.32,0,0,1-.31.37,3.23,3.23,0,0,1-.53,0h-2c-.29,0-.32,0-.4-.3a2.78,2.78,0,0,0-2.3-2.15,2.88,2.88,0,0,0-3.33,2.19c-.06.22-.1.26-.33.26H15c-.23,0-.28,0-.33-.24a2.65,2.65,0,0,0-.81-1.42A.1.1,0,0,1,13.84,13Zm9.52-5.76c.69,0,1.37,0,2.06,0a.46.46,0,0,0,.46-.23c.11-.19,0-.34-.1-.48-.5-.72-1-1.44-1.51-2.17a.75.75,0,0,0-.66-.34H21.42a1.33,1.33,0,0,0-.28,0c-.23,0-.34.1-.35.33,0,.81,0,1.62,0,2.43,0,.32.16.42.49.42Z" /><path className="cls-1" d="M23.35,13a2.17,2.17,0,1,1-2.17,2.16A2.15,2.15,0,0,1,23.35,13Zm-1.12,2.16a1.09,1.09,0,0,0,1.1,1.11,1.11,1.11,0,1,0,0-2.22A1.08,1.08,0,0,0,22.23,15.19Z" /><path className="cls-1" d="M14,15.2A2.17,2.17,0,1,1,11.86,13,2.16,2.16,0,0,1,14,15.2Zm-2.16,1.1A1.1,1.1,0,0,0,13,15.18a1.11,1.11,0,1,0-1.11,1.12Z" /><path className="cls-1" d="M9.86,13l-.25.29A2.78,2.78,0,0,0,9,14.62c0,.12-.09.14-.2.14l-1.58,0-1.9,0H5.14c-.4-.07-.44-.15-.43-.49s0-.59,0-.88A.31.31,0,0,1,5,13l.24,0,4.49,0Z" /><path className="cls-1" d="M22.23,15.19a1.08,1.08,0,0,1,1.12-1.11,1.11,1.11,0,1,1,0,2.22A1.09,1.09,0,0,1,22.23,15.19Z" /><path className="cls-1" d="M11.85,16.3a1.09,1.09,0,0,1-1.11-1.12,1.11,1.11,0,0,1,2.22,0A1.1,1.1,0,0,1,11.85,16.3Z" /></g></g></svg>
        </div>
      </div>
        <h3 style={{textAlign: 'center'}}>Đang cập nhập ...</h3>
        <br />
        <br />
      <div>

      </div>

      {/* <div className="col-sm-7">
        <h2 className="text-uppercase block_title text-center w_100">THÔNG TIN CÔNG TY</h2>
        <h3 style={{textAlign: 'center', fontWeight: 'bolder'}}>CÔNG TY CỔ PHẦN DƯỢC PHẨM GINIC</h3>
        <p style={{textAlign: 'center', fontWeight: 'bolder'}}>Số 13, Liền kề 10, KĐT Văn Phú P.Phú La, Q.Hà Đông</p>
        <p style={{textAlign: 'center', fontWeight: 'bolder'}}>ĐT: 0965916288</p>
        <p style={{textAlign: 'center', fontWeight: 'bolder'}}>GPĐKKD: 0106719468 - Cấp ngày 03 tháng 04 năm 2015</p>
      </div> */}
      {/* <div className="col-sm-5">
      <div className="block_dathang" style={{marginTop: 50}}>
        <div className="container">
          <div className="col-md-12 col-xs-12">
            <form className="" style={{width: '50%'}}>
              <div className="f_item" style={{width: '100%'}}>
                <input type="text" className="form-control" placeholder="Địa chỉ giao hàng" />
              </div>
   
            </form>
            <div className="text-center f_item">
              <button className="btn_dhngay">Tìm kiếm ngay</button>
            </div>
          </div>
  
        </div>
      </div>
      </div> */}

    </div>    
  );
  }
}

export default Home
