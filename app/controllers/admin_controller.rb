class AdminController < ApplicationController
  before_filter :admin_required
  def users
    @users = User.all(:order=>"created_at DESC")
  end

  def products
   redirect_to (products_path)
  end

  def orders
  end

  def sellers
    @sellers = Seller.all(:order=>'created_at desc')
  end

  def feedbacks
    @feedbacks = Feedback.all(:order=>'created_at DESC')
  end

end
