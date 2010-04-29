class WelcomeController < ApplicationController
  #before_filter :login_required ,:only=>[:add_to_cart]
  def today
    @product = Product.find(:first,:conditions=>"status=1")
  end

  def tomorrow
  end

  def yesterday
  end

  #添加到购物车
  def add_to_cart
    session[:cart] = nil
    if logged_in?
      begin
        product = Product.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        logger.error("试图访问无效的产品编号:#{params[:id]}")
        flash[:notice]="无效的产品,请检查!"
        redirect_to :action=>:today
      else
        @cart = find_cart
        @cart.add_product(product)
      end
    else
      flash[:notice]="只有注册用户才享有购买功能! 请先登录!"
      session[:back_to]="/welcome/add_to_cart/#{params[:id]}"
      redirect_to '/login'
    end
  end
  #清空购物车
  def empty_cart
    session[:cart] = nil
    flash[:notice]="购物车已清空"
    redirect_to :action => :today
  end
  #添加到订单
  def add_to_order
    @order = Order.new
    @order.user = current_user
    #@order.product = params[:product_id]
    @order.order_price = params[:order_price]
    if @order.save
      flash[:notice]="下订单成功!请选择支付"
      redirect_to edit_order_path(@order)
    else
      flash[:notice]="订单未成功,请检查"
      redirect_to "/add_to_cart"
    end
  end
  #------------------------------------------
  private
  def find_cart
    session[:cart] ||= Cart.new
  end
end
