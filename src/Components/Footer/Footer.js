import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const footerStyle = {
    backgroundColor: '#161615',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '20px',
    fontSize: '14px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    margin: '0 10px',
    color: 'white',
  };

  const hrStyle = {
    margin: '30px auto 10px',
    width: '80%',
    border: '1px solid #444',
  };

  const copyStyle = {
    fontSize: '13px',
    marginTop: '10px',
    color: '#aaa',
  };

  return (
    <footer style={footerStyle}>
        <h5 style={{marginBottom:"20px"}}>The Cart.co </h5>
      <div style={navStyle}>
        <a href="/login" style={linkStyle}>Login</a>
        <a href="/signup" style={linkStyle}>Signup</a>
        <a href="/home" style={linkStyle}>Home</a>
        <a href="/dashboard" style={linkStyle}>Dashboard</a>
        <a href="/profile" style={linkStyle}>Profile</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/contact" style={linkStyle}>Contact</a>
        <a href="/team" style={linkStyle}>Team</a>
        <a href="/career" style={linkStyle}>Career</a>
        <a href="/pricing" style={linkStyle}>Pricing</a>
      </div>

      <div>
        <a href="https://instagram.com/lord._.rk" target="_blank" rel="noreferrer">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="https://github.com/Rohankhan999" target="_blank" rel="noreferrer">
          <FaGithub style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-rohan-32317129b/" target="_blank" rel="noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
      </div>

      <hr style={hrStyle} />
      <div style={copyStyle}>© The Cart 2025</div>
    </footer>
  );
}

export default Footer;
