import FooterItem from "./FooterItem";
import classes from "./Footer.module.css"

const FOOTER_DATA = [
  {
    title: "CUSTOMER SERVICES",
    items: [
      "Help & Contact Us",
      "Returns & Refunds",
      "Online Stores",
      "Terms & Conditions",
    ],
  },
  {
    title: "COMPANY",
    items: ["What We Do", "Available Services", "Latest Post", "FAQs"],
  },
  {
    title: "SOCIAL MEDIA",
    items: ["Twitter", "Instagram", "Facebook", "Pinterest"],
  },
];

const Footer = () => {
  return (
    <div>
      <ul className={classes.footer}>
        {FOOTER_DATA.map((item, index) => {
          return <FooterItem data={item} key={index}></FooterItem>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
