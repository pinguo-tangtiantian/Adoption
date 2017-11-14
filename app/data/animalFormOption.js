const fromOption = [
    {
        "type": "select",
        "item": { "item_name": "动物类型", "name": "type", "options": ["猫猫", "狗狗", "兔兔", "其它"] }
    },
    {
        "type": "input",
        "item": { "item_name": "名字", "name": "name", "placeholder": "请输入名字" }
    },
    {
        "type": "select",
        "item": { "item_name": "品种", "name": "cat_breed", "options": ["土猫（中华田园猫）", "暹罗猫", "苏格兰折耳猫", "英国短毛猫", "美国短毛猫", "缅因猫", "挪威森林猫", "波斯猫", "其他品种", "未知品种"] }
    },
    {
        "type": "select",
        "item": { "item_name": "花色", "name": "cat_color", "options": ["纯黄狸花", "纯黑狸花", "黄白相间", "灰白相间", "灰蓝色", "纯白", "纯黑", "黑白相间", "三花", "玳瑁"] }
    },
    {
        "type": "select",
        "item": { "item_name": "性别", "name": "gender", "options": ["母", "公"] }
    },
    {
        "type": "select",
        "item": { "item_name": "年龄", "name": "age", "options": ["1月及以下", "1-3月", "3-6月", "6月-1岁", "1-3岁", "3-6岁", "6-8岁", "8-10岁", "10岁以上"] }
    },
    {
        "type": "input",
        "item": { "item_name": "性格", "name": "nature", "placeholder": "小家伙是怎样的性格？" }
    },
    {
        "type": "select",
        "item": { "item_name": "疫苗", "name": "vaccine", "options": ["未接种", "已接种", "未知"] }
    },
    {
        "type": "select",
        "item": { "item_name": "驱虫", "name": "expelling", "options": ["未驱虫", "已驱虫", "未知"] }
    },
    {
        "type": "select",
        "item": { "item_name": "绝育", "name": "neutering", "options": ["未绝育", "已绝育", "未知"] }
    },
    {
        "type": "select",
        "item": { "item_name": "押金", "name": "deposit", "options": ["不需要", "需要"] }
    },
    {
        "type": "input",
        "item": { "item_name": "来源", "name": "origin", "placeholder": "小家伙从哪里来的？" }
    },
    {
        "type": "input",
        "item": { "item_name": "备注", "name": "remark", "placeholder": "最多500字" }
    },
    {
        "type": "image",
        "item": { "item_name": "照片", "name": "photos", "max": 6, "min": 1 }
    }
];

export default fromOption;