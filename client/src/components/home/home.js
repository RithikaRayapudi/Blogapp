import "./home.css";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div className='home-container'>
      <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgi6uCac_rlau1Q_pGchGtIgN7krc9-ltHw&s" alt=""/>
      <div className="home-text">
        <h1 className="h1" style={{color:'var(--crimson)'}}>Blog App</h1>
        <p className="lead">
        The blog app is a web application that enables users to create, publish, and manage blog posts. It supports user registration, login, and personalized accounts. Authors can write, categorize, and tag articles for easy searching, while users can browse, read, and comment on posts. Key features include user authentication, profile management, social sharing, email notifications, and multimedia support. Advanced functionalities may offer analytics for tracking readership and engagement. The app empowers individuals and organizations to share ideas and stories globally.        </p>
      </div>
    </div>
  );
}

export default Home;
