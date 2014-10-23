DotaMapper
=====

CS 467 Social Visualization Project
---------------------------------------------
## Overview
There is a lot of cool game data, but not many cool visualizations about them. We think both gamers and game designers will get much more useful information through visualizing game statistics.

Our map takes DotA2 replays and algorithmically generates a map that will allow gamers to visualize what makes a match entertaining and what could make it boring. 

## People 
+ Anne McLaughlin
+ Faizaan Mahmud
+ Xuefeng Zhu 
+ Teddy Marszalek

 
## Web application(Part1)
For the web application, we demonstrate two visualizations. The demo can be find at http://xuefeng-zhu.github.io/DotaMapper/part1/#/main

The first visualization we are trying to show how kill/death ratio will influence the viewers vote for the match. User can just provide matchID and then click "Visulize". For example, 613379400 as matchID. The page will switch the visualization, and at bottom, the user can provide extra matchID to add more data the graph. We write the code to fetch data from steamAPI, process them, and use [Google Chart](https://google-developers.appspot.com/chart/) to draw the scatter plot. 

The second visualization we trying to show show gold players earn influence their performance in the game. 
User can just provide matchID and then click "Visulize". For example, 613379400 as matchID. We write the code to fetch data from steamAPI, process them, and use [D3Plus](http://d3plus.org/) to draw the treemap. 

If you want to run the application offline, just go to the application folder in terminal and then run "python -m SimpleHTTPServer" Then visit localhost:8000

Since the Steam API has cross domain restriction, we also write a server side code to wrap arround it. The code is available [here](https://github.com/Xuefeng-Zhu/DotaMapper-server)


## Static page(Part2)



