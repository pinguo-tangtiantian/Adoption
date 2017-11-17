var common = {
    /**
     * 生成任意长度数字和字母组合
     * @param {number} min 最小长度
     * @param {number} max 最大长度
     */
    randomWord: function(min, max) {
        var word = "",
            range = min,
            eleArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        range = Math.round(Math.random() * (max - min)) + min;

        for (var i = 0; i < range; i++) {
            pos = Math.round(Math.random() * (eleArr.length - 1));
            word += eleArr[pos];
        }
        return word;
    }
}

module.exports = common;