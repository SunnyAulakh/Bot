var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918288829007'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8288829007</label></div> </a> <a href='mailto:sunnyaulakh8916@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/GlobencyMedia'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918288829007'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/officialglobencymedia'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://linkedin.com/company/globencymedia/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var brochureString = "<img src='images/BrochureThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Globency Media Brochure.pdf</label></div><a href='assets/Globency Media - Brochure.pdf' download='Globency Media Brochure.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>370 Ground Floor, Shaheed Udham Singh Nagar, Near Dhingra Laboratory,<br>Jalandhar<br>Jalandhar City, Punjab, India 144001</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Globency Media AI</a>.</span><br><br>I am an AI Bot from <span class='bold'>Globency Media</span><br><br>I am eager to hear about your potential career opportunities, so I would be pleased to chat about Projects in IT sphere.<br><br>Send <span class='bold'>'help'</span> to know more about Projects.<br>");
            }, 2000);
            break;

        case "brochure":
            sendTextMessage(brochureString);
            break;

            case "service":
            sendTextMessage(brochureString);
            break;

            case "services":
                sendTextMessage(brochureString);
                break;

            case "what is globency media":
                sendTextMessage(brochureString);
                break;

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about projects...<br>e.g<br><br><span class='bold'>'Brochure'</span><br> - to download our brochure<br><br><span class='bold'>'About'</span> - to know about Globency Media<br><br><span class='bold'>'Social Media Management'</span><br> - to know this service<br><br><span class='bold'>'Video Production'</span><br> - to know what type of videos we produce<br><br><span class='bold'>'Website'</span><br> - to know which website can help you<br><br><span class='bold'>'App'</span><br> - to know which app suits best for your organisation<br><br><span class='bold'>'CRM'<br></span> - to know Customer Relationship Management <br><br><span class='bold'>'ERP'<br></span> - to know Enterprise Resource Planning <br><br><span class='bold'>'Ongoing Projects'<br></span> - to know about Globency Media's ongoing projects<br><br><span class='bold'>'Location'</span><br> - to know our location<br><br><span class='bold'>'Clear'</span><br> - to clear conversation</span>");
            break;

        case "help me":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about projects...<br>e.g<br><br><span class='bold'>'Brochure'</span><br> - to download our brochure<br><br><span class='bold'>'About'</span> - to know about Globency Media<br><br><span class='bold'>'Social Media Management'</span><br> - to know this service<br><br><span class='bold'>'Video Production'</span><br> - to know what type of videos we produce<br><br><span class='bold'>'Website'</span><br> - to know which website can help you<br><br><span class='bold'>'App'</span><br> - to know which app suits best for your organisation<br><br><span class='bold'>'CRM'<br></span> - to know Customer Relationship Management <br><br><span class='bold'>'ERP'<br></span> - to know Enterprise Resource Planning <br><br><span class='bold'>'Ongoing Projects'<br></span> - to know about Globency Media's ongoing projects<br><br><span class='bold'>'Location'</span><br> - to know our location<br><br><span class='bold'>'Clear'</span><br> - to clear conversation</span>");
            break;

        case "assist me":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about projects...<br>e.g<br><br><span class='bold'>'Brochure'</span><br> - to download our brochure<br><br><span class='bold'>'About'</span> - to know about Globency Media<br><br><span class='bold'>'Social Media Management'</span><br> - to know this service<br><br><span class='bold'>'Video Production'</span><br> - to know what type of videos we produce<br><br><span class='bold'>'Website'</span><br> - to know which website can help you<br><br><span class='bold'>'App'</span><br> - to know which app suits best for your organisation<br><br><span class='bold'>'CRM'<br></span> - to know Customer Relationship Management <br><br><span class='bold'>'ERP'<br></span> - to know Enterprise Resource Planning <br><br><span class='bold'>'Ongoing Projects'<br></span> - to know about Globency Media's ongoing projects<br><br><span class='bold'>'Location'</span><br> - to know our location<br><br><span class='bold'>'Clear'</span><br> - to clear conversation</span>");
            break;

        case "assist me":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about projects...<br>e.g<br><br><span class='bold'>'Brochure'</span><br> - to download our brochure<br><br><span class='bold'>'About'</span> - to know about Globency Media<br><br><span class='bold'>'Social Media Management'</span><br> - to know this service<br><br><span class='bold'>'Video Production'</span><br> - to know what type of videos we produce<br><br><span class='bold'>'Website'</span><br> - to know which website can help you<br><br><span class='bold'>'App'</span><br> - to know which app suits best for your organisation<br><br><span class='bold'>'CRM'<br></span> - to know Customer Relationship Management <br><br><span class='bold'>'ERP'<br></span> - to know Enterprise Resource Planning <br><br><span class='bold'>'Ongoing Projects'<br></span> - to know about Globency Media's ongoing projects<br><br><span class='bold'>'Location'</span><br> - to know our location<br><br><span class='bold'>'Clear'</span><br> - to clear conversation</span>");
            break;

        case "about":
            sendTextMessage("<span class='sk'>Globency Media is an IT services, consulting, and business solutions organization that has been partnering with many of the largest businesses in their transformation journeys for over 7 years.<br><br> When we just started growing it was a big step for us, but wow, looking back, it has been an amazing journey. A great programmers community and a product team that you can tell really cares about their product.<br><br> The stuff you can do with Globency Media will blow you a way to connect with any business person who wants to step up their business game online.<br></span>");
            break;

        case "social media management":
            sendTextMessage("<span class='sk'>In Social Media Management, we can apply following strategies for your organisation:<br><span class='bold'>~ Social media content strategy<br>~ Online reputation management<br>~ Community management<br>~ Paid social media strategy<br>~ Strategy execution<br>~ Team member management<br></span>");
            break; 
            
            case "social media":
            sendTextMessage("<span class='sk'>In Social Media Management, we can apply following strategies for your organisation:<br><span class='bold'>~ Social media content strategy<br>~ Online reputation management<br>~ Community management<br>~ Paid social media strategy<br>~ Strategy execution<br>~ Team member management<br></span>");
            break;
            
            case "social":
            sendTextMessage("<span class='sk'>In Social Media Management, we can apply following strategies for your organisation:<br><span class='bold'>~ Social media content strategy<br>~ Online reputation management<br>~ Community management<br>~ Paid social media strategy<br>~ Strategy execution<br>~ Team member management<br></span>");
            break; 

        case "website":
            sendTextMessage("<span class='sk'>In Website Development, the type of websites we develop:<br><span class='bold'>~ Informative Websites<br>~ Ecommerce Websites<br>~ Shopify Websites<br>~ Client Portals<br></span>");
            break;

            case "web":
            sendTextMessage("<span class='sk'>In Website Development, the type of websites we develop:<br><span class='bold'>~ Informative Websites<br>~ Ecommerce Websites<br>~ Shopify Websites<br>~ Client Portals<br></span>");
            break;

        case "app":
            sendTextMessage("<span class='sk'>In Application Development, the type of Mobile Applications we develop:<br><span class='bold'>~ Native IOS in Flutter<br>~ Native Android in Flutter<br>~ Web version<br></span>");
            break;

            case "application":
            sendTextMessage("<span class='sk'>In Application Development, the type of Mobile Applications we develop:<br><span class='bold'>~ Native IOS in Flutter<br>~ Native Android in Flutter<br>~ Web version<br></span>");
            break;

            case "mobile app":
            sendTextMessage("<span class='sk'>In Application Development, the type of Mobile Applications we develop:<br><span class='bold'>~ Native IOS in Flutter<br>~ Native Android in Flutter<br>~ Web version<br></span>");
            break;

            case "mobile application":
            sendTextMessage("<span class='sk'>In Application Development, the type of Mobile Applications we develop:<br><span class='bold'>~ Native IOS in Flutter<br>~ Native Android in Flutter<br>~ Web version<br></span>");
            break;

        case "video production":
            sendTextMessage("<span class='sk'>In Video Production, the type of Videos we produce:<br><span class='bold'>~ Social Media Videos<br>~ Product Videos/Reviews<br>~ Video Ads<br>~ Corporate Videos<br>~ 2D & 3D Motion Graphics<br>~ TV Commercials<br>~ Short Product Commercials<br>~ Music Videos<br></span>");
            break;

            case "video":
            sendTextMessage("<span class='sk'>In Video Production, the type of Videos we produce:<br><span class='bold'>~ Social Media Videos<br>~ Product Videos/Reviews<br>~ Video Ads<br>~ Corporate Videos<br>~ 2D & 3D Motion Graphics<br>~ TV Commercials<br>~ Short Product Commercials<br>~ Music Videos<br></span>");
            break;

            case "photo":
            sendTextMessage("<span class='sk'>In Video Production, the type of Videos we produce:<br><span class='bold'>~ Social Media Videos<br>~ Product Videos/Reviews<br>~ Video Ads<br>~ Corporate Videos<br>~ 2D & 3D Motion Graphics<br>~ TV Commercials<br>~ Short Product Commercials<br>~ Music Videos<br></span>");
            break;

        case "crm":
            sendTextMessage("<span class='sk'>In CRM services, the type of CRMs we develop are:<br><span class='bold'>~ Collaborative CRMs<br>~ Operational CRMs<br>~ Analytical CRMs<br>~ Strategic CRMs</span>");
            break;

        case "erp":
            sendTextMessage("<span class='sk'>In CRM services, the type of ERPs we develop are:<br><span class='bold'>~ Human resources (HR)<br>~ Inventory management<br>~ Planning and forecasting</span>");
            break;

        case "location":
            sendTextMessage(addressString);
            break;

        case "clear":
            clearChat();
            break;
    
        case "contact":
            sendTextMessage(contactString);
            break;

            case "how to contact you?":
            sendTextMessage(contactString);
            break;

            case "how to contact you":
            sendTextMessage(contactString);
            break;

            case "how to contact":
            sendTextMessage(contactString);
            break;

            case "how to contact?":
                sendTextMessage(contactString);
                break;
                
            case "how to contact globency media?":
                sendTextMessage(contactString);
                break;

            case "how to contact globency media":
                sendTextMessage(contactString);
                break;
                

        case "hi":
            sendTextMessage("Hello");
            break;
        
        case "hello":
            sendTextMessage("Hi");
            break;
        
            case "hii":
                sendTextMessage("Hello");
                break;

            case "hey":
                sendTextMessage("Hi");
                break;

        case "how are you?":
            sendTextMessage("I am good. How about you?");
            break; 
            
        case "good":
            sendTextMessage("NICE, How can I assist you?");
            break; 
          
        case "fine":
            sendTextMessage("NICE, How can I assist you?");
            break; 

        case "great":
            sendTextMessage("NICE, How can I assist you?");
            break;
            
        case "i am good":
            sendTextMessage("NICE, How can I assist you?");
            break;

            case "i am fine":
            sendTextMessage("NICE, How can I assist you?");
            break;

        case "where are you?":
            sendTextMessage(addressString);
            break;
    
        case "where are you":
            sendTextMessage(addressString);
            break;

        case "where is globency media?":
            sendTextMessage(addressString);
            break;
    
        case "where are u":
            sendTextMessage(addressString);
            break;

        case "who are you?":
            sendTextMessage("I am a Globency Media's AI Bot.");
            break;

        case "what are you doing?":
            sendTextMessage("Talking to you");
            break;

            case "what are you doing":
            sendTextMessage("Talking to you");
            break;

        case "who made you?":
            sendTextMessage("Team Globency Media made me.");
            break;

        case "why did they made you?":
            sendTextMessage("To talk to you");
            break;

        case "why are you here?":
            sendTextMessage("To talk to you");
            break;

        case "i love you":
            sendTextMessage("Thanks for showing us your love! Lots of love from Team Globency Media");
            break;   
            
        case "i love u":
            sendTextMessage("Thanks for showing us your love! Lots of love from Team Globency Media");
            break;
        

        case "i hate you":
            sendTextMessage("So sorry for the inconvenience you had. We'll try to improve our services.");
            break;

        case "i hate u":
            sendTextMessage("So sorry for the inconvenience you had. We'll try to improve our services.");
            break;

        case "who is sunny aulakh?":
            sendTextMessage("Sunny Aulakh, the visionary founder of Globency Media, is doing something amazing in the digital marketing world. Choosing a small town over big cities was a smart move that makes Globency Media different. In a world where metropolises often steal the spotlight, Aulakh’s decision to establish a digital marketing powerhouse in this small-town city has proven to be a strategic move that sets Globency Media apart.");
            break;

        case "where is sunny aulakh?":
            sendTextMessage("Sunny Aulakh is in Jalandhar city, Punjab, India. ammmm..I think he's in a meeting.<br>If you want to contact him type 'contact'.");
            break;

        case "ongoing projects":
            sendTextMessage("You want to check our projects? Then just jump into our Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/GlobencyMedia'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
            
        case "show me your projects":
            sendTextMessage("You want to check our projects? Then just jump into our Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/GlobencyMedia'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;

            case "your projects":
            sendTextMessage("You want to check our projects? Then just jump into our Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/GlobencyMedia'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;

            case "projects":
            sendTextMessage("You want to check our projects? Then just jump into our Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/GlobencyMedia'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        
        
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.<br><br> Well....you can have a random convo with me.<br><br>Kindly use question mark(?) if you are asking a question.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
