"use strict";

function maze(width, height){
    this.width = width;
    this.height = height;
    
    this.startX = null;
    this.startY = null;
    this.startOrientation = null;
    this.endX = null;
    this.endY = null;
    
    this.spaces = [];
    
    for(var x=1; x <= width; x++){
        this.spaces[x] = [];
        for(var y=1; y <= height; y++){
            this.spaces[x][y] = [];
        }
    }
    
}

maze.prototype.setStart = function(x, y, orientation){
    this.startX = x;
    this.startY = y;
    this.startOrientation = orientation;
}

maze.prototype.setEnd = function(x, y){
    this.endX = x;
    this.endY = y;
}