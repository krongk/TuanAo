# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  #格式化货币
  def number_to_currency(price)
    if price
      sprintf("￥%0.01f",price)
    else
      ""
    end
  end
 #格式化时间
  def format_datetime(dt)
    dt.strftime("%Y-%m-%d %H:%M") if dt
  end
 #格式化布尔值
   def format_yes_or_no(value)
		if value
			'是'
		else
			'否'
		end
  end
 #圆角边框辅助方法
 def round_box(title,content)
   html ="<div class='TU'></div><div class='TTU'></div><div class='CU'><h2>"+title+"</h2> <div class='BOX-CONTENT'>"
   html += content + "</div></div><div class='BBU'></div><div class='BU'></div>"
   content_tag("div class='ROUND-BOX'",html)
 end
end
