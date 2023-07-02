function talk(){
    var know = {
    "Which player scored the fastest hat-trick in the Premier League" : "Sadio Mane (2 minutes 56 seconds for Southampton vs Aston Villa in 2015)",
    "Which player, with 653 games, has made the most Premier League appearances" : "Gareth Barry",
    "Three players share the record for most Premier League red cards (8). Who are they" : "Patrick Vieira, Richard Dunne and Duncan Ferguson",
    "Your name" : "I don't have a name )",
    "With 260 goals, who is the Premier League's all-time top scorer":"Alan Shearer",
    "Who scored the fastest goal scored in Premier League history" : "Shane Long (for Southampton vs Watford in 2018-19) scored in 7.69 seconds",
    "Who has the most premier league titles" : "Man United with a total of 13",
    "Which premere league clubs have won the club world cup" : "Man United, Liverpool and Chelsea",
    "Whats the current premier league season" : "Current season is 23-24 which starts on August 19",
    "Whats your name" : "I don't have a name )",
    "ok" : "Any other Questions??",
    "Who created you" : "Arsath Wahaab created me ^_^ ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,Ask me something else.. <br>";
    }
    }

    function getQuote()
    {
        var Quotes=new Array("I learned all about life with a ball at my feet” –Ronaldinho","The more difficult the victory, the greater the happiness in winning.– Pelé","You have to fight to reach your dream. You have to sacrifice and work hard for it.– Lionel Messi",
        "When people succeed, it is because of hard work. Luck has nothing to do with success.– Diego Maradona","There is no pressure when you are making a dream come true.– Neymar","I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet.– Zinedine Zidane","I don’t have time for hobbies. At the end of the day, I treat my job as a hobby. It’s something I love doing.- David Beckham");
        var y=Quotes[(Math.floor(Math.random() * Quotes.length))];
        document.getElementById('Q').innerHTML=y;
        
    }