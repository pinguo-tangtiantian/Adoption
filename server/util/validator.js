import validator from 'validator';

/**
 * 验证注册信息
 * @param {*} payload http请求体
 * @returns {object} 返回对象，包含是否有效结果、错误提示和对整个表单的全局信息
 */
function validateSignupForm(payload) {
    const errors = {};
    let formValid = true;
    let message = "";

    if (!payload || typeof payload.email !== "string" || !validator.isEmail(payload.email)) {//邮箱不合法
        formValid = false;
        errors.email = "邮箱地址无效";
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 6 || payload.password.trim().length > 15) {
        formValid = false;
        errors.password = '密码长度必须在8-15位之间.';
    }

    if (!payload || typeof payload.password !== 'string' || !validator.equals(payload.password, payload.password1)) {
        formValid = false;
        errors.password = '两次密码输入不一致.';
    }

    if (!payload || typeof payload.telephone !== 'string' || !validator.isMobilePhone(payload.telephone, 'zh-CN')) {
        formValid = false;
        errors.telephone = '手机号码无效';
    }

    if (!formValid) {
        message = '请检查登录信息是否有误.';
    }

    return {
        success: formValid,
        message,
        errors
    };

}


/**
 * 验证登录信息
 * @param {*} payload http请求体
 * @returns {object} 返回对象，包含是否有效结果、错误提示和对整个表单的全局信息
 */
function validateLoginForm(payload) {
    const errors = {};
    let formValid = true;
    let message = "";

    if (!payload || typeof payload.email !== "string" || !validator.isEmail(payload.email)) {//邮箱不合法
        formValid = false;
        errors.email = "邮箱地址无效";
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 6 || payload.password.trim().length > 15) {
        formValid = false;
        errors.password = '密码长度必须在8-15位之间.';
    }

    if (!formValid) {
        message = '请检查注册信息是否有误.';
    }

    return {
        success: formValid,
        message,
        errors
    };

}

module.exports = {
    validateSignupForm,
    validateLoginForm
}