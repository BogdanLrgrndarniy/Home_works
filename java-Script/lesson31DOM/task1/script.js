// 1. Создать страницу, которая выводит нумерованный список песен:

let playList = [

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
          let i = 0;
        for(let songs of playList){
            i = i + 1;
           let div = document.createElement('div');
          let div2 = document.createElement('div');
          let songsAutor = songs.author;
          let songsSong = songs.song;
           
            
            document.body.append( div.innerHTML = `${songsAutor} (${i} песня). `);
            document.body.append(div2.innerHTML =  songsSong);
          }
      }   
        conclusion(playList)
