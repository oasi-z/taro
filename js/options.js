$(function () {
    var optionMenu = {
        "normal": {
            "title": "標準モード",
            "value": 0
        },
        "shuzo": {
            "title": "修造モード",
            "value": 1
        },
        "moe": {
            "title": "萌えモード",
            "value": 2
        },
        "custom": {
            "title": "カスタム",
            "value": 3
        }
    };

    $('#opCustom').hide();

    $(document).ready(function () {
        var modeVal = localStorage.getItem('mode');
        if (modeVal == null) modeVal = 0;
        $.each(optionMenu, function () {
            // モードのプルダウンを生成、ローカルストレージに保存された値を選択状態にする
            $('#opModeMenu').append(
                $('<li><a href="#" data-value="' + this.value + '">' + this.title + '</a></li>'));
            if (modeVal == this.value) setSelectedModeTitle(this.title);
            if (modeVal == 3) {
                showCustomSettings();
            }
        });

        $('li a', '#opModeMenu').on('click', function () {
            setSelectedModeTitle($(this).text());
            var val = $(this).attr("data-value");
            if (val == 3) {
                showCustomSettings();
            } else {
                $('#opCustom').hide();
            }
            localStorage.setItem('mode', val);
        });
        $('.btn', '#opCustom').on('click', function () {
            var inputVal = $('#opCustomMessage').val();
            if (!inputVal) {
                alert('入力してください');
                return;
            }
            try {
                if (inputVal.length > 5000) alert('こんなところに5000文字以上入力するあなたを励ますのはクリックではなくクリニックをオススメします。');
                // jsonにパースしてみる。失敗したらエラー。
                var messageArray = $.parseJSON(inputVal);
                // jsonの中身が配列だけじゃない場合はエラー
                if (!Array.isArray(messageArray)) {
                    console.log("入力値が配列ではないためエラー");
                    throw new Error();
                }
                localStorage.setItem('mode', 3);
                localStorage.setItem('message', inputVal);
            } catch (e) {
                alert('保存できません。入力例を確認してください。');
            }

        });
    });

    // 選択しているモードの名称をプルダウンの選択値として設定する
    var setSelectedModeTitle = function (title) {
        $('#opMode').empty().append(title + ' <span class="caret"></span>');
    }

    var showCustomSettings = function () {
        $('#opCustomMessage').val(localStorage.getItem('message'));
        $('#opCustom').show();
    }
});
