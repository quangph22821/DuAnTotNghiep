import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import { message } from "antd";
import { IUser } from "../models/user";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSignup = async (values: any) => {
      console.log(values);
      try {
          const response = await signup(values);
          console.log({ response });
          message.success(`Đăng kí thành công ${response.data.user.name} !`)
          navigate('/signin');

      } catch (error: any) {
          console.log(error);
          message.warning(`${error?.response?.data.message}`)
      }

  }
  return (
    <>
      {/* Cart view section */}
      <section id="aa-myaccount">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-myaccount-area">
                <div className="row">
                  <div className="col-md-6">
                    <div className="aa-myaccount-login">
                    <img
                      src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                      alt=""
                      style={{height: 394, width: 555}}
                    />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="aa-myaccount-register">
                      <h4>Register</h4>
                      <form action="" className="aa-login-form"
                        onSubmit={handleSubmit(onSignup)}
                      >
                        <label htmlFor="">
                          Username <span>*</span>
                        </label>
                        <input type="text" placeholder="Username"
                          {...register("name")}
                        />
                        <label htmlFor="">
                          Email address<span>*</span>
                        </label>
                        <input type="text" placeholder="Email address"
                          {...register("email")}
                        />
                        <label htmlFor="">
                          Password<span>*</span>
                        </label>
                        <input type="password" placeholder="Password" 
                        {...register("password")}
                        />
                        <label htmlFor="">
                          Confirm password<span>*</span>
                        </label>
                        <input type="password" placeholder=" Confirm Password"
                        {...register("confirmPassword")}
                        />
                        <button type="submit" className="aa-browse-btn">
                          Register
                        </button><br />
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Cart view section */}
    </>
  );
};

export default SignupPage;
