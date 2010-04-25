class WelcomeController < ApplicationController
  before_filter :login_required ,:only=>[:add_to_cart]
  def today
    @product = Product.find(:first,:conditions=>"status=1")
  end

  def tomorrow
  end

  def yesterday
  end

  #添加到购物车
  def add_to_cart
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
  end
   #清空购物车
   def empty_cart
     session[:cart] = nil
     flash[:notice]="购物车已清空"
     redirect_to :action => :today
   end

 #------------------------------------------
  private
  def find_cart
    session[:cart] ||= Cart.new
  end
end
