const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    avatar: 'https://s1.ax1x.com/2023/06/28/pCdzrbF.jpg',
                    slogan: 'The way up is not crowded, and most chose ease.',
                    name: 'Fusublog',
                    domain: 'https://gitee.com/this-orange-is-not-very-sour/fususblog',
                    notice: '本博客的Demo数据由Mockjs生成',
                    desc: '唯唯诺诺前端探索者'
                }
            }
        }
    },
    // 站点社交信息
    {
        url: '/social',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'QQ',
                        icon: 'iconqq',
                        color: '#1AB6FF ',
                        href: 'https://i.qq.com/'
                    },
                    {
                        id: 2,
                        title: 'Gitee',
                        icon: 'icongitee',
                        color: '#d81e06',
                        href: 'https://gitee.com/this-orange-is-not-very-sour'
                    },
                    {
                        id: 3,
                        title: 'GitHub',
                        icon: 'icongithub',
                        color: '',
                        href: 'https://github.com/Fruhlingserwachen'
                    },
                    {
                        id: 4,
                        title: 'CSDN',
                        icon: 'iconcsdn',
                        color: 'red',
                        href: 'https://blog.csdn.net/qq_51748704?spm=1008.2028.3001.5343'
                    }
                ]
            }
        }
    }
]