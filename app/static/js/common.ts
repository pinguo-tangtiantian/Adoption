const Common = {
    /**
     * 获取url地址中的参数
     * @param paramName  参数名
     */
    getUrlParams(url?: string) {
        url = decodeURI(url || window.location.href);
        const idx: number = url.indexOf('?');
        let params: any = {}, ary: any[] = [];
        if (idx != -1) {
            url = url.substring(idx + 1, url.length);
            ary = url.split('&');
            for (let i = 0; i < ary.length; i++) {
                let _idx = ary[i].indexOf('=');
                params[ary[i].substring(0, _idx)] = ary[i].substring(_idx + 1, ary[i].length);
            }
        }
        console.log(params)
        return params;
    }
}

export default Common;