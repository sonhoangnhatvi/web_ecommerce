import classes from "./ShopFunction.module.css";

const ShopFunction = () => {
  return (
    <div className={classes.shopfunction}>
      <input type="text" placeholder="Enter Search Here"></input>
      <input
        list="ordertype"
        id="myOrder"
        name="myOrder"
        value="Default sorting"
        readOnly={true}
      />
      <datalist id="ordertype">
        <option value="Default sorting"></option>
        <option value="Firefox"></option>
        <option value="Opera"></option>
        <option value="Safari"></option>
        <option value="Microsoft Edge"></option>
      </datalist>
    </div>
  );
};

export default ShopFunction;
