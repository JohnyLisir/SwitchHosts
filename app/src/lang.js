/**
 * @author oldj
 * @blog http://oldj.net
 */

"use strict";

var languages = {
    'en': {
        add: 'Add'
        , cancel: 'Cancel'
        , ok: 'OK'
        , add_host: 'Add new rules.'
        , edit_host: 'Edit host'
        , host_title: 'Host title'
        , host_title_cant_be_empty: 'Host title could not be empty!'
        , sys_host_title: 'System Hosts'
        , input_sudo_pswd: 'Input your sudo password'
        , sudo_pswd: 'Password'
        , del_host: 'Delete current host'
        , confirm_del: 'Are you sure you want to delete this host?'
        , tmp_clean: 'Temporarily turn off all rules.'
        , tmp_recover: 'Recover rules.'
        , new_version_available: 'New version available, download now?'
        , is_updated_title: 'You are up to date!'
        , is_updated: 'You already have the latest version of SwitchHosts! installed.'
        , where_local: 'local'
        , where_remote: 'remote'
        , url: 'URL'
        , bad_url: 'URL is not valid.'
    },
    'cn': {
        add: '添加'
        , cancel: '取消'
        , ok: '确定'
        , add_host: '添加 host 规则'
        , edit_host: '修改 host'
        , host_title: 'host 方案名'
        , host_title_cant_be_empty: 'Host 方案名不能为空！'
        , sys_host_title: '系统 Hosts'
        , input_sudo_pswd: '请输入管理员密码'
        , sudo_pswd: '密码'
        , del_host: '删除当前 host'
        , confirm_del: '确定要删除此 host 吗？'
        , tmp_clean: '临时去掉所有绑定'
        , tmp_recover: '恢复绑定'
        , new_version_available: '检测到新版本，立刻下载？'
        , is_updated_title: '已是最新'
        , is_updated: '当前版本是最新版本。'
        , where_local: '本地'
        , where_remote: '远程'
        , url: 'URL 地址'
        , bad_url: 'URL 地址有误。'
    }
};

module.exports = {
    languages: languages,
    getLang: function (lang) {
        lang = lang.toLowerCase();
        if (lang == 'cn' || lang == 'zh-cn') {
            lang = 'cn';
        } else {
            lang = 'en';
        }
        return languages[lang] || languages['en'];
    }
};
