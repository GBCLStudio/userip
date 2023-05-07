import Component from 'flarum/core/forum/Component';

export default class IpLocation extends Component {
  view() {
    const user = this.attrs.user;
    // 获取用户 IP 属地的属性
    const ipLocation = user.ipLocation();

    return (
      <div className="Post-ipLocation">
        <div className="Post-ipLocation-content" style={{borderRadius: '10px'}}>
          {ipLocation}
        </div>
      </div>
    );
  }
}