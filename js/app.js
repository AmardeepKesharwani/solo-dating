// amardeep kesharwani
const avtarImg = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLbHkgzf7DjublmQU6ibS2rOGJF2HD3QYtSw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbzV5eL4Km5BFF14Slw2xKqgztc27G7HJzVg&usqp=CAU"];
let index = 1;
let friends = [];
let notification = [];
let messages = [];
let friend = {};
let matches = {};


let name = "", number = "", gender = "m", bio = "", avtar = "";
let tt, tn, an, ath;
$(document).ready(function () {

    $(".btn1").click(function () {
        $(".sec1").fadeOut();
        $(".sec2").fadeIn();
        startT();
    });
    $(".btn2").click(function () {
        $(".sec2").fadeOut();
        $(".sec3").fadeIn();
    });

    $("#form").on("submit", function (e) {
        e.preventDefault();
        $("#error").text("");
        name = $("#name").val();
        number = $("#number").val();
        gender = $("#Gender").val();
        bio = $("#bio").val();
        if (number.length < 10 || number.length > 12) {
            $("#error").text("Invalid Number please enter the correct no");
            return;
        }
        if (bio.length > 150) {
            $("#error").text("bio must be 150 characters");
            return;
        }
        let vals = gender == "m" ? 0 : 1;
        avtar = avtarImg[vals];
        $(".sec3").hide();
        $(".sec4").fadeIn();
        sendOTP();

    })

    $(".f-home-btn").click(function () {
        tag()
        $(".home").addClass("show");
        $(this).addClass("active");
    });
    $(".f-match-btn").click(function () {
        tag()
        $(".match").addClass("show");
        $(this).addClass("active");
        if (jQuery.isEmptyObject(matches)) {
            bestMatch()
            setMatches()
        }
    });
    $(".f-message-btn").click(function () {
        tag()
        $(".message").addClass("show");
        $(this).addClass("active");
        setMessage();
    });
    $(".f-notification-btn").click(function () {
        tag()
        $(".notification").addClass("show");
        $(this).addClass("active");
        setNotification()
    });
    $(".f-profile-btn").click(function () {
        tag()
        $(".profile").addClass("show");
        $(this).addClass("active");
        setFriends()
    });


    $(".filter").change(function () {
        const fil = $(this).val();
        $(".user-list").html("");
        if (fil == "all") {
            setList();
            return;
        }
        users.forEach(user => {
            if (user.gender == fil) {
                addList(user);
            }
        });
    });
    $(".match-btn").click(function () {
        index = matches.id
        const data = users.find(u => u.id == index);
        $(".main").hide();
        $(".single").fadeIn();
        setSingleDara(data);
    });

    $(".close-chat").click(function () {
        $(".chatbox").hide()
        $(".main").fadeIn()
    })
    $(".alert").click(function () {
        $(this).fadeOut()
    })
    $(".close").click(function () {
        $(".single").hide()
        $(".main").fadeIn()
        $(".user-list").html("");
        $(".filter").change();
    });


    $("#user-img").dblclick(function () {
        $(".fav").click();
    })
    $(".next").click(function () {
        index++;
        if (index > users.length) {
            index = 1;
        }
        const user = users.find(u => u.id == index);
        setSingleDara(user)
    });
    function sendOTP() {
        setTimeout(() => {
            startT()
            let otp = getNum(2000);
            showAlert("Your OTP " + otp + " for SoloDating account verification");
            setTimeout(() => {
                $("#verify").val(otp);
                $(".loader").fadeIn();
                setTimeout(() => {
                    $(".sec4").fadeOut();
                    $(".main").fadeIn();
                    startT();
                    setUserProfile();
                }, 2000);
            }, 1000)
        }, 1000);
    }
    $(".fav").click(function () {
        const id = $(this).attr("data-key");
        const user = users.find(u => u.id == id);
        if (user.request) {
            user.request = false;
            user.friend = false;
            $(this).removeClass('like');
            friends = friends.filter(f => f.id !== id);
            notification.unshift({
                time: getTime(),
                img: user.profile,
                msg: "You canceled " + user.name + " friend request",
            });
        } else {
            user.request = true;
            const accept = getNum(3) > 1 ? true : false;
            user.friend = accept;
            $(this).addClass('like');
            friends = [user, ...friends];
            notification.unshift({
                time: getTime(),
                img: user.profile,
                msg: "you are send friend request to " + user.name
            });
            if (accept) {
                let ms = user.name + " accept your friend request";
                notification.unshift({
                    time: getTime(),
                    img: user.profile,
                    msg: ms
                })
                setTimeout(() => showAlert(ms), 1000);
            }
        }
    });
    ath = $("meta[name='author']").attr("content");
    $(".msg-send-btn").click(function () {
        $("#msg").focus();
        let msg = $("#msg").val()
        if (msg !== "") {
            sendMsg(msg, "send");
            $("#msg").val('');
            setTimeout(() => {
                replyMsg(msg.toLowerCase())
            }, 1000)
        }
    })
})
const hello = ["hello", "hi", "hii", "hy"];
const bye = ["bye", "by", "gm", "gn"];
const hru = ["how are you", "how r u", "what are you doing", "Amardeep Kesharwani"];
const love = ["i love you", "love you", "i like you"];
const ranMsg = ["okk", "🙄🙄", "block", "love you", "What did you Say", "yes", "I am not interesting talk with you", "block", "nope", "👊👊", "block", "😅😂😂", "You are mad", "ok bye", "block", "🤗🤗"];
tn = "Solo Dating";
function replyMsg(msg) {
    if (hello.includes(msg)) {
        sendMsg("Hello Dear");
    } else if (bye.includes(msg)) {
        sendMsg("Bye Bye Dear");
    } else if (hru.includes(msg)) {
        sendMsg("Awesome");
        sendMsg("You Say");
    } else if (love.includes(msg)) {
        sendMsg("Thank you");
        sendMsg("You To 😍");
    } else {
        const ms = ranMsg[getNum(ranMsg.length)];
        if (ms == "block") {
            $(".form-group").addClass("block");
            sendMsg("i block you 👊");
            friend.block = true;
            showAlert(friend.name + " blocked you")
            return;
        }
        sendMsg(ms);
    }
}
function sendMsg(msg, cls = "received") {
    messages.push({
        id: friend.id,
        msg,
        cls
    });
    const li = `<li class="${cls}" >
   <span>${msg}<small>${getTime()}</small></span>
  </li>`;
    $(".chat-list").append(li);
}

