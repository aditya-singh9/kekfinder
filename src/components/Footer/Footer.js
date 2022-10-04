import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-muted">
            <span className="ml-4 h5 mb-0 font-weight-bold">KekFinder</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; KekFinder, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          {/* <CDBBtn flat color="success" className="p-2">
            <CDBIcon fab icon="whatsapp" />
          </CDBBtn>
          <CDBBtn flat color="primary" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn> */}
          <CDBBtn flat color="dark" href="https://github.com/aditya-singh9/kekfinder" className="p-2">
            <CDBIcon fab icon="github" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;