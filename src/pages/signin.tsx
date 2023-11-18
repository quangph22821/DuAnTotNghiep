import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../api/auth";
import { message } from "antd";

const SigninPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const  onsignin = async (value: any) => {
      try{
          console.log(value);
          const reponse = await signin(value);
          localStorage.setItem("accessToken", reponse?.data?.accessToken);
          localStorage.setItem("accessRole", reponse?.data?.user?.role);
          localStorage.setItem("user",JSON.stringify(reponse?.data?.user));
          console.log("A", reponse);
          if(reponse.data.user.role == "admin"){
              message.success("đăng nhập admin thành công !");
              navigate("/admin")
          }else{
            message.success(`đăng nhập ${reponse.data.user.name} thành công !`)
            navigate("/")
          }

      }catch(error:any){
          console.log(error);
          message.error(`${error.response.data.message}`)

          
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
                      <h4>Login</h4>
                      <form  action="" className="aa-login-form" onSubmit={handleSubmit(onsignin)}>
                        <label htmlFor="">
                          Username or Email address<span>*</span>
                        </label>
                        <input type="text" placeholder="Username or email"
                          {...register("email")}
                        />
                        <label htmlFor="">
                          Password<span>*</span>
                        </label>
                        <input type="password" placeholder="Password"
                        {...register("password")} />
                        <button type="submit" className="aa-browse-btn">
                          Login
                        </button>
                        <label className="rememberme" htmlFor="rememberme">
                          <input type="checkbox" id="rememberme" /> Remember me{" "}
                        </label>
                        <p className="aa-lost-password">
                          <a href="#">Lost your password?</a>
                        </p>
                        <p className="aa-lost-password">
                          Bạn chưa có tài khoản? <Link to="/signup">Đăng ký tại đây</Link>
                        </p>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="aa-myaccount-register">
                      <img
                        src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                        alt=""
                        style={{ height: 262, width: 555 }}
                      />
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

export default SigninPage;
