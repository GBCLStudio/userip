import { extend } from 'flarum/common/extend';
import PostStream from 'flarum/forum/components/PostStream';
import IpLocation from './components/IpLocation';

// 在帖子流中添加 IP 属地组件
extend(PostStream.prototype, 'view', function (vdom) {
  const post = this.attrs.post;
  const user = post.user();

  // 如果用户存在并且有 IP 属地，则在帖子内容后面插入 IP 属地组件
  if (user && user.ipLocation()) {
    const content = vdom.children[0].children[0].children[0];
    content.children.push(IpLocation.component({ user }));
  }
});