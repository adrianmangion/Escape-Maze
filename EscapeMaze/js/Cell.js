function Cell(i,j)
{
    this.i = i;
    this.j = j;
    this.walls = [true,true,true,true]; //Top - Right - Bottom - Left
    this.visited = false;

    this.checkNeighbors = function()
    {
        let neighbors = [];

        
        let top    = grid[index(i, j-1)];
        let right  = grid[index(i+1, j)];
        let bottom = grid[index(i, j+1)];
        let left   = grid[index(i-1,j)];

        if(top && !top.visited)
        {
            neighbors.push(top);
        } 
        if(right && !right.visited)
        {
            neighbors.push(right);
        }
        if(bottom && !bottom.visited)
        {
            neighbors.push(bottom);
        }
        if(left && !left.visited)
        {
            neighbors.push(left);
        }

        if(neighbors.length > 0)
        {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        }
        else
        {
            return undefined;
        }
    }

    this.highlight = function()
    {
        let x = this.i*cellWidth;
        let y = this.j*cellWidth;
        noStroke();
        fill(0, 0, 255, 100);
        rect(x,y,cellWidth,cellWidth);
    }

    this.show = function()
    {
        var x = this.i*cellWidth;
        var y = this.j*cellWidth;
        stroke(0);
        strokeWeight(4);
        //Drawing of Cell lines
        if(this.walls[0])
        {
            line(x,y,x+cellWidth,y);                     //From left top corner to right top corner
        }
            
        if(this.walls[1])
        {               
            line(x+cellWidth,y,x+cellWidth,y+cellWidth); //From right top corner to right bottom corner
        }

        if(this.walls[2])
        {
            line(x+cellWidth,y+cellWidth,x,y+cellWidth); //From right bottom corner to left bottom corner
        }    
            
        if(this.walls[3])
        {
            line(x,y+cellWidth,x,y);                     //From left bottom corner to left top corner
        }
                      
        if(this.visited)
        {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x,y,cellWidth,cellWidth);
        }
    }
}