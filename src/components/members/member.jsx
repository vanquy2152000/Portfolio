import "./member.scss";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <div className="name">Chrys</div>
          <div className="position">Leader</div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            dolor sed? Maxime fugiat esse nisi alias perspiciatis corporis cum
            rerum? Eveniet fuga dolorum magni eaque sed ad laborum quam incidunt
            eos doloremque praesentium ipsam blanditiis labore distinctio minus,
            inventore beatae?
          </div>
          <a href="contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <div className="name">CChrys</div>
          <div className="position">Leader</div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            dolor sed? Maxime fugiat esse nisi alias perspiciatis corporis cum
            rerum? Eveniet fuga dolorum magni eaque sed ad laborum quam incidunt
            eos doloremque praesentium ipsam blanditiis labore distinctio minus,
            inventore beatae?
          </div>
          <a href="contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <div className="name">CCChrys</div>
          <div className="position">Leader</div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            dolor sed? Maxime fugiat esse nisi alias perspiciatis corporis cum
            rerum? Eveniet fuga dolorum magni eaque sed ad laborum quam incidunt
            eos doloremque praesentium ipsam blanditiis labore distinctio minus,
            inventore beatae?
          </div>
          <a href="contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
