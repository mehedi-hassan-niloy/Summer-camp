

const Footer = () => {
    return (
        <footer className="p-10 footer bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Sports Camp</span>
                <a className="link link-hover">Cricket</a>
                <a className="link link-hover">Football</a>
                <a className="link link-hover">Volyball</a>
                <a className="link link-hover">Tenis</a>
            </div>
            <div>
                <span className="footer-title">Sport Camp</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Class</a>
                <a className="link link-hover">Prectice Daily</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;