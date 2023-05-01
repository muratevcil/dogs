const Classes = ({classes}) => {
    return ( 
        <div className="classes">
            <div className="main-page-in-classes">
               <img src={require("./homepage.png")} alt="" id />
               <a href="">Ana Sayfa</a>
            </div>
            {classes.map(classe => (
            <div className="class-preview" key={classe.id}>
               <a href="">{classe.kısaisim}-{classe.name}</a>
            </div>
           ))}
        </div>
      );
}
 
export default Classes;