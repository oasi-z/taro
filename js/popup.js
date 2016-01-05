(function () {
    $(document).ready(function () {
        var msgJson = {
            "normal": {
                "message": [
                    "がんばれ",
                    "負けるな",
                    "あつくなれよ",
                    "今が絶好のチャンス！",
                    "逃げちゃダメだ。逃げちゃダメだ。逃げちゃダメだ。",
                    "真実は、君と共にある。迷わず進んでくれ"
                ]
            },
            "shuzo": {
                "message": [
                    "お前は富士山だ",
                    "なんでそこであきらめるんだ",
                    "僕こそがテニスの王子様",
                    "悩みん坊、万歳！",
                    "強い心を持つ そのためには 心の根",
                    "君が次に叩く1回で、壁は打ち破れるかもしれないんだ！",
                    "一所懸命生きていれば、 不思議なことに疲れない。",
                    "最初から何でも考えることが出来る人がいる。でも、僕にはなかなかそれが出来ない。だとしたら、努力によってつかむしかない！",
                    "気にすんなよ！くよくよすんなよ！大丈夫、どうにかなるって！ドントウォーリー！ビーハッピー！",
                    "頑張れ、頑張れ。そこだ、そこだ。諦めるな！絶対に頑張れ！積極的にポジティブに頑張れ！！北京だって頑張ってるんだから！！！",
                    "一番になるって言っただろ？富士山のように日本一になるって言っただろ！ お前、昔を思い出せよ！！今日からお前は… 富士山だ！！！！！",
                    "やればできる"
                ]
            },
            "moe": {
                "message": [
                    "おにいちゃんがんばって！",
                    "べっ、別にアンタのために応援しているわけじゃないからね",
                    "貴女は自分を責めすぎているわ。鹿目まどか、貴女を非難できる者なんて、誰もいない。いたら、私が許さない。",
                    "繰り返す。私は何度でも繰り返す。同じ時間を何度も巡り、たった一つの出口を探る。あなたを、絶望の運命から救い出す道を。。。",
                    "こんな自分でも、誰かの役に立てるんだって、胸を張って生きていけたら、それが一番の夢だから。",
                    "諦めたらそれまでだ。でも、君なら運命を変えられる。避けようのない滅びも、嘆きも、全て君が覆せばいい。そのための力が、君には備わっているんだから。",
                    "こんなサービス、滅多にしないんだからねっ!!",
                    "ありがとう。感謝の言葉、始めての言葉。あの人にも言った事なかったのに",
                    "あなたは死なないわ…。私が守るもの。",
                    "嫌い！嫌い！みんな嫌い！だいっキライ！！",
                    "あんたバカァ？",
                    "あんたまだ生きてるんでしょう！？<br/>だったらしっかり生きて！それから死になさい！",
                    "すごくなんてないわ。どんなことでも興味を持ってやれば上手くいくものよ。『好きこそものの上手なれ』って言うでしょ。",
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
        $('#message').html(getYellMessage(parseInt(modeType, 10)));


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
