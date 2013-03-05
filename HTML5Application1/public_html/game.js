window.onload = function () 
{
    //start crafty
    Crafty.init(400,336);
};

Crafty.scene("loading", function()
{
    Crafty.load(["sprite.png"], function()
    {
       Crafty.scene("main"); 
    });
    
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text").attr({w:100, h:20, x:150, y:120})
        .text("Loading")
        .css({"text-align":"center"});
});

Crafty.scene("loading");
