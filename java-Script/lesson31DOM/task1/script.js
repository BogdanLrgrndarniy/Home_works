// 1. Создать страницу, которая выводит нумерованный список песен:

var playList = [

    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    
    { 
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    
    { 
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },
    
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];



    function conclusion(playList) {
        for(let songs of playList){
            console.log(songs)
            let div = document.createElement('div');
            div.innerHTML = songs.author;
            div.innerHTML = songs.song;
            document.body.append(div);
        }
    }
        conclusion(playList)