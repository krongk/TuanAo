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
  #re password
  def edit
    @user = User.find_by_activation_code(params[:active])
  end
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        flash[:notice] = '用户修改成功.'
        format.html { redirect_to('/') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @user.errors, :status => :unprocessable_entity }
      end
    end
  end
  #forgot password
  def forget_password
    if params[:email]
      @user= User.find_by_email(params[:email])
    if @user     
      sendmail(@user)
    else
      flash[:notice]="抱歉，没有这个用户"
    end
    else
      
    end
  end
  #send email
  def sendmail(user)
      recipient = user.email
      subject ="团奥网密码找回"
      message = "<p>您在团奥网申请了重设密码，请点击下面的链接，然后根据页面提示完成密码重设：</p>
      http://www.tuanao.com/users/#{user.id}?active=#{user.activation_code}"
      Emailer.deliver_contact(recipient, subject, message)
      return if request.xhr?
      flash[:notice1]="操作成功!请检查你的邮箱."
      redirect_to "/account/forget_password"
  end

end
