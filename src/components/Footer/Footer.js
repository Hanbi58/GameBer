import FooterContent from "./FooterContent";
import FooterPartners from "./FooterPartners";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerMain}>
      <FooterContent
        sTitle="Customer Care"
        first="Contact Us"
        second="FAQs"
        third="Returns&Exchange"
        forth="Cancelling or Changing an Order"
        fifth="Terms of Service"
        sixth="Privacy Policy"
        seventh="Security"
      />
      <FooterContent
        sTitle="My Account"
        first="Sign in/Register"
        second="Chat Now"
        third="Live Stream"
        forth="My Rewards"
        fifth="My Wishlist"
      />
      <FooterContent
        sTitle="Inside Gameber"
        first="About Us"
        second="Subscribe"
        third="Why Gameber"
        forth="Our Team"
        fifth="Vision"
        sixth="Mission"
        seventh="Join our team"
      />
      <FooterPartners />
    </div>
  );
};

export default Footer;
