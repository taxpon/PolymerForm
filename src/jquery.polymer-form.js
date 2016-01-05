/**
 * Created by takuro wada
 */

(function($){

    $.fn.polymerForm = function(options){
        var setting = $.extend({
            label_default: "Name",
            base_color: "#AAAAAA",
            active_color: "#C4141A",
            bar_height: "2px",
            label_color: "#999999",
            origin: "center",
            margin_top: "20px",
            margin_bottom: "50px",
            has_default_value: false
        }, options);

        this.each(function(){
            var thiz = $(this);
            var label_name = $(this).attr('label') || setting.label_default;
            var base_color = $(this).attr('base-color') || setting.base_color;
            var active_color = $(this).attr('active-color') || setting.active_color;
            var margin_top = $(this).attr('margin-top') || setting.margin_top;
            var margin_bottom = $(this).attr('margin-bottom') || setting.margin_bottom;
            var bar_height = $(this).attr('bar-height') || setting.bar_height;
            var label_color = $(this).attr('label-color') || setting.label_color;
            var origin = $(this).attr('origin') || setting.origin;
            var has_default_value = (($(this).attr('value') != "") && ($(this).attr('value') != undefined)) || setting.has_default_value;

            // Validation
            if(origin !== 'left' && origin !== 'right' && origin !== 'center'){
                origin = 'center';
            }

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
            $dom_label.css({'color': label_color});

            ///// Get origin style
            var origin_style = {};
            switch (origin){
                case 'left':
                    origin_style = {'position': 'absolute'};
                    break;
                case 'right':
                    origin_style = {'position': 'absolute', 'right': '0'};
                    break;
            }
            $div_bar_in.css(origin_style);

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

            if(has_default_value) {
                $(this).parent().addClass("dirty");
            }
        });

        return this;
    };

}(jQuery));
