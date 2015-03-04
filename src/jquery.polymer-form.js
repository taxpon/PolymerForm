/**
 * Created by takuro wada
 */

(function($){

    $.fn.elasticForm = function(options){
        var setting = $.extend({
            base_color: "#AAAAAA",
            active_color: "#DDDDDD",
            bar_height: "2px"
        }, options);

        this.each(function(){
            var thiz = $(this);
            var label_name = $(this).attr('label');
            var base_color = $(this).attr('base_color') || setting.base_color;
            var active_color = $(this).attr('active_color') || setting.active_color;
            var bar_height = $(this).attr('bar_height') || setting.bar_height;

            var $dom_label = $("<label></label>").text(label_name);
            var $div_bar = $("<div class='bar'></div>");
            var $div_bar_in = $("<div class='bar-in'></div>");

            $div_bar.css({backgroundColor: base_color, height: bar_height});
            $div_bar_in.css({backgroundColor: active_color, height: bar_height});
            $div_bar.append($div_bar_in);

            $(this).wrap("<div class='elastic-form'>");
            $(this).after($dom_label);
            $(this).after($div_bar);


            $(this).focus(function(){
                var bar = $(this).parent().find(".bar-in");
                bar.addClass("active");
                $(this).parent().addClass("dirty");
            });
            $(this).blur(function(){
                var bar = $(this).parent().find(".bar-in");
                bar.removeClass("active");
                if($(this).val() == ""){
                    $(this).parent().removeClass("dirty");
                }
            });
            $dom_label.click(function(){
                thiz.focus();
            });
        });

        return this;
    };

}(jQuery));
