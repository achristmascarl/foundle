import MascotSVG from './MascotSVG'

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <div>
            <MascotSVG classNames="stroke-current"/>
            <p>
                built by 🐦s at <a href={'/'} className="link-hover" target="_blank" rel="noreferrer">Birb Street</a>
            </p> 
            <p>Copyright © {new Date().getFullYear()}</p>
            </div> 
        </footer>
    );
}
