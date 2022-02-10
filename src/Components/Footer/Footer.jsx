import React from "react";
import { Envelope, Facebook, Geo, Google, Telephone, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {

  const footerStyles={
    mainDiv:'bg-gray-900 p-3 md:p-8',
    gridDiv:'md:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',
    title:'text-3xl font-bold text-white',
    shortDes:'text-lg font-semibold text-white my-8 w-3/4',
    listHead:'text-2xl font-semibold text-white',
    listItem:'font-medium my-3 text-gray-400 hover:text-red-400 hover:ml-2 ease-linear duration-200 cursor-pointer w-fit',
    contactItem: 'flex items-center my-3',
    contactIcon:'bg-red-700 p-3 rounded-full mr-2 text-white',
    contactMethod:'text-gray-400 text-base font-medium mb-1',
    contactInfo:'text-lg font-bold text-white cursor-pointer',
    bottomMain:'bg-black text-white md:mx-14 mt-8 flex flex-col-reverse justify-center md:flex-row md:justify-between items-center p-7',
    copyright:'my-3 md:my-0 text-gray-400 text-base font-medium',
    name:'text-red-600 cursor-pointer',
    socialMain:'flex items-center',
    socialIcon:'text-2xl mx-4 hover:text-red-400 cursor-pointer'
  }
  
  return (
    <div className={footerStyles.mainDiv}>
      <div className={footerStyles.gridDiv}>

      <div>
        <h1 className={footerStyles.title}>XcitEducation</h1>
        <p className={footerStyles.shortDes}>Sed ut perspiciatis unde omn iste natus error sit voluptatem</p>
      </div>

      <div>
        <h3 className={footerStyles.listHead}>Our Projects</h3>
        <h5 className={footerStyles.listItem}>Medical & Health</h5>
        <h5 className={footerStyles.listItem}>Educations</h5>
        <h5 className={footerStyles.listItem}>Technology</h5>
        <h5 className={footerStyles.listItem}>Web Development</h5>
        <h5 className={footerStyles.listItem}>Food & Clothes</h5>
      </div>

      <div>
        <h3 className={footerStyles.listHead}>Support</h3>
        <h5 className={footerStyles.listItem}>Privacy Policy</h5>
        <h5 className={footerStyles.listItem}>Conditions</h5>
        <h5 className={footerStyles.listItem}>Company</h5>
        <h5 className={footerStyles.listItem}>Faq & Terms</h5>
        <h5 className={footerStyles.listItem}>Contact Us</h5>
      </div>

      <div>
        <h3 className={footerStyles.listHead}>Contact Us</h3>

        <div className={footerStyles.contactItem}>
          <div className={footerStyles.contactIcon}><Telephone/></div>
          <div>
            <p className={footerStyles.contactMethod}>Phone Number</p>
            <p className={footerStyles.contactInfo}>+012(345) 78 93</p>
          </div>
        </div>

        <div className={footerStyles.contactItem}>
          <div className={footerStyles.contactIcon}><Envelope/></div>
          <div>
            <p className={footerStyles.contactMethod}>Email Address</p>
            <p className={footerStyles.contactInfo}>support@gmail.com</p>
          </div>
        </div>

        <div className={footerStyles.contactItem}>
          <div className={footerStyles.contactIcon}><Geo/></div>
          <div>
            <p className={footerStyles.contactMethod}>Locations</p>
            <p className={footerStyles.contactInfo}>59 Main Street, USA</p>
          </div>
        </div>

      </div>
      </div>

      <div className={footerStyles.bottomMain}>
        <p className={footerStyles.copyright}>© 2022 <span className={footerStyles.name}>XcitEducation</span> All Rights Reserved</p>

        <div className={footerStyles.socialMain}>
          <Facebook className={footerStyles.socialIcon}/>
          <Twitter className={footerStyles.socialIcon}/>
          <Youtube className={footerStyles.socialIcon}/>
          <Google className={footerStyles.socialIcon}/>
        </div>

      </div>

    </div>
  );
};

export default Footer;
