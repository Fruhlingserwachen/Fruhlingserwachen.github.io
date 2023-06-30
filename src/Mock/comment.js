const Mock = require('mockjs');

const banners = [
    'https://s1.ax1x.com/2023/06/28/pCdxw0e.jpg',
    'https://s1.ax1x.com/2023/06/28/pCdxdmD.jpg',
    'https://s1.ax1x.com/2023/06/28/pCdxUOO.jpg',
    'https://s1.ax1x.com/2023/06/28/pCdxN6K.jpg',
    'https://s1.ax1x.com/2023/06/28/pCdxtl6.jpg'
]
function getComment(count) {
    let List = [];
    mockComment(count,null).map(item => {
        let count = 1 + ~~(Math.random() * 5)
        List.push({comment: item,reply: mockComment(count,item.id,item.fromUserName)})
    })
    return List;
}
function mockComment(count,id,userName) {
    let List = [];
    for (let i = 0; i < count; i++) {
        List.push(Mock.mock({
            id: '@increment',
            postId: '',
            parentId: '',
            fromUserId: '',
            fromUserName: '@cname',
            'fromUserAvatar|+1': banners,
            content: '@ctitle(20,50)',
            createTime: +Mock.Random.date('T'),
            toUserId: id,
            toUserName: userName||'@cname',
            'toUserAvatar|+1': banners,
        }))
    }
    return List;
}

export default [
    {
        url: '/comment',
        type: 'get',
        response: () => {
            let count = 1 + ~~(Math.random() * 5)
            return {
                code: 20000,
                data: getComment(count)
            }
        }
    }
]
