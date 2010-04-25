# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper

  def number_to_currency(price)
    sprintf("￥%0.01f",price)
  end
end