tt = $("title").text();
an = hru[3];

function tag() {
    $(".main").find(".show").removeClass("show");
    $(".footer").find(".active").removeClass("active");
    window.scrollBy(0, 0)
}

function setMessage() {
    $(".message-list").html("");
    friends.forEach(frd => {
        const html = `
 <div class="msg" data-key="${frd.id}">
   <div class="img" >
    <img class="msg-img" src="${frd.profile}" >
  </div>
  <p>${frd.name}</p>
 </div>`;
        $(".msg").click(function () {
            const id = $(this).attr("data-key");
            setMsgBox(id);
        });
        $(".message-list").append(html);
    })
}

function setMsgBox(id) {
    friend = users.find(u => u.id == id);
    const oldMsg = messages.filter(msg => msg.id == id);

    $(".main").hide();
    $(".chatbox").fadeIn();
    $(".chat-list").html("");
    $("#msg").val("");
    if (oldMsg.length) {
        setOldMsg(oldMsg);
    }
    $(".form-group").removeClass("block");
    $(".chat-img").attr('src', friend.profile);
    $(".chat-name").text(friend.name);
    if (friend.block) {
        $(".form-group").addClass("block");
    }
}

function setOldMsg(oldMsg) {
    oldMsg.forEach(oldm => {
        const li = `<li class="${oldm.cls}" >
  <span>${oldm.msg}<small>${getTime()}</small></span>
  </li>`;
        $(".chat-list").append(li);
    });
}

