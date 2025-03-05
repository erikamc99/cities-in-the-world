function Footer() {
    return (
        <div className="w-full mx-5">
          <div className="flex flex-wrap text-left justify-between items-center">
            <div className="text-left">
              <p className="p-3 text-black text-xl">@2021 Company, Inc</p>
            </div>
            <div className="flex">
              <img src="../src/assets/img/icon1.png" alt="" className="footer-icon mr-5"/>
              <img src="../src/assets/img/icon2.png" alt="" className="footer-icon mr-5"/>
              <img src="../src/assets/img/icon3.png" alt="" className="footer-icon "/>
            </div> 
          </div>
        </div>
    );
};

export default Footer;