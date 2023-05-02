const Navbar = ({notifications}) => {
    return ( 
        <div className="navbar">
            <img src={require('./dogslogo.png')} alt="resimbulunamadi" />
            <h3>DOGS</h3>
            <div className="navbar-elements">
                <p href="/notifications" className="notifications">
                    <img src={require("./notifications.png")} alt="" />
                    <div className="all-notifications">
                        {console.log(notifications)}
                        {notifications && notifications.map(bildirim => (
                            <div className="each-notification" key={bildirim.id}>
                                <a href="">Title:{bildirim.title}</a>
                                <span>Gönderen:{bildirim.gönderen}</span>
                                <span>Tarih:{bildirim.tarih}</span>
                                {console.log(notifications)}
                            </div>
                        ))}
                    </div>
                </p>
                <a href="/allsites">
                    <img src={require("./tabs.png")} alt=""/>
                </a>
                <a href="/profile">
                    <img src={require("./profile.png")} alt="" />
                </a>
            </div>
        </div>
     );
}
//degisiklik
export default Navbar;