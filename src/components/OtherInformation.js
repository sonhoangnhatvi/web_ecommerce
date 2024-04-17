import classes from "./OtherInformation.module.css";

const OtherInformation = () => {
  return (
    <div className={classes.otherinformation}>
      <div className={classes.shippinginfo}>
        <div>
          <p className={classes.title}>FREE SHIPPING</p>
          <p className={classes.subtitle}>Free shipping worldwide</p>
        </div>
        <div>
          <p className={classes.title}>24/7 SERVICE</p>
          <p className={classes.subtitle}>Free shipping worldwide</p>
        </div>
        <div>
          <p className={classes.title}>FESTIVAL OFFER</p>
          <p className={classes.subtitle}>Free shipping worldwide</p>
        </div>
      </div>
      <div className={classes.subscribe}>
        <div className={classes.title_area}>
          <p className={classes.title}>LET'S BE FRIENDS</p>
          <p className={classes.subtitle}>
            Nisi sisi tempor consequat laboris nisi.
          </p>
        </div>
        <div className={classes.email}>
          <input
            type="email"
            className={classes.ipemail}
            placeholder="Enter your email address"
          ></input>
          <button className={classes.btn}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
