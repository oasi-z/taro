(function () {
    $(document).ready(function () {
        var msgJson = {
            "normal": {
                "message": [
                    "がんばれ",
                    "負けるな",
                    "あつくなれよ",
                    "今が絶好のチャンス！",
                    "あつくなれよ",
                    "あつくなれよ"
                ]
            },
            "shuzo": {
                "message": [
                    "お前は富士山だ",
                    "なんでそこであきらめるんだ",
                    "やればできる"
                ]
            },
            "moe": {
                "message": [
                    "おにいちゃんがんばって！",
                    "べっ、別にアンタのために応援しているわけじゃないからね",
                    "眼鏡属性って何？"
                ]
            },
            "custom": {
                "message": [
                    ""
                ]
            }
        };
        var modeType = localStorage.getItem('mode');
        if (modeType == null) modeType = 0;
        $('#message').text(getYellMessage(parseInt(modeType, 10)));


        function getYellMessage(modeType) {
            switch (modeType) {
                case 0:
                    return createMessage("normal");
                case 1:
                    return createMessage("shuzo");
                case 2:
                    return createMessage("moe");
                case 3:
                    return createCustomMessage();
                default:
                    console.log("有効な値ではありません " + modeType);
                    break;
            }

            function createMessage(modeLabel) {
                var message = msgJson[modeLabel].message;
                return getRandomMessage(message);
            }

            function createCustomMessage() {
                var message = localStorage.getItem('message');
                return getRandomMessage($.parseJSON(message));
            }

            function getRandomMessage(message) {
                var random = Math.floor(Math.random() * message.length);
                return message[random];
            }
        }
    });
})();
