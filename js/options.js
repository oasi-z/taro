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
        }
    };

    $(document).ready(function () {
        var modeVal = localStorage.getItem('mode');
        if (modeVal == null) modeVal = 0;
        $.each(optionMenu, function () {
            // モードのプルダウンを生成、ローカルストレージに保存された値を選択状態にする
            $('#opModeMenu').append(
                $('<li><a href="#" data-value="' + this.value + '">' + this.title + '</a></li>'));
            if (modeVal == this.value) setSelectedModeTitle(this.title);
        });

        $('li a', '#opModeMenu').on('click', function () {
            setSelectedModeTitle($(this).text());
            localStorage.setItem('mode', $(this).attr("data-value"));
        });
    });

    // 選択しているモードの名称をプルダウンの選択値として設定する
    var setSelectedModeTitle = function (title) {
        $('#opMode').empty().append(title + ' <span class="caret"></span>');
    }
});