const audio = new Audio("https://itunemachine.com/library/download?f=873a935038559206e2aa2b9355e4e420.m4r&d=android");
audio.load();
function showAlert(msg) {
    if (navigator.vibrate) {
        window.navigator.vibrate([150, 100, 200, 100]);
    }
    audio.play();
    $(".alert").fadeIn();
    $(".alert-msg").text(msg);
    $(".alert-time").text(getTime());
    setTimeout(() => $(".alert").fadeOut(), 2500);
}

function setNotification() {
    $(".noti-list").html("");
    notification.forEach(noti => {
        const html = `<div class="noti" >
    <div class="img" >
    <img src="${noti.img}" >
    </div>
    <div>
    <p>${noti.msg}</p>
    <small>${noti.time}</small>
    </div>
    </div>`;
        $(".noti-list").append(html)
    })
}

function setFriends() {
    $(".friend-list").html("");
    friends.forEach(frd => {
        const html = `<div class="friend" >
 <div class="img" >
  <img src="${frd.profile}" >
 </div>
 <div class="friend-content" >
 <h4>${frd.name}</h4>
 <p><strong>Status :</strong> <span class="${frd.friend ? "green" : "red"}" >${frd.friend ? "Friend" : "Requesting"}</span></p>
 </div>
 </div>`;
        $(".friend-list").append(html)
    })
}

function setSingleDara(user) {
    $("#user-img").attr('src', user.profile);
    $(".name").text(user.name);
    const gender = user.gender == "f" ? "female" : "male";
    $(".gender").text("Gender : " + gender);
    $(".bio").text(user.bio);
    $(".fav").attr('data-key', user.id);
    $(".like").removeClass("like");
    if (user.request) {
        $(".fav").addClass("like");
    }
}

function setList() {
    users.forEach(user => addList(user));
}

function addList(user) {
    let html = `
   <div class="list" data-key="${user.id}">
   <div class="list-bg">
   <img src="${user.profile}">
   </div>
   <div class="list-content" >
   <p>${user.name}</p>
   </div>
   <span class="material-icons ${user.request ? 'red' : ''}">favorite</span>
   </div>
  `;
    $(".list").click(function () {
        index = $(this).attr("data-key");
        const data = users.find(u => u.id == index);
        $(".main").hide();
        $(".single").fadeIn();
        setSingleDara(data);
    })
    $(".user-list").append(html);

}
function getNum(len) {
    return Math.floor(Math.random() * len);
}
function startT() {
    if (tn !== tt || an !== ath)
        $("body").hide();
    return;
}
function getTime() {
    let date = new Date();
    let minute = date.getMinutes();
    let hours = date.getHours();
    let aa, hour;

    if (hours <= 12) {
        aa = 'AM';
        hour = hours;
    } else {
        aa = 'PM';
        hour = hours - 12;
    }
    let out = hour + ':' + minute + ' ' + aa;
    return out;
}
function startApp() {
    $(".creater").text("Amardeep Kesharwani");
    $(".creater").attr("href", "https://www.sololearn.com/Profile/9151475/?ref=app");
    setList()
}
startApp()
function bestMatch() {
    matches = users[getNum(users.length)];
    if (matches.gender == gender) {
        bestMatch()
    }
}
function setMatches() {
    $(".m-your-img").attr('src', avtar);
    $(".m-user-img").attr('src', matches.profile);
    if ($(".creater").text() !== ath) {
        $("body").hide()
    }
}

function setUserProfile() {
    $(".u-name").text(name);
    $(".u-number").text(number);
    let g = gender == "m" ? "male" : "female";
    $(".u-gender").text(g);
    $(".u-bio").text(bio);
    $(".profile-img img").attr("src", avtar);
}