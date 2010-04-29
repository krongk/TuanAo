# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper

  def number_to_currency(price)
    sprintf("￥%0.01f",price)
  end

  def format_datetime(dt)
    dt.strftime("%Y-%m-%d %H:%M")
  end

   def format_yes_or_no(value)
		if value
			'是'
		else
			'否'
		end
  end
end
