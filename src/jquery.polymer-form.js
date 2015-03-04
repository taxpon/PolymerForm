/**
 * Created by takuro wada
 */

(function($){

    $.fn.elasticForm = function(options){
        var setting = $.extend({

        }, options);

        this.each(function(){
            var hoge = 120;
            var thiz = $(this);
            var label_name = $(this).attr("label");

            var dom_label = $("<label></label>").text(label_name);
            $(this).wrap("<div class='elastic-form'>");
            $(this).after(dom_label);
            $(this).after("<div class='bar'><div class='bar-in'></div></div>");

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
            dom_label.click(function(){
                thiz.focus();
            });
        });

        return this;
    };

}(jQuery));
