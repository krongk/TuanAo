class UsersController < ApplicationController

  # render new.rhtml
  def new
  end

  def create
    cookies.delete :auth_token
    # protects against session fixation attacks, wreaks havoc with 
    # request forgery protection.
    # uncomment at your own risk
    # reset_session
    @user = User.new(params[:user])
    @user.save
    if @user.errors.empty?
      self.current_user = @user
      redirect_back_or_default('/')
      flash[:notice] = "你好,注册成功!"
    else
      render :action => 'new'
    end
  end

  def activate
    self.current_user = params[:activation_code].blank? ? false : User.find_by_activation_code(params[:activation_code])
    if logged_in? && !current_user.active?
      current_user.activate
      flash[:notice] = "Signup complete!"
    end
    redirect_back_or_default('/')
  end

  #forgot password
  def forget_password
    if params[:email]
      @user= User.find_by_email(params[:email])
    if @user
      
      sendmail(@user.email)
    else
      flash[:notice]="抱歉，没有这个用户"
    end
    else
      
    end
  end
  #send email
  def sendmail(email)
      recipient = email
      subject ="密码找回"
      message = "内容部分"
      Emailer.deliver_contact(recipient, subject, message)
      return if request.xhr?
      flash[:notice1]="操作成功!请检查你的邮箱."
      redirect_to "/account/forget_password"
  end
  
  def reset_password
  
  end

end
