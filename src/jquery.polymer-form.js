/**
 * Created by takuro wada
 */

(function($){

    $.fn.polymerForm = function(options){
        var setting = $.extend({
            base_color: "#AAAAAA",
            active_color: "#C4141A",
            margin_top: "20px",
            margin_bottom: "50px",
            bar_height: "2px"
        }, options);

        this.each(function(){
            var thiz = $(this);
            var label_name = $(this).attr('label');
            var base_color = $(this).attr('base-color') || setting.base_color;
            var active_color = $(this).attr('active-color') || setting.active_color;
            var margin_top = $(this).attr('margin-top') || setting.margin_top;
            var margin_bottom = $(this).attr('margin-bottom') || setting.margin_bottom;
            var bar_height = $(this).attr('bar-height') || setting.bar_height;

            var initail_val = $(this).val();

            var $polymer_form = $("<div class='polymer-form'>")
            var $dom_label = $("<label class='placeholder'></label>").text(label_name);
            var $div_bar = $("<div class='bar'></div>");
            var $div_bar_in = $("<div class='bar-in'></div>");

            // Set style
            $polymer_form.css({'margin-top': margin_top, 'margin-bottom': margin_bottom});
            $div_bar.css({backgroundColor: base_color, height: bar_height});
            $div_bar_in.css({backgroundColor: active_color, height: bar_height});
            $div_bar.append($div_bar_in);

            $(this).wrap($polymer_form);
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
            $(this).change(function(){
                if(thiz.val() !== '') {
                    $(this).parent().addClass("dirty");
                }
            });
            $dom_label.click(function(){
                thiz.focus();
            });
        });

        return this;
    };

}(jQuery));
