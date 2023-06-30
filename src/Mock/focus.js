const Mock = require('mockjs');
export default [
    {
        url: '/focus/list',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'Akina',
                        img: 'https://s1.ax1x.com/2023/06/28/pCdzDDU.jpg'
                    },
                    {
                        id: 2,
                        title: '使用说明',
                        img: 'https://s1.ax1x.com/2023/06/28/pCdzBuT.jpg'
                    },
                    {
                        id: 3,
                        title: '文章归档',
                        img: 'https://s1.ax1x.com/2023/06/28/pCdzwvV.jpg'
                    }
                ]
            }
        }
    }
]