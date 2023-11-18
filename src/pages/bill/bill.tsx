import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserBill } from "../../redux/bill.reducer";
import { fetchCartUser } from "../../redux/cart.reducer";

const BillPage = () => {
  const { bill } = useSelector((state: RootState) => state.bills);
  const { id } = useParams();
  console.log(id);

  console.log(bill);

  const { cart } = useSelector((state: RootState) => state.carts);
  const dispatch = useDispatch();

  const fetchCarts = async (_id: string) => {
    try {
      const data = await dispatch(fetchCartUser(_id)).unwrap();
    } catch (error) {}
  };

  const fetUserBillById = async (id: any) => {
    try {
      const data = await dispatch(fetchUserBill());
    } catch (error) {}
  };
  useEffect(() => {
    fetUserBillById(id), fetchCarts();
  }, []);

  const status = bill?.bill?.status;
  console.log(status);

  return (
    <>
      {/* Cart view section */}
      <section id="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="checkout-area">
                <form action="">
                  <div className="row">
                    <div className="checkout-right">
                      <h4>Đơn hàng của bạn</h4>
                      <div className="aa-order-summary-area">
                        <table className="table table-responsive">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Product</th>
                              <th>Total</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((item) => (
                              <tr>
                                <td>
                                <a className="remove" href="#" style={{color: "red"}}>
                                  <i className="fa fa-close" />
                                </a>
                              </td>
                                <td>
                                  {item?.productId.name}{" "}
                                  <strong> x {item?.quantity}</strong>
                                </td>
                                <td>
                                  {item?.productId?.price * item?.quantity}
                                </td>
                                <td>
                                  <span>{status}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Cart view section */}
    </>
  );
};

export default BillPage;
